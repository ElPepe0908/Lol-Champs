/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { baseUrl, initialChampsToRender } from "../constants";
import {
  Datum,
  NewChampsListResponse,
} from "../interfaces/NewChampsListResponse";
import { useQuery } from "react-query";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type Anchor = "left";
export const useHomeScreen = () => {
  const {
    data: champs,
    refetch: refetchChamps,
    isFetching: isFetchingChamps,
  } = useQuery({
    queryKey: ["champs"],
    queryFn: async () => getChamps(),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  const [searchValue, setSearchValue] = useState("" as string);
  const [champsFiltered, setChampsFiltered] = useState<Datum[]>(
    new Array(initialChampsToRender).fill("")
  );
  const [selectedRole, setSelectedRole] = useState(null);
  const [showClickedRole, setShowClickedRole] = useState(false);
  const [originalChampsData, setOriginalChampsData] = useState<Datum[]>([]);
  const [selectFilter, setSelectFilter] = useState(null);
  const [show, setShow] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hoveredChamp, setHoveredChamp] = useState(null);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const { state } = useLocation();

  const [drawerState, setDrawerState] = useState({
    left: false,
  });

  const searchChamp = searchValue.toLocaleLowerCase().trim();

  useEffect(() => {
    if (!selectFilter && searchChamp.trim() === "") {
      setChampsFiltered(originalChampsData);
    }
  }, [selectFilter, originalChampsData, searchChamp]);

  useEffect(() => {
    if (searchChamp === "" && champs) {
      setChampsFiltered(Object.values(champs));
    }
    refetchChamps();
    getChampsByName(searchChamp);
  }, [searchChamp]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsIntersecting(entry.isIntersecting);
      });
    }, observerOptions);

    const element = elementRef.current;

    if (element) {
      observer.observe(element);
    }
  }, []);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerState({ ...drawerState, [anchor]: open });
    };

  const handleClickFilter = (role: any) => {
    if (selectFilter === role) {
      setSelectFilter(null);
      setShowClickedRole(false);
    } else {
      setSelectFilter(role);
      setShowClickedRole(true);
    }
  };

  const handleRoleOver = (role: any) => {
    if (selectFilter === role) {
      setSelectedRole(null);
    } else {
      setSelectedRole(role);
    }
  };
  const handleRoleOut = () => {
    setSelectedRole(null);
  };

  const backToOriginalChamps = () => {
    setSearchValue("");
    setChampsFiltered(originalChampsData);
    refetchChamps();
  };

  const navigateToLogin = () => {
    navigate("/");
  };
  const navigateToLastChampDetail = () => {
    if (state?.championName) {
      const championPath = state.championName.includes(" ")
        ? state.championName.replace(/\s/g, "-")
        : state.championName.replace(/'/g, "-");
      navigate(`/champ-detail/${championPath}`, {
        state: { championName: state?.championName },
      });
    }
  };

  const handleDeleteButtonClick = () => {
    setSearchValue("");
    setChampsFiltered(originalChampsData);
  };

  const handleMouseOver = (tag: any) => {
    setShow(true);
    setHoveredChamp(tag);
  };

  const handleMouseOut = () => {
    setShow(false);
    setHoveredChamp(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      console.log("enter");
      e.preventDefault();
    } else if (e.key === "Escape") {
      console.log("escape");
      setSearchValue("");
    }
  };
  const getChamps = async () => {
    const url = `http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json`;
    try {
      const response = await axios.get<NewChampsListResponse>(url);
      const champsData = response.data.data;
      setOriginalChampsData(Object.values(champsData));
      return champsData;
    } catch (error) {}
  };
  const getChampsByTag = (tag: any) => {
    const filterNewChamp = originalChampsData?.filter((champ: Datum) =>
      champ.tags.includes(tag)
    );
    setChampsFiltered(filterNewChamp);
  };

  const getChampsByDifficulty = (difficulty: number) => {
    let minDifficulty = 0;
    let maxDifficulty = 10;

    if (difficulty === 0) {
      maxDifficulty = 3;
    } else if (difficulty === 4) {
      minDifficulty = 4;
      maxDifficulty = 7;
    } else if (difficulty === 8) {
      minDifficulty = 8;
      maxDifficulty = 10;
    }

    const filterNewChamp = originalChampsData?.filter(
      (champ: Datum) =>
        champ.info.difficulty >= minDifficulty &&
        champ.info.difficulty <= maxDifficulty
    );
    setChampsFiltered(filterNewChamp);
  };

  const getChampsSplash = (id: string) => {
    try {
      const imageUrl = `${baseUrl}${id}_0.jpg`;
      return imageUrl;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getChampsByName = async (name: string) => {
    const filterNewChamp = originalChampsData.filter((champ: Datum) =>
      champ?.name?.toLocaleLowerCase().includes(name)
    );
    setChampsFiltered(filterNewChamp);
  };

  const champToNavigate = () => {
    const clickedChampion = champsFiltered.find(
      (champ) => champ.name === hoveredChamp
    );
    return clickedChampion;
  };
  const championPathName = () => {
    if (champToNavigate()) {
      return champToNavigate()?.name.replace(/\s/g, "-").replace(/'/g, "-");
    }
  };
  const navigateToChampionDetail = () => {
    const championPath = championPathName();

    navigate(`/champ-detail/${championPath}`, {
      state: { championName: hoveredChamp },
    });
  };

  return {
    setSearchValue,
    setChampsFiltered,
    originalChampsData,
    refetchChamps,
    searchChamp,
    getChampsByName,
    searchValue,
    handleInputChange,
    handleDeleteButtonClick,
    championName: state?.championName,
    navigateToLastChampDetail,
    handleClickFilter,
    getChampsByTag,
    selectFilter,
    selectedRole,
    handleRoleOver,
    handleRoleOut,
    showClickedRole,
    getChampsByDifficulty,
    navigateToLogin,
    champsFiltered,
    getChampsSplash,
    isFetchingChamps,
    backToOriginalChamps,
    elementRef,
    isIntersecting,
    handleMouseOver,
    handleMouseOut,
    show,
    navigateToChampionDetail,
    toggleDrawer,
    drawerState,
    handleKeyDown,
    hoveredChamp,
  };
};
