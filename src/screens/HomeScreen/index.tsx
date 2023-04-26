import React from "react";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

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

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Theme, makeStyles } from "@mui/material";
// import { makeStyles, Theme } from "@mui/core";

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
  const [state, setState] = useState({
    left: false,
  });
  // type Classes = ReturnType<typeof useStyles>;
  // const classes = useStyles();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
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
            {(["left"] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <FaBars size={25} fill={"#3a3a40"} />
                </Button>
                <Drawer
                  // className="Drawer"
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  <SideBarResponsive>
                    <FiltersContainer>
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
                    </FiltersContainer>
                  </SideBarResponsive>
                </Drawer>
              </React.Fragment>
            ))}
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
