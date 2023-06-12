import React, { useState, useRef, LegacyRef } from "react";

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
  FilterContentDiv,
  FilterTankIcon,
  FilterAssasinIcon,
  FilterMageIcon,
  FilterFighterIcon,
  FilterMarksmanIcon,
  FilterSupportIcon,
  ChampCardContainer,
} from "./styles";
import { MdArrowForwardIos, MdOutlineLogout } from "react-icons/md";
import lolLogo from "../../assets/lol-logo.png";
import { Sidebar } from "./Sidebar";
import axios from "axios";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { initialChampsToRender } from "../../constants/index";
import { Loader } from "../../components/Loader";
import {
  NewChampsListResponse,
  Tag,
  Datum,
} from "../../interfaces/NewChampsListResponse";

const HomeScreen = () => {
  const {
    data: champs,
    refetch: refetchChamps,
    isFetched: isFetchedChamps,
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
  const [requestCount, setRequestCount] = useState(0);
  const [selectedRole, setselectedRole] = useState(null);
  const [showSelectedRole, setShowSelectedRole] = useState(false);
  const [originalChampsData, setOriginalChampsData] = useState<Datum[]>([]);

  const { state } = useLocation();

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
  const navigateToLastChampDetail = () => {
    if (state?.championId) {
      navigate(`/champ-detail/${state.championName}`, {
        state: { championId: state.championId },
      });
    }
  };

  useEffect(() => {
    if (champs) setChampsFiltered(Object.values(champs));
  }, [champs]);

  const handleDeleteButtonClick = () => {
    setSearchValue("");
    setChampsFiltered(originalChampsData);
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
    const url = `http://ddragon.leagueoflegends.com/cdn/13.10.1/data/en_US/champion.json`;
    try {
      const response = await axios.get<NewChampsListResponse>(url);
      const champsData = response.data.data;
      setOriginalChampsData(Object.values(champsData));
      return champsData;
    } catch (error) {}
  };
  const getChampsByTag = (tag: Tag = Tag.Assassin) => {
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
      const baseUrl =
        "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";
      const imageUrl = `${baseUrl}${id}_0.jpg`;
      return imageUrl;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getChampsByName = async (name: string) => {
    const filterNewChamp = originalChampsData?.filter((champ: Datum) =>
      champ.name.toLocaleLowerCase().includes(name)
    );
    setChampsFiltered(filterNewChamp);
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
              setChampsFiltered(originalChampsData);
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
              setChampsFiltered(originalChampsData);
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
            {searchChamp !== "" && (
              <DeleteButton show={true} onClick={handleDeleteButtonClick}>
                <DeleteTextButton />
              </DeleteButton>
            )}
          </SearchBarContainer>

          {state?.championId && (
            <ArrowIconContainer>
              <MdArrowForwardIos
                onClick={navigateToLastChampDetail}
                style={{ cursor: "pointer" }}
                size={25}
                fill="#3A3A40"
              />
            </ArrowIconContainer>
          )}
        </SeachArrowContainer>
      </HomeScreenHeader>

      <HomeScreenBody>
        <SideBar>
          <RolesFilterContainer>
            <RolesFilter>Roles</RolesFilter>

            <FilterButton
              onClick={() => {
                getChampsByTag("Assassin" as Tag);
                refetchChamps();
              }}
              onMouseOver={() => handleRoleOver("Assassin")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Assassin" ? (
                <>
                  <SelectFilterButton show={showSelectedRole} />
                  <FilterContentDiv>
                    <p style={{ color: "#fff", margin: 0 }}>Assassin</p>
                    <FilterAssasinIcon />
                  </FilterContentDiv>
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Assassin</p>
              )}
            </FilterButton>
            <FilterButton
              onClick={() => {
                getChampsByTag("Tank" as Tag);
                refetchChamps();
              }}
              onMouseOver={() => handleRoleOver("Tank")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Tank" ? (
                <>
                  <SelectFilterButton show={showSelectedRole} />
                  <p style={{ color: "#fff", margin: 0 }}>Tank</p>
                  <FilterTankIcon />
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Tank</p>
              )}
            </FilterButton>
            <FilterButton
              onClick={() => {
                getChampsByTag("Mage" as Tag);
                refetchChamps();
              }}
              onMouseOver={() => handleRoleOver("Mage")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Mage" ? (
                <>
                  <SelectFilterButton show={showSelectedRole} />
                  <p style={{ color: "#fff", margin: 0 }}>Mage</p>
                  <FilterMageIcon />
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Mage</p>
              )}
            </FilterButton>
            <FilterButton
              selectedRole={selectedRole}
              onClick={() => {
                getChampsByTag("Fighter" as Tag);
                refetchChamps();
              }}
              onMouseOver={() => handleRoleOver("Fighter")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Fighter" ? (
                <>
                  <SelectFilterButton show={showSelectedRole} />
                  <p style={{ color: "#fff", margin: 0 }}>Fighter</p>
                  <FilterFighterIcon />
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Fighter</p>
              )}
            </FilterButton>
            <FilterButton
              selectedRole={selectedRole}
              onClick={() => {
                getChampsByTag("Marksman" as Tag);
                refetchChamps();
              }}
              onMouseOver={() => handleRoleOver("Marksman")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Marksman" ? (
                <>
                  <SelectFilterButton show={showSelectedRole} />
                  <p style={{ color: "#fff", margin: 0 }}>Marksman</p>
                  <FilterMarksmanIcon />
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Marksman</p>
              )}
            </FilterButton>
            <FilterButton
              selectedRole={selectedRole}
              onClick={() => {
                getChampsByTag("Support" as Tag);
                refetchChamps();
              }}
              onMouseOver={() => handleRoleOver("Support")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Support" ? (
                <>
                  <SelectFilterButton show={showSelectedRole} />
                  <p style={{ color: "#fff", margin: 0 }}>Support</p>
                  <FilterSupportIcon />
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
              onClick={() => {
                getChampsByDifficulty(0);
                refetchChamps();
              }}
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
              onClick={() => {
                getChampsByDifficulty(4);
                refetchChamps();
              }}
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
              onClick={() => {
                getChampsByDifficulty(8);
                refetchChamps();
              }}
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
          {champsFiltered.map((champ) => {
            const champSplash = getChampsSplash(champ.id);
            return (
              // <ChampCardWithHover
              //   champ={champ}
              //   champSplash={champSplash}
              //   isFetching={isFetchingChamps}
              // />
              <LazyChamps
                champs={champ}
                champSplash={champSplash}
                isFetching={isFetchingChamps}
              />
            );
          })}
        </ChampsCardsContainer>
      </HomeScreenBody>
    </HomeScreenContainer>
  );
};
export const LazyChamps = ({
  champs,
  champSplash,
  isFetching,
}: {
  champs: Datum;
  champSplash: string;
  isFetching: boolean;
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef();

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

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const navigateToChampionDetail = () => {
    navigate(`/champ-detail/${champs.name}`, {
      state: { championId: champs.id },
    });
  };

  const handleMouseOver = () => {
    setShow(true);
  };

  const handleMouseOut = () => {
    setShow(false);
  };

  const champCardStyle = champs
    ? {
        backgroundImage: `url(${champSplash})`,
      }
    : { alignItems: "center" };

  return (
    <ChampCardContainer
      className={`card_champ ${isIntersecting ? "show" : "hidden"}`}
      ref={elementRef as any}
    >
      <ChampCard
        show={isIntersecting}
        // show={isIntersecting ? "show" : "hidden"}
        className="card_champ_img"
        style={champCardStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={navigateToChampionDetail}
      >
        {isFetching ? (
          <Loader />
        ) : (
          <ChampNameDiv show={show}>
            <ChampName>{champs.name}</ChampName>
          </ChampNameDiv>
        )}
      </ChampCard>
    </ChampCardContainer>
  );
};

export default HomeScreen;
