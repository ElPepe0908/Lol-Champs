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
  BackToChampArrow,
  NavToLoginIcon,
} from "./styles";
import { MdArrowForwardIos, MdOutlineLogout } from "react-icons/md";
import lolLogo from "../../assets/lol-logo.png";
import { Sidebar } from "./Sidebar";
import axios from "axios";
import { useQuery } from "react-query";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DifficultyType,
  baseUrl,
  champStats,
  difficultyNumber,
  initialChampsToRender,
} from "../../constants/index";
import { Loader } from "../../components/Loader";
import {
  NewChampsListResponse,
  Tag,
  Datum,
  ChampTags,
} from "../../interfaces/NewChampsListResponse";
import { FilterRoleButton } from "../../components/FilterRoleButton";
import { useChampsData } from "../../hooks/useChampsData";
import { getChampsSplash } from "../../utils/champInfo";
import { LazyChamps } from "../../components/LazyChamps";
import { FilterDifficultyButton } from "../../components/FilterDifficultyButton";

const HomeScreen = () => {
  const {
    refetchChamps,
    showClickedRole,
    selectedRole,
    selectFilter,
    searchChamp,
    handleInputChange,
    handleClickFilter,
    handleRoleOver,
    handleRoleOut,
    handleDeleteButtonClick,
    backToOriginalChamps,
    getChampsByTag,
    getChampsByDifficulty,
    searchValue,
    originalChampsData,
    champsFiltered,
    navigateToLastChampDetail,
    state,
    navigateToLogin,
  } = useChampsData();

  return (
    <HomeScreenContainer>
      <HomeScreenHeader>
        <LogoContainerResponsive>
          <Logo
            src={lolLogo}
            alt="league-of-legends-logo"
            onClick={backToOriginalChamps}
          />
        </LogoContainerResponsive>

        <LogoContainer>
          <Logo
            src={lolLogo}
            alt="league-of-legends-logo"
            onClick={backToOriginalChamps}
          />
        </LogoContainer>
        <SeachArrowContainer>
          <MenuContainer>
            <Sidebar />
          </MenuContainer>

          <SearchBarContainer>
            <SearchIcon />

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
            <BackToChampArrow
              championName={state?.championName}
              onClick={navigateToLastChampDetail}
            />
          </ArrowIconContainer>
        </SeachArrowContainer>
      </HomeScreenHeader>

      <HomeScreenBody>
        <SideBar>
          <RolesFilterContainer>
            <RolesFilter>Roles</RolesFilter>
            <FilterRoleButton />
          </RolesFilterContainer>

          <DifficultyFiltersContainer>
            <DifficultyFilter>Difficulty</DifficultyFilter>
            <FilterDifficultyButton />
          </DifficultyFiltersContainer>
          <LogoutButton>
            <NavToLoginIcon onClick={navigateToLogin} />
            <LogoutText onClick={navigateToLogin}>Log Out</LogoutText>
          </LogoutButton>
        </SideBar>
        <SideBarDivider />
        <CardsContainer>
          {champsFiltered.map((champDetail: Datum) => {
            return <LazyChamps {...champDetail} />;
          })}
        </CardsContainer>
      </HomeScreenBody>
    </HomeScreenContainer>
  );
};

export default HomeScreen;
