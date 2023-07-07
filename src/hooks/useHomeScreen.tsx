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
  const elementRef = useRef();
  const navigate = useNavigate();
  const { state } = useLocation();

  const [drawerState, setDrawerState] = useState({
    left: false,
  });

  const searchChamp = searchValue.toLocaleLowerCase().trim();

  useEffect(
    () => console.log("isIntersecting", isIntersecting),
    [isIntersecting]
  );

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
    const element = elementRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("entry.isIntersecting", entry);
          setIsIntersecting(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
      }
    );
    console.log("observer", observer);
    console.log("element", element);

    if (element) {
      console.log("inside if element");
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

  const handleMouseOver = () => {
    setShow(true);
  };

  const handleMouseOut = () => {
    setShow(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
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

  const navigateChampionPath = () => {
    champsFiltered.map((champ) => {
      champ.name.includes(" ")
        ? champ.name.replace(/\s/g, "-")
        : champ?.name.replace(/'/g, "-");
    });
  };
  const navigateToChampionDetail = () => {
    navigate(`/champ-detail/${navigateChampionPath}`, {
      state: { championName: champs?.data.id.id },
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
  };
};
