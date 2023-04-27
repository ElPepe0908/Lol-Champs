import React from "react";

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
} from "./styles";

import { MdArrowForwardIos, MdOutlineLogout } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import lolLogo from "../../assets/lol-logo.png";
import { Sidebar } from "./Sidebar";

const champsList = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
];

type Anchor = "left";

export type Classes = {
  Drawer: string;
};

// const useStyles = makeStyles((theme: Theme) => ({
//   Drawer: {
//     backgroundColor: "#000",
//   },
// }));

// export type Classes = ReturnType<typeof useStyles>;

export const HomeScreen = () => {
  return (
    <HomeScreenContainer>
      <HomeScreenHeader>
        <LogoContainerResponsive>
          <Logo src={lolLogo} alt="league-of-legends-logo" />
        </LogoContainerResponsive>

        <LogoContainer>
          <Logo src={lolLogo} alt="league-of-legends-logo" />
        </LogoContainer>
        <SeachArrowContainer>
          <MenuContainer>
            <Sidebar />
          </MenuContainer>

          <SearchIconResponsive>
            <AiOutlineSearch
              size={30}
              fill={"#3A3A40"}
              style={{ strokeWidth: 2 }}
            />
          </SearchIconResponsive>
          <SearchBarContainer>
            <AiOutlineSearch size={25} fill={"#3A3A40"} />
            <SearchBar type="text" placeholder="Search champ" />
          </SearchBarContainer>

          <ArrowIconContainer>
            <MdArrowForwardIos size={25} fill={"#3A3A40"} />
          </ArrowIconContainer>
        </SeachArrowContainer>
      </HomeScreenHeader>

      <HomeScreenBody>
        <SideBar>
          <RolesFilterContainer>
            <RolesFilter>Roles</RolesFilter>
            <FilterButton>Assasin</FilterButton>
            <FilterButton>Tank</FilterButton>
            <FilterButton>Mage</FilterButton>
            <FilterButton>Fighter</FilterButton>
            <FilterButton>Marksman</FilterButton>
            <FilterButton>Support</FilterButton>
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
          {/* <div> */}

          {/* </div> */}
          {champsList.map((champ) => (
            <ChampCard key={champ} />
          ))}
        </ChampsCardsContainer>
      </HomeScreenBody>
    </HomeScreenContainer>
  );
};
