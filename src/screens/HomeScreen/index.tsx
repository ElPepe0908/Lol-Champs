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
  LoaderContainer,
  ChampRequestContainer,
  ChampCardRequest,
  SelectFilterButton,
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
import { Link, Outlet, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";
import { RolesType, initialChampsToRender } from "../../constants/index";
import { Loader } from "../../components/Loader";
import { AppRouter } from "../../routes/AppRouter";

type Anchor = "left";

export type Classes = {
  Drawer: string;
};

const ChampCardWithHover = ({ champ }: { champ: ChampionElement }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const navigateToChampionDetail = () => {
    navigate(`/champ-detail/${champ.node.champion_name}`, {
      state: { champion: champ },
    });
  };

  const handleMouseOver = () => {
    setShow(true);
  };

  const handleMouseOut = () => {
    setShow(false);
  };

  const champCardStyle = champ
    ? { backgroundImage: `url(${champ.node.champion_splash})` }
    : { alignItems: "center" };

  return (
    <ChampCard
      style={champCardStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={navigateToChampionDetail}
    >
      {champ ? (
        <ChampNameDiv show={show}>
          <ChampName>{champ.node.champion_name}</ChampName>
        </ChampNameDiv>
      ) : (
        <Loader />
      )}
    </ChampCard>
  );
};

export const HomeScreen = () => {
  const { data: champs, refetch: refetchChamps } = useQuery({
    queryKey: ["champs"],
    queryFn: async () => getChamps(),
    refetchOnWindowFocus: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  const [searchValue, setSearchValue] = useState("" as string);
  const [champsFiltered, setChampsFiltered] = useState<ChampionElement[]>(
    new Array(initialChampsToRender).fill("")
  );
  const [requestCount, setRequestCount] = useState(0);
  const [newChamps, setNewChamps] = useState<ChampionElement[]>([]);
  const [selectedRole, setselectedRole] = useState(null);
  const [showSelectedRole, setShowSelectedRole] = useState(false);

  const handleRoleOver = (role: any) => {
    setselectedRole(role);
    setShowSelectedRole(true);
    console.log("selectedRole", selectedRole);
  };
  const handleRoleOut = () => {
    setselectedRole(null);
    setShowSelectedRole(false);
    console.log("selectedRole", selectedRole);
  };
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };
  console.log("champsFiltered", champsFiltered);
  const requestNewChamps = async () => {
    if (requestCount >= 2) {
      return;
    }
    const newChamps = await getChamps();
    const filterNewChamps = newChamps?.filter((newChamp) => {
      return !champsFiltered.some(
        (champ) => champ.node.uid === newChamp.node.uid
      );
    });
    setNewChamps(newChamps as ChampionElement[]);
    setChampsFiltered((prevChamps) => {
      return [
        ...prevChamps,
        ...(filterNewChamps as ChampionElement[]),
        ...(newChamps as ChampionElement[]),
      ];
    });
    setRequestCount((prevCount) => prevCount + 1);
    console.log("requestCount", requestCount);
    console.log("newChamps", newChamps);
    console.log("champsFiltered", champsFiltered);
  };

  useEffect(() => {
    if (champs) {
      setChampsFiltered(champs as ChampionElement[]);
    }
  }, [champs]);

  const handleDeleteButtonClick = () => {
    setSearchValue("");
    setChampsFiltered(champs as ChampionElement[]); // Cambio el estado de champsFiltered, y que me muestre los champs iniciales
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  const searchChamp = searchValue.trim().toLocaleLowerCase();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchChamp === "") return;
    refetchChamps();
    return getChampsByName(searchChamp);
  };

  const getChamps = async () => {
    // const url = `https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=${requestCount}&size=10`;
    // const url = `panConQueso${requestCount}`;
    const url = `http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json`;
    // const headers = {
    //   "X-RapidAPI-Key": "36d0f53ee9msh3a618e1e5aecca5p1906b1jsn2172de59bbcd",
    //   "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
    // };

    try {
      const response = await axios.get(url);
      // setChamps(response.data.champions);
      console.log("response.data", response.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  };

  const getChampsByRole = async (role: string) => {
    const options = {
      method: "GET",
      // url: "https://league-of-legends-champions.p.rapidapi.com/champions/en-us",
      url: `panConQueso${role}`,
      params: {
        page: requestCount,
        size: 10,
        role,
      },
      headers: {
        "X-RapidAPI-Key": "36d0f53ee9msh3a618e1e5aecca5p1906b1jsn2172de59bbcd",
        "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request<ChampsListResponse>(options);
      const RoleChamps: ChampionElement[] = response.data.champions.filter(
        (champ: ChampionElement) => champ.node.recommended_roles.includes(role)
      );
      setChampsFiltered(RoleChamps);
    } catch (error) {
      console.log(error);
      return champsFiltered;
    }
  };

  const getChampsByName = async (name: string) => {
    const options = {
      method: "GET",
      // url: "https://league-of-legends-champions.p.rapidapi.com/champions/en-us",
      url: `panConQueso${requestCount}`,
      params: {
        page: requestCount,
        size: 10,
        name,
      },
      headers: {
        "X-RapidAPI-Key": "36d0f53ee9msh3a618e1e5aecca5p1906b1jsn2172de59bbcd",
        "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
      },
    };
    const response = await axios.request<ChampsListResponse>(options);
    setChampsFiltered(response.data.champions);
  };
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

            <FilterButton
              onClick={() => getChampsByRole("Assassin")}
              onMouseOver={() => handleRoleOver("Assassin")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Assassin" ? (
                <>
                  <SelectFilterButton show={showSelectedRole} />
                  <p style={{ color: "#fff", margin: 0 }}>Assassin</p>
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Assassin</p>
              )}
            </FilterButton>
            <FilterButton
              onClick={() => getChampsByRole("Tank")}
              onMouseOver={() => handleRoleOver("Tank")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Tank" ? (
                <>
                  <SelectFilterButton show={showSelectedRole} />
                  <p style={{ color: "#fff", margin: 0 }}>Tank</p>
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Tank</p>
              )}
            </FilterButton>
            <FilterButton
              onClick={() => getChampsByRole("Mage")}
              onMouseOver={() => handleRoleOver("Mage")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Mage" ? (
                <>
                  <SelectFilterButton show={showSelectedRole} />
                  <p style={{ color: "#fff", margin: 0 }}>Mage</p>
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Mage</p>
              )}
            </FilterButton>
            <FilterButton
              onClick={() => getChampsByRole("Fighter")}
              onMouseOver={() => handleRoleOver("Fighter")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Fighter" ? (
                <>
                  <SelectFilterButton show={showSelectedRole} />
                  <p style={{ color: "#fff", margin: 0 }}>Fighter</p>
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Fighter</p>
              )}
            </FilterButton>
            <FilterButton
              onClick={() => getChampsByRole("Marksman")}
              onMouseOver={() => handleRoleOver("Marksman")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Marksman" ? (
                <>
                  <SelectFilterButton show={showSelectedRole} />
                  <p style={{ color: "#fff", margin: 0 }}>Marksman</p>
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Marksman</p>
              )}
            </FilterButton>
            <FilterButton
              onClick={() => getChampsByRole("Support")}
              onMouseOver={() => handleRoleOver("Support")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Support" ? (
                <>
                  <SelectFilterButton show={showSelectedRole} />
                  <p style={{ color: "#fff", margin: 0 }}>Support</p>
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Support</p>
              )}
            </FilterButton>
          </RolesFilterContainer>

          <DifficultyFiltersContainer>
            <DifficultyFilter>Difficulty</DifficultyFilter>
            <FilterButton
              onMouseOver={() => handleRoleOver("Easy")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Easy" ? (
                <>
                  <SelectFilterButton show={showSelectedRole} />
                  <p style={{ color: "#fff", margin: 0 }}>Easy</p>
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Easy</p>
              )}
            </FilterButton>
            <FilterButton
              onMouseOver={() => handleRoleOver("Medium")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Medium" ? (
                <>
                  <SelectFilterButton show={showSelectedRole} />
                  <p style={{ color: "#fff", margin: 0 }}>Medium</p>
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Medium</p>
              )}
            </FilterButton>
            <FilterButton
              onMouseOver={() => handleRoleOver("Hard")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Hard" ? (
                <>
                  <SelectFilterButton show={showSelectedRole} />
                  <p style={{ color: "#fff", margin: 0 }}>Hard</p>
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Hard</p>
              )}
            </FilterButton>
          </DifficultyFiltersContainer>
          <LogoutButton>
            <MdOutlineLogout
              style={{ cursor: "pointer" }}
              onClick={navigateToLogin}
            />
            <LogoutText onClick={navigateToLogin}>Log Out</LogoutText>
          </LogoutButton>
        </SideBar>
        <SideBarDivider />
        <ChampsCardsContainer>
          {champsFiltered.map((champ: ChampionElement) => (
            <ChampCardWithHover key={champ?.node?.uid} champ={champ} />
          ))}
          {/* {isFetching ? (
            <Loader />
          ) : (
            champsFiltered?.map((champ: ChampionElement) => (
              <ChampCardWithHover key={champ.node.uid} champ={champ} />
            ))
          )} */}

          {/* {champs?.map((champ: ChampionElement) => (
            <ChampCard
              key={champ.node.uid}
              style={{ backgroundImage: `url(${champ.node.champion_splash})` }}
            />
          ))} */}
          <ChampRequestContainer>
            {/* <RequestButtonContainer> */}
            <ChampCardRequest onClick={requestNewChamps}>
              Show more
            </ChampCardRequest>
            {/* </RequestButtonContainer> */}
          </ChampRequestContainer>
        </ChampsCardsContainer>
      </HomeScreenBody>
    </HomeScreenContainer>
  );
};
