import React from "react";
import { useState } from "react";

import { FaBars } from "react-icons/fa";

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
import {
  DifficultyFilter,
  DifficultyFiltersContainer,
  FilterButton,
  FiltersContainer,
  LogoutButton,
  LogoutText,
  RolesFilter,
  RolesFilterContainer,
  SideBarResponsive,
  RolesMenuContainer,
} from "../styles";
import { MdOutlineLogout } from "react-icons/md";
import axios from "axios";
import { SideBar } from "../styles";
import {
  ChampionElement,
  ChampsListResponse,
} from "../../../interfaces/ChampsListInterface";

type Anchor = "left";

export type Classes = {
  Drawer: string;
};

export const Sidebar = () => {
  // const [Champs, setChamps] = useState<ChampionElement[]>([]);
  const [state, setState] = useState({
    left: false,
  });
  // const getChampsByRole = async (role: any) => {
  //   const url = `https://league-of-legends-champions.p.rapidapi.com/champions/en-us?page=1&size=10`;
  //   const headers = {
  //     "X-RapidAPI-Key": "36d0f53ee9msh3a618e1e5aecca5p1906b1jsn2172de59bbcd",
  //     "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
  //   };

  //   try {
  //     const response = await axios.get<ChampsListResponse>(url, { headers });
  //     const RoleChamps = response.data.champions.filter((champ) =>
  //       champ.node.recommended_roles.includes(role)
  //     );
  //     setChamps(RoleChamps);
  //     console.log(RoleChamps);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
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

  // const handleChampFilter = async (role: any) => {
  //   const RoleChamps = await getChampsByRole(role);
  //   console.log(RoleChamps);
  //   if (RoleChamps) {
  //     setChamps(RoleChamps);
  //   }
  // };

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
        {["All mail", "Trash", "Spam"].map((title, index) => (
          <ListItem key={title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* <SideBar>
        <FiltersContainer>
          <RolesFilterContainer>
            <RolesFilter>Roles</RolesFilter>
            <FilterButton onClick={() => getChampsByRole("Assassin")}>
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
        </FiltersContainer>
      </SideBar> */}

      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <RolesMenuContainer onClick={toggleDrawer(anchor, true)}>
            <FaBars size={25} fill={"#3a3a40"} />
          </RolesMenuContainer>
          <Drawer
            // className="Drawer"
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {/* Falta filtrar el rol de los campeones */}
            <SideBarResponsive>
              <FiltersContainer>
                <RolesFilterContainer>
                  <RolesFilter>Roles</RolesFilter>
                  <FilterButton>Assassin</FilterButton>
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
    </>
  );
};
