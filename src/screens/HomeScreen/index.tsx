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
import { RefetchOptions, RefetchQueryFilters, useQuery } from "react-query";
import { ReactNode, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useNavigate } from "react-router-dom";
import { RolesType, initialChampsToRender } from "../../constants/index";
import { Loader } from "../../components/Loader";
import { AppRouter } from "../../routes/AppRouter";
import {
  NewChampsListResponse,
  Tag,
  Data,
  Datum,
} from "../../interfaces/NewChampsListResponse";

const ChampCardWithHover = ({
  champ,
  champSplash,
}: {
  champ: NewChampsListResponse;
  champSplash?: string;
}) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  console.log("champSplash", champSplash);
  const navigateToChampionDetail = () => {
    navigate(`/champ-detail/${champ.data.data.name.name}`, {
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
    ? {
        backgroundImage:
          "url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg)",
      }
    : { alignItems: "center" };

  return (
    <ChampCard
      style={{
        // backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg)`,
        backgroundImage: `url(${champSplash})`,
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={navigateToChampionDetail}
    >
      {champ ? (
        <ChampNameDiv show={show}>
          {/* <ChampName>{champ.data.data.name.name}</ChampName> */}
          <ChampName>Zed</ChampName>
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
  const [champsFiltered, setChampsFiltered] = useState<NewChampsListResponse[]>(
    new Array(initialChampsToRender).fill("")
  );
  console.log("champsFiltered", champsFiltered);
  const [requestCount, setRequestCount] = useState(0);
  const [newChamps, setNewChamps] = useState<NewChampsListResponse[]>([]);
  const [selectedRole, setselectedRole] = useState(null);
  const [showSelectedRole, setShowSelectedRole] = useState(false);

  const handleRoleOver = (role: any) => {
    setselectedRole(role);
    setShowSelectedRole(true);
  };
  const handleRoleOut = () => {
    setselectedRole(null);
    setShowSelectedRole(false);
  };
  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate("/login");
  };
  const requestNewChamps = async () => {
    // if (requestCount >= 2) {
    //   return;
    // }
    const newChamps = (await getChamps()) as NewChampsListResponse[];
    const filterNewChamps = newChamps.filter((newChamp) => {
      /////////////////////////////////////////////// RESOLVER PROBLEMA DE ARRAY DEL MAP
      return !champsFiltered.some(
        (champ) => champ.data.data.id === newChamp.data.data.id
      );
      // return !champsFiltered.some((champ) => champ.id === newChamp.id);
    });
    setNewChamps(newChamps as NewChampsListResponse[]);
    setChampsFiltered((prevChamps) => {
      return [
        ...prevChamps,
        ...(filterNewChamps as NewChampsListResponse[]),
        ...(newChamps as NewChampsListResponse[]),
      ];
    });
    setRequestCount((prevCount) => prevCount + 1);
    console.log("requestCount", requestCount);
    console.log("newChamps", newChamps);
    console.log("champsFiltered", champsFiltered);
  };

  useEffect(() => {
    if (champs) {
      setChampsFiltered(champs); // Cambio el estado de champsFiltered, y que me muestre los champs iniciales
      // setChampsFiltered((prevChamps) => [...prevChamps, ...champs]);
    }
  }, [champs]);

  const handleDeleteButtonClick = () => {
    setSearchValue("");
    setChampsFiltered(champs as NewChampsListResponse[]); // Cambio el estado de champsFiltered, y que me muestre los champs iniciales
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
      const response = await axios.get<NewChampsListResponse[]>(url);
      // setChamps(response.data.champions);
      const champsData = response.data;
      console.log("champsData", champsData);
      return champsData;
    } catch (error) {
      console.log(error);
    }
  };

  // const getChampsByRole = async (role: string) => {
  //   const options = {
  //     method: "GET",
  //     // url: "https://league-of-legends-champions.p.rapidapi.com/champions/en-us",
  //     url: `panConQueso${role}`,
  //     params: {
  //       page: requestCount,
  //       size: 10,
  //       role,
  //     },
  //     headers: {
  //       "X-RapidAPI-Key": "36d0f53ee9msh3a618e1e5aecca5p1906b1jsn2172de59bbcd",
  //       "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
  //     },
  //   };
  //   try {
  //     const response = await axios.request<NewChampsListResponse>(options);
  //     console.log("response", response);
  //     const RoleChamps = response.data.data.data.tags.filter(
  //       (tags: Tag) => tags.includes(role as Tag)
  //       // (champ: NewChampsListResponse) => champ.data.data.tags.includes(role as Tag)
  //     );
  //     setChampsFiltered(RoleChamps);
  //   } catch (error) {
  //     console.log(error);
  //     return champsFiltered;
  //   }
  // };
  const getChampsByTag = (tag: string) => {
    champsFiltered.filter((champ: NewChampsListResponse) =>
      champ.data.data.tags.tags.includes(tag as Tag)
    );
  };

  const getChampsSplash = async (id: string) => {
    // const url = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`;
    const baseUrl =
      "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";
    const imageUrl = `${baseUrl}${id}_0.jpg`;
    console.log("imageUrl", imageUrl);
    await new Promise((resolve) => setTimeout(resolve, 500));
    return imageUrl;
    // try {
    //   const response = await axios.get(url);
    //   console.log("response", response);
    //   return response;
    // } catch (error) {
    //   console.log(error);
    // }
  };
  const renderChampCards = async () => {
    const champPromises = Object.values(champsFiltered).map(async (champ) => {
      const champSplashUrl = await getChampsSplash(champ.data.data.data.id);
      return {
        champ,
        champSplash: champSplashUrl,
      };
    });

    const champDataPromise = Promise.all(champPromises);
    const champData = await champDataPromise;

    return (
      <ChampsCardsContainer>
        {champData.map(({ champ, champSplash }) => (
          <ChampCardWithHover
            champ={champ}
            champSplash={champSplash}
            key={champ.data.data.data.id}
          />
        ))}
      </ChampsCardsContainer>
    );
  };
  // const champPromises = Object.values(champsFiltered).map(async (champ) => {
  //   const champSplashUrl = await getChampsSplash(champ.data.data.data.id);
  //   return {
  //     champ,
  //     champSplash: champSplashUrl,
  //   };
  // });

  // const champData = async () => {
  //   await Promise.all(champPromises);
  // };
  // const champDataPromise = Promise.all(champPromises);

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
    const response = await axios.request<NewChampsListResponse[]>(options);
    setChampsFiltered(response.data);
  };

  useEffect(() => {
    console.log(
      "champsFiltered from useEffect",
      champsFiltered,
      Object.values(champsFiltered).map((champ: NewChampsListResponse) => {
        return <ChampCardWithHover key="Hola Mundo" champ={champ} />;
      })
    );
  }, [champsFiltered]);
  return (
    <HomeScreenContainer>
      <HomeScreenHeader>
        <LogoContainerResponsive>
          <Logo
            src={lolLogo}
            alt="league-of-legends-logo"
            onClick={() => {
              setSearchValue("");
              setChampsFiltered(champs as NewChampsListResponse[]);
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
              setChampsFiltered(champs as NewChampsListResponse[]);
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
              onClick={() => getChampsByTag("Assassin")}
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
              onClick={() => getChampsByTag("Tank")}
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
              onClick={() => getChampsByTag("Mage")}
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
              selectedRole={selectedRole}
              onClick={() => getChampsByTag("Fighter")}
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
              selectedRole={selectedRole}
              onClick={() => getChampsByTag("Marksman")}
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
              selectedRole={selectedRole}
              // onClick={() => getChampsByTag("Support")}
              onClick={() => getChampsSplash("Zed")}
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
              selectedRole={selectedRole}
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
              selectedRole={selectedRole}
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
              selectedRole={selectedRole}
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
        {/* <ChampsCardsContainer> */}
        {/* {Object.values(champsFiltered).map((champ) => {
            return <ChampCardWithHover champ={champ} champSplash={() => getChampsSplash(champ.data.data.data.id)} />;
          })} */}

        {/* {Object.values(champsFiltered).map((champ) => {
            const champSplashPromise = getChampsSplash(champ.data.data.data.id);
            return (
              <ChampCardWithHover
                champ={champ}
                champSplash={champSplashPromise}
                key={champ.data.data.data.id}
              />
            );
          })} */}
        {/* {champData.map(({ champ, champSplash }) => (
            <ChampCardWithHover
              champ={champ}
              champSplash={champSplash}
              key={champ.data.data.data.id}
            />
          ))} */}

        {/* {champDataPromise.then((champData) =>
            champData.map(({ champ, champSplash }) => (
              <ChampCardWithHover
                champ={champ}
                champSplash={champSplash}
                key={champ.data.data.data.id}
              />
            ))
          )} */}
        {/* <>
          {async () => {
            const champCards = await renderChampCards();
            return champCards;
          }}
        </> */}
        <>{renderChampCards()}</>
        {/* <ChampRequestContainer>
            <ChampCardRequest onClick={requestNewChamps}>
              Show more
            </ChampCardRequest>
          </ChampRequestContainer> */}
        {/* </ChampsCardsContainer> */}
      </HomeScreenBody>
    </HomeScreenContainer>
  );
};
