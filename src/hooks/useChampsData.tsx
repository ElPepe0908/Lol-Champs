import { useQuery } from "react-query";
import { useState, useEffect, useRef } from "react";
import {
  Data,
  Datum,
  NewChampsListResponse,
  Tag,
} from "../interfaces/NewChampsListResponse";
import axios from "axios";
import { initialChampsToRender } from "../constants";
import { useLocation, useNavigate } from "react-router-dom";

export const useChampsData = () => {
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
  const [originalChampsData, setOriginalChampsData] = useState<Datum[]>([]);
  const [showClickedRole, setShowClickedRole] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);
  const [selectFilter, setSelectFilter] = useState(null);
  const [show, setShow] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef();
  const navigate = useNavigate();
  const { state } = useLocation();

  const searchChamp = searchValue.toLocaleLowerCase().trim();

  useEffect(() => {
    if (!selectFilter && searchChamp.trim() === "" && champs) {
      console.log("new value of champsFiltered 1", Object.values(champs));
      setChampsFiltered(Object.values(champs));
    }
  }, [selectFilter, searchChamp, champs]);

  useEffect(() => {
    if (searchChamp.trim() === "" && champs) {
      console.log("new value of champsFiltered 2", Object.values(champs));
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
          setIsIntersecting(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (element) {
      observer.observe(element);
    }
  }, []);

  const navigateToLogin = () => {
    navigate("/");
  };
  const navigateToLastChampDetail = () => {
    navigate(`/champ-detail/${championPath}`, {
      state: { championName: state.championName },
    });
  };

  const championPath = () => {
    if (state?.championName) {
      state.championName.includes(" ")
        ? state.championName.replace(/\s/g, "-")
        : state.championName.replace(/'/g, "-");
    }
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

  const handleClickFilter = (role: any) => {
    if (selectFilter === role) {
      return setSelectFilter(null), setShowClickedRole(false);
    }
    setSelectFilter(role);
    setShowClickedRole(true);
  };

  const handleRoleOver = (role: any) => {
    if (selectFilter === role) return setSelectedRole(null);
    return setSelectedRole(role);
  };

  const handleRoleOut = () => {
    setSelectedRole(null);
  };

  const handleDeleteButtonClick = () => {
    setSearchValue("");
    console.log("new value of champsFiltered 3", originalChampsData);
    setChampsFiltered(originalChampsData);
  };

  const backToOriginalChamps = () => {
    console.log("new value of champsFiltered 4", originalChampsData);
    setSearchValue("");
    setChampsFiltered(originalChampsData);
    refetchChamps();
  };

  const getChamps = async () => {
    const url = `http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json`;
    try {
      const response = await axios.get<Data>(url);
      const champsData = response.data.data;
      setOriginalChampsData(Object.values(champsData));
      return champsData;
    } catch (error) {}
  };

  const getChampsByTag = (tag: Tag) => {
    const filterNewChamp = originalChampsData?.filter((champ: Datum) =>
      champ.tags.includes(tag)
    );
    console.log("new value of champsFiltered 5", filterNewChamp);
    setChampsFiltered(filterNewChamp);
  };
  //   // console.log("champsFiltered from Hook", champsFiltered);

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
    console.log("new value of champsFiltered 6", filterNewChamp);
    setChampsFiltered(filterNewChamp);
  };

  const getChampsByName = async (name: string) => {
    const filterNewChamp = originalChampsData.filter((champ: Datum) =>
      champ?.name?.toLocaleLowerCase().includes(name)
    );
    console.log("new value of champsFiltered 7", filterNewChamp);
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
      state: { championName: champs?.id },
    });
  };

  return {
    champs,
    refetchChamps,
    isFetchingChamps,
    showClickedRole,
    selectedRole,
    selectFilter,
    show,
    isIntersecting,
    elementRef,
    searchChamp,
    handleMouseOver,
    handleMouseOut,
    handleInputChange,
    handleClickFilter,
    handleRoleOver,
    handleRoleOut,
    handleDeleteButtonClick,
    backToOriginalChamps,
    getChamps,
    getChampsByTag,
    getChampsByDifficulty,
    getChampsByName,
    navigateToChampionDetail,
    searchValue,
    originalChampsData,
    champsFiltered,
    navigate,
    state,
    navigateToLastChampDetail,
    navigateToLogin,
  };
};
