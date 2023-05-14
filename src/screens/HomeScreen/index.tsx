import React, { SetStateAction, useState } from "react";

import {
  ChampCard,
  ChampsCardsContainer,
  DifficultyFiltersContainer,
  FilterButton,
  HomeScreenBody,
  HomeScreenContainer,
  HomeScreenHeader,
  Logo,
  LogoContainer,
  LogoutButton,
  LogoutText,
  SearchBar,
  SearchBarContainer,
  SideBar,
  SideBarDivider,
  MenuContainer,
  LogoContainerResponsive,
  ArrowIconContainer,
  SeachArrowContainer,
  SearchIconResponsive,
  SideBarResponsive,
  RolesFilter,
  FiltersContainer,
  RolesFilterContainer,
  DifficultyFilter,
  DeleteButton,
  SearchIcon,
  DeleteTextButton,
  ChampName,
  ChampNameDiv,
  // FloatingText,
} from "./styles";

import { MdArrowForwardIos, MdOutlineLogout } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClear } from "react-icons/md";
import lolLogo from "../../assets/lol-logo.png";
import { Sidebar } from "./Sidebar";
import axios from "axios";
import {
  ChampionElement,
  ChampsListResponse,
} from "../../interfaces/ChampsListInterface";
import { RefetchOptions, RefetchQueryFilters, useQuery } from "react-query";
import { ReactNode, useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import { History } from "history";
import { RolesType } from "../../constants/index";
import { Loader } from "../../components/Loader";

type Anchor = "left";

// export type History = {
//   push: (path: string) => void;
//   history: History;
// };

export type Classes = {
  Drawer: string;
};

const ChampCardWithHover = ({ champ }: { champ: ChampionElement }) => {
  const [show, setShow] = useState(false);

  const handleMouseOver = () => {
    setShow(true);
  };

  const handleMouseOut = () => {
    setShow(false);
  };

  return (
    <ChampCard
      style={{
        backgroundImage: `url(${champ.node.champion_splash})`,
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <ChampNameDiv show={show}>
        <ChampName>{champ.node.champion_name}</ChampName>
      </ChampNameDiv>
    </ChampCard>
  );
};

export const HomeScreen = () => {
  const [Champs, setChamps] = useState<ChampionElement[]>([]);
  const {
    data: champs,
    isError,
    error,
    isLoading,
    isFetching,
    refetch: refetchChamps,
  } = useQuery({
    queryKey: ["champs"],
    queryFn: async () => getChamps(),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  const [searchValue, setSearchValue] = useState("" as string);
  const [champsFiltered, setChampsFiltered] = useState<ChampionElement[]>([]);
  // const {
  //   data: champsFilteredByName,
  //   refetch: refetchChampsByName,
  //   isFetching,
  // } = useQuery({
  //   queryKey: ["champsFilteredByName"],
  //   queryFn: () => getChampsByName(searchChamp),
  //   refetchOnWindowFocus: false,
  //   staleTime: Infinity,
  //   initialData: champs,
  // });
  // console.log("initialData champsFilteredByname", champs);

  const { data: champsRole, refetch: refetchChampsByRole } = useQuery({
    queryKey: ["champsByRole"],
    queryFn: () => getChampsByRole("Tank"),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  // console.log("champsRole USEQUERY", champsRole);

  useEffect(() => {
    if (champs) {
      setChampsFiltered(champs as ChampionElement[]);
      console.log("champsFiltered", champsFiltered);
    }
  }, [champs]);

  const roles = [
    "Assassin",
    "Mage",
    "Tank",
    "Support",
    "Fighter",
    "Marksman",
  ].toString();

  const champCardHover = (champ: ChampionElement) => {
    /////////////////////////////////////////////////////////////////////////////////////******************* */
    return (
      <ChampNameDiv show={true}>
        <ChampName>{champ.node.champion_name}</ChampName>
      </ChampNameDiv>
    );
  };

  // const handleDeleteButtonClick = () => {
  //   setSearchValue("");

  //   refetchChampsByName().then(() =>
  //     setChampsFiltered(champs as ChampionElement[])
  //   );
  // };

  const handleDeleteButtonClick = () => {
    setSearchValue("");
    // refetchChamps().then((data) =>
    //   setChamps(data.data as SetStateAction<ChampionElement[]>)
    // );

    // refetchChampsByName().then((data) =>
    //   console.log("data.data", data.data as SetStateAction<ChampionElement[]>)
    // );
    setChampsFiltered(champs as ChampionElement[]); // Cambio el estado de champsFiltered, y que me muestre los champs iniciales
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const searchChamp = searchValue.trim().toLocaleLowerCase();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const searchInput = e.currentTarget.elements.namedItem(
    //   "searchChamp"
    // ) as HTMLInputElement;
    // const searchChamp = searchInput.value.toLocaleLowerCase().trim();
    // return refetchChampsByName();
    if (searchChamp === "") return;
    refetchChamps();
    return getChampsByName(searchChamp);
  };
  // const getChamps = async () => {
  //   const url = `https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=1&size=1.8`;
  //   const headers = {
  //     "X-RapidAPI-Key": "36d0f53ee9msh3a618e1e5aecca5p1906b1jsn2172de59bbcd",
  //     "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
  //   };

  //   return await axios
  //     .get<ChampsListResponse>(url, { headers })
  //     .then(({ data }) => setChamps(data.champions))
  //     .catch((error) => console.log(error));
  // };

  const getChamps = async () => {
    const url = `https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=0&size=10`;
    const headers = {
      "X-RapidAPI-Key": "36d0f53ee9msh3a618e1e5aecca5p1906b1jsn2172de59bbcd",
      "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
    };

    try {
      const response = await axios.get<ChampsListResponse>(url, { headers });
      // setChamps(response.data.champions);
      return response.data.champions;
    } catch (error) {
      console.log(error);
    }
  };

  const getChampsByRole = async (role: string) => {
    const options = {
      method: "GET",
      url: "https://league-of-legends-champions.p.rapidapi.com/champions/en-us",
      params: {
        page: "0",
        size: "10",
        role,
      },
      headers: {
        "X-RapidAPI-Key": "36d0f53ee9msh3a618e1e5aecca5p1906b1jsn2172de59bbcd",
        "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      const RoleChamps: any = response.data.champions.filter(
        (champ: ChampionElement) => champ.node.recommended_roles.includes(role)
      );
      return RoleChamps;
      // setChamps(RoleChamps);
      //  refetchear champs y cambiarle la queryFn a getCgamspByRole ////////////////////////////////////////////////////////////////////////////
      // try {
      //   const RoleChamps = champs?.filter((champ: ChampionElement) =>
      //     champ.node.recommended_roles.includes(role)
      //   );
      //   console.log(RoleChamps); // TODO: Remove
    } catch (error) {
      console.log(error);
    }
  };

  const getChampsByName = async (name: string) => {
    const options = {
      method: "GET",
      url: "https://league-of-legends-champions.p.rapidapi.com/champions/en-us",
      params: {
        page: "0",
        size: "10",
        name,
      },
      headers: {
        "X-RapidAPI-Key": "36d0f53ee9msh3a618e1e5aecca5p1906b1jsn2172de59bbcd",
        "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
      },
    };
    const response = await axios.request<ChampsListResponse>(options);
    // return response.data.champions;
    setChampsFiltered(response.data.champions);
  };

  if (isLoading) return <Loader />;
  else if (isError)
    return <div> Something went wrong: {error as ReactNode} </div>;

  return (
    <HomeScreenContainer>
      <HomeScreenHeader>
        <LogoContainerResponsive>
          <Logo
            src={lolLogo}
            alt="league-of-legends-logo"
            onClick={() => {
              setSearchValue("");
              setChampsFiltered(champs as ChampionElement[]);
              refetchChamps();
            }}
          />
        </LogoContainerResponsive>

        <LogoContainer>
          <Logo
            src={lolLogo}
            alt="league-of-legends-logo"
            onClick={() => {
              setSearchValue("");
              setChampsFiltered(champs as ChampionElement[]);
              refetchChamps();
            }}
          />
        </LogoContainer>
        <SeachArrowContainer>
          <MenuContainer>
            <Sidebar />
          </MenuContainer>

          <SearchBarContainer onSubmit={handleSearch}>
            {searchValue !== "" ? (
              <SearchIcon
                style={{ cursor: "pointer" }}
                onClick={() => {
                  refetchChamps();
                  getChampsByName(searchChamp);
                }}
              />
            ) : (
              <SearchIcon
                size={25}
                fill="#3A3A40"
                style={{ cursor: "pointer" }}
              />
            )}
            <SearchBar
              type="text"
              placeholder="Search champ"
              name="searchValue"
              value={searchValue}
              onChange={handleInputChange}
              autoComplete="off"
            />
            {/* refetchChampsByName() */}
            {/* () => setSearchValue("") */}
            {searchChamp !== "" && (
              <DeleteButton show={true} onClick={handleDeleteButtonClick}>
                <DeleteTextButton />
              </DeleteButton>
            )}
          </SearchBarContainer>

          <ArrowIconContainer>
            <MdArrowForwardIos size={25} fill="#3A3A40" />
          </ArrowIconContainer>
        </SeachArrowContainer>
      </HomeScreenHeader>

      <HomeScreenBody>
        <SideBar>
          <RolesFilterContainer>
            <RolesFilter>Roles</RolesFilter>

            <FilterButton onClick={() => refetchChampsByRole()}>
              Assassin
            </FilterButton>
            <FilterButton onClick={() => getChampsByRole("Tank")}>
              Tank
            </FilterButton>
            <FilterButton onClick={() => getChampsByRole("Mage")}>
              Mage
            </FilterButton>
            <FilterButton onClick={() => getChampsByRole("Fighter")}>
              Fighter
            </FilterButton>
            <FilterButton onClick={() => getChampsByRole("Marksman")}>
              Marksman
            </FilterButton>
            <FilterButton onClick={() => getChampsByRole("Support")}>
              Support
            </FilterButton>
          </RolesFilterContainer>

          <DifficultyFiltersContainer>
            <DifficultyFilter>Difficulty</DifficultyFilter>
            <FilterButton>Easy</FilterButton>
            <FilterButton>Medium</FilterButton>
            <FilterButton>Hard</FilterButton>
          </DifficultyFiltersContainer>
          <LogoutButton>
            <MdOutlineLogout />
            <LogoutText>Log Out</LogoutText>
          </LogoutButton>
        </SideBar>
        <SideBarDivider />
        <ChampsCardsContainer>
          {isFetching ? (
            <Loader />
          ) : (
            champsFiltered?.map((champ: ChampionElement) => (
              <ChampCardWithHover key={champ.node.uid} champ={champ} />
            ))
          )}

          {/* {champs?.map((champ: ChampionElement) => (
            <ChampCard
              key={champ.node.uid}
              style={{ backgroundImage: `url(${champ.node.champion_splash})` }}
            />
          ))} */}
        </ChampsCardsContainer>
      </HomeScreenBody>
    </HomeScreenContainer>
  );
};
