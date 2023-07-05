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
  FilterFighterIcon,
  ChampCardContainer,
} from "./styles";
import { MdArrowForwardIos, MdOutlineLogout } from "react-icons/md";
import lolLogo from "../../assets/lol-logo.png";
import { Sidebar } from "./Sidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { champStats, difficultyNumber } from "../../constants/index";
import { Loader } from "../../components/Loader";
import { Datum } from "../../interfaces/NewChampsListResponse";
import { useHomeScreen } from "../../hooks/useHomeScreen";
import { CustomButton } from "../../components/CustomButton";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const HomeScreen = () => {
  const {
    setSearchValue,
    setChampsFiltered,
    originalChampsData,
    refetchChamps,
    searchChamp,
    getChampsByName,
    searchValue,
    handleInputChange,
    handleDeleteButtonClick,
    championName,
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
  } = useHomeScreen();
  const champsFormatted = new Set(
    originalChampsData?.flatMap((champ: Datum) => champ.tags)
  );

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
              onClick={championName ? navigateToLastChampDetail : undefined}
              style={
                championName
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
            {Array.from(champsFormatted).map((tag: string) => (
              <CustomButton
                isHovered={false}
                isSelected={false}
                onClick={() => alert(`clickeaste ${tag}`)}
                onMouseOut={() => console.log("onMouseOut")}
                onMouseOver={() => console.log("onMouseOver")}
                buttonTitle={tag}
              />
            ))}
          </RolesFilterContainer>

          <DifficultyFiltersContainer>
            <DifficultyFilter>Difficulty</DifficultyFilter>
            {champStats.map((stats, index) => {
              return (
                <CustomButton
                  isHovered={false}
                  isSelected={false}
                  onClick={() => alert(`clickeaste ${stats}`)}
                  onMouseOut={() => console.log("onMouseOut")}
                  onMouseOver={() => console.log("onMouseOver")}
                  buttonTitle={stats}
                />
              );
            })}
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
    const championPath = champs.name.includes(" ")
      ? champs.name.replace(/\s/g, "-")
      : champs.name.replace(/'/g, "-");
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
