import React from "react";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
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
  FaBarIcon,
} from "../styles";
import { MdOutlineLogout } from "react-icons/md";
import { FilterRoleButton } from "../../../components/FilterRoleButton";
import { FilterDifficultyButton } from "../../../components/FilterDifficultyButton";

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

  return (
    <>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <RolesMenuContainer onClick={toggleDrawer(anchor, true)}>
            <FaBarIcon />
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
                  <FilterRoleButton />
                </RolesFilterContainer>
                <DifficultyFiltersContainer>
                  <DifficultyFilter>Difficulty</DifficultyFilter>
                  <FilterDifficultyButton />
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
