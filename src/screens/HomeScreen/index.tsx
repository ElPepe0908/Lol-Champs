import React, { useState, useRef } from "react";

import {
  ChampCard,
  CardsContainer,
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
  RolesFilter,
  RolesFilterContainer,
  DifficultyFilter,
  DeleteButton,
  SearchIcon,
  DeleteTextButton,
  ChampName,
  ChampNameDiv,
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
import { baseUrl, initialChampsToRender } from "../../constants/index";
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
  const [selectedRole, setSelectedRole] = useState(null);
  const [showSelectedRole, setShowSelectedRole] = useState(false);
  const [showClickedRole, setShowClickedRole] = useState(false);
  const [originalChampsData, setOriginalChampsData] = useState<Datum[]>([]);
  const [selectFilter, setSelectFilter] = useState(null);

  const navigate = useNavigate();
  const { state } = useLocation();

  const handleClickFilter = (role: any) => {
    setSelectFilter(role);
    setShowClickedRole(true);
  };
  const handleRoleOver = (role: any) => {
    setSelectedRole(role);
    setShowSelectedRole(true);
  };
  const handleRoleOut = () => {
    setSelectedRole(null);
    setShowSelectedRole(false);
  };

  const navigateToLogin = () => {
    navigate("/");
  };
  const navigateToLastChampDetail = () => {
    if (state?.championName) {
      navigate(`/champ-detail/${state.championName}`, {
        state: { championName: state.championName },
      });
    }
  };

  const handleDeleteButtonClick = () => {
    setSearchValue("");
    setChampsFiltered(originalChampsData);
  };

  const searchChamp = searchValue.toLocaleLowerCase().trim();
  useEffect(() => {
    if (champs) {
      if (searchChamp.trim() === "") {
        setChampsFiltered(Object.values(champs));
      }
    }
  }, [champs, searchChamp]);

  useEffect(() => {
    if (searchChamp === "" && champs) {
      setChampsFiltered(Object.values(champs));
    }
    refetchChamps();
    getChampsByName(searchChamp);
  }, [searchChamp]);

  useEffect(() => {
    if (champs) {
      const champsData = Object.values(champs);
      setOriginalChampsData(champsData);
      setChampsFiltered(champsData);
    }
  }, [champs]);

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

          <SearchBarContainer>
            {searchChamp !== "" ? (
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

          <ArrowIconContainer>
            <MdArrowForwardIos
              onClick={
                state?.championName ? navigateToLastChampDetail : undefined
              }
              style={
                state?.championName
                  ? { cursor: "pointer" }
                  : {
                      opacity: "0.5",
                      cursor: "not-allowed",
                      userSelect: "none",
                    }
              }
              size={25}
              fill="#3A3A40"
            />
          </ArrowIconContainer>
        </SeachArrowContainer>
      </HomeScreenHeader>

      <HomeScreenBody>
        <SideBar>
          <RolesFilterContainer>
            <RolesFilter>Roles</RolesFilter>

            <FilterButton
              onClick={() => {
                handleClickFilter("Assassin");
                getChampsByTag("Assassin" as Tag);
                refetchChamps();
              }}
              onMouseOver={() => handleRoleOver("Assassin")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Assassin" || selectFilter === "Assassin" ? (
                <>
                  <SelectFilterButton
                    show={showSelectedRole}
                    showClickedRole={showClickedRole}
                  />
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
                handleClickFilter("Tank");
                getChampsByTag("Tank" as Tag);
                refetchChamps();
              }}
              onMouseOver={() => handleRoleOver("Tank")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Tank" || selectFilter === "Tank" ? (
                <>
                  <SelectFilterButton
                    show={showSelectedRole}
                    showClickedRole={showClickedRole}
                  />
                  <p style={{ color: "#fff", margin: 0 }}>Tank</p>
                  <FilterTankIcon />
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Tank</p>
              )}
            </FilterButton>
            <FilterButton
              onClick={() => {
                handleClickFilter("Mage");
                getChampsByTag("Mage" as Tag);
                refetchChamps();
              }}
              onMouseOver={() => handleRoleOver("Mage")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Mage" || selectFilter === "Mage" ? (
                <>
                  <SelectFilterButton
                    show={showSelectedRole}
                    showClickedRole={showClickedRole}
                  />
                  <p style={{ color: "#fff", margin: 0 }}>Mage</p>
                  <FilterMageIcon />
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Mage</p>
              )}
            </FilterButton>
            <FilterButton
              onClick={() => {
                handleClickFilter("Fighter");
                getChampsByTag("Fighter" as Tag);
                refetchChamps();
              }}
              onMouseOver={() => handleRoleOver("Fighter")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Fighter" || selectFilter === "Fighter" ? (
                <>
                  <SelectFilterButton
                    show={showSelectedRole}
                    showClickedRole={showClickedRole}
                  />
                  <p style={{ color: "#fff", margin: 0 }}>Fighter</p>
                  <FilterFighterIcon />
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Fighter</p>
              )}
            </FilterButton>
            <FilterButton
              onClick={() => {
                handleClickFilter("Marksman");
                getChampsByTag("Marksman" as Tag);
                refetchChamps();
              }}
              onMouseOver={() => handleRoleOver("Marksman")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Marksman" || selectFilter === "Marksman" ? (
                <>
                  <SelectFilterButton
                    show={showSelectedRole}
                    showClickedRole={showClickedRole}
                  />
                  <p style={{ color: "#fff", margin: 0 }}>Marksman</p>
                  <FilterMarksmanIcon />
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Marksman</p>
              )}
            </FilterButton>
            <FilterButton
              onClick={() => {
                handleClickFilter("Support");
                getChampsByTag("Support" as Tag);
                refetchChamps();
              }}
              onMouseOver={() => handleRoleOver("Support")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Support" || selectFilter === "Support" ? (
                <>
                  <SelectFilterButton
                    show={showSelectedRole}
                    showClickedRole={showClickedRole}
                  />
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
              onClick={() => {
                handleClickFilter("Easy");
                getChampsByDifficulty(0);
                refetchChamps();
              }}
              onMouseOver={() => handleRoleOver("Easy")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Easy" || selectFilter === "Easy" ? (
                <>
                  <SelectFilterButton
                    show={showSelectedRole}
                    showClickedRole={showClickedRole}
                  />
                  <p style={{ color: "#fff", margin: 0 }}>Easy</p>
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Easy</p>
              )}
            </FilterButton>
            <FilterButton
              onClick={() => {
                handleClickFilter("Medium");
                getChampsByDifficulty(4);
                refetchChamps();
              }}
              onMouseOver={() => handleRoleOver("Medium")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Medium" || selectFilter === "Medium" ? (
                <>
                  <SelectFilterButton
                    show={showSelectedRole}
                    showClickedRole={showClickedRole}
                  />
                  <p style={{ color: "#fff", margin: 0 }}>Medium</p>
                </>
              ) : (
                <p style={{ color: "#808080", margin: 0 }}>Medium</p>
              )}
            </FilterButton>
            <FilterButton
              onClick={() => {
                handleClickFilter("Hard");
                getChampsByDifficulty(8);
                refetchChamps();
              }}
              onMouseOver={() => handleRoleOver("Hard")}
              onMouseOut={handleRoleOut}
            >
              {selectedRole === "Hard" || selectFilter === "Hard" ? (
                <>
                  <SelectFilterButton
                    show={showSelectedRole}
                    showClickedRole={showClickedRole}
                  />
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
        <CardsContainer>
          {champsFiltered.map((champ: Datum) => {
            const champSplash = getChampsSplash(champ.id);
            return (
              <LazyChamps
                champs={champ}
                champSplash={champSplash}
                isFetching={isFetchingChamps}
              />
            );
          })}
        </CardsContainer>
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
    const championPath = champs.name.replace(/\s/g, "-");
    navigate(`/champ-detail/${championPath}`, {
      state: { championName: champs.id },
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
    <ChampCardContainer ref={elementRef as any}>
      <ChampCard
        isFetching={isFetching}
        show={isIntersecting}
        className="card_champ_img"
        style={champCardStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={navigateToChampionDetail}
      >
        {!champs ? (
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
