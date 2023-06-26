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
  const [state, setState] = useState({
    left: false,
  });
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
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <RolesMenuContainer onClick={toggleDrawer(anchor, true)}>
            <FaBars size={25} fill={"#3a3a40"} style={{ cursor: "pointer" }} />
          </RolesMenuContainer>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
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
