import React, { useEffect, useState } from "react";

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
import axios from "axios";
import {
  ChampionElement,
  ChampsListResponse,
} from "../../interfaces/ChampsListInterface";

const champsList = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
];

type Anchor = "left";

export type Classes = {
  Drawer: string;
};

// console.log({ ChampSkins });

// const getSkins = async () => {
//   const url = `https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=0&size=30`;
//   // const url = `https://league-of-legends-champions.p.rapidapi.com/champions/${champ}`;

//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "2d60f7bfc5msh614cefcd884660dp1b936djsn2451881ee132",
//       "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
//     },
//   };
//   return fetch(url, options)
//     .then((resp) => resp.json())
//     .then((resp) => console.log("resp", resp))
//     .catch((error) => console.error(error));
// };
// const skins = getSkins();

export const HomeScreen = () => {
  const [ChampSkins, setChampSkins] = useState<ChampionElement[]>([]);

  const getSkins = async () => {
    const url = `https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=0&size=30`;
    const headers = {
      "X-RapidAPI-Key": "36d0f53ee9msh3a618e1e5aecca5p1906b1jsn2172de59bbcd",
      "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
    };

    return await axios
      .get<ChampsListResponse>(url, { headers })
      .then(({ data }) => setChampSkins(data.champions))
      // .then(({ data }) => setChampDetail(data.champ))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSkins();
  }, []);

  console.log({ ChampSkins });

  if (!ChampSkins) {
    return <h1>Loading...</h1>;
  }

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
