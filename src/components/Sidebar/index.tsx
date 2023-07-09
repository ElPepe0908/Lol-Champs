import React, { useEffect, useState } from "react";
import Drawer from "@mui/material/Drawer";
import {
  DifficultyFilter,
  DifficultyFiltersContainer,
  FiltersContainer,
  LogoutButton,
  LogoutText,
  RolesFilter,
  RolesFilterContainer,
  SideBarResponsive,
  RolesMenuContainer,
  FaBarIcon,
  NavToLoginIcon,
  SideBar,
} from "./styles";
import { FilterRoleButton } from "../FilterRoleButton";
import { FilterDifficultyButton } from "../FilterDifficultyButton";
import { Datum } from "../../interfaces/NewChampsListResponse";
import { champStats, difficultyNumber, roles } from "../../constants";

type Anchor = "left";

interface Props {
  champsFiltered: any;
  selectFilter: any;
  selectedRole: any;
  showClickedRole: boolean;
  handleClickFilter: (tag: string) => void;
  getChampsByTag: (tag: string) => void;
  handleRoleOver: (tag: string) => void;
  handleRoleOut: () => void;
  getChampsByDifficulty: (difficulty: number) => void;
  originalChampsData: Datum[];
  navigateToLogin: () => void;
  toggleDrawer: (
    anchor: Anchor,
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  drawerState: {
    left: boolean;
  };
}

export const Sidebar = ({
  selectFilter,
  selectedRole,
  showClickedRole,
  handleClickFilter,
  getChampsByTag,
  handleRoleOver,
  handleRoleOut,
  getChampsByDifficulty,
  originalChampsData,
  navigateToLogin,
  toggleDrawer,
  drawerState,
}: Props) => {
  const rolesComponent = () => {
    return (
      <>
        {roles.map((tag: string) => (
          <FilterRoleButton
            isHovered={selectFilter === tag || selectedRole === tag}
            isSelected={showClickedRole && selectedRole === tag}
            onClick={() => {
              handleClickFilter(tag);
              getChampsByTag(tag);
            }}
            onMouseOver={() => handleRoleOver(tag)}
            onMouseOut={handleRoleOut}
            buttonTitle={tag}
          />
        ))}
      </>
    );
  };
  const difficultyComponent = () => {
    return (
      <>
        {champStats.map((stats: string, index) => (
          <FilterDifficultyButton
            isHovered={selectFilter === stats || selectedRole === stats}
            isSelected={showClickedRole && selectedRole === stats}
            onClick={() => {
              handleClickFilter(stats);
              getChampsByDifficulty(difficultyNumber[index]);
            }}
            onMouseOver={() => handleRoleOver(stats)}
            onMouseOut={handleRoleOut}
            buttonTitle={stats}
          />
        ))}
      </>
    );
  };

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const mobileSideBar = (
    <>
      <RolesMenuContainer onClick={toggleDrawer("left", true)}>
        <FaBarIcon />
      </RolesMenuContainer>
      <Drawer
        anchor={"left"}
        open={drawerState["left"]}
        onClose={toggleDrawer("left", false)}
      >
        <SideBarResponsive>
          <FiltersContainer>
            <RolesFilterContainer>
              <RolesFilter>Roles</RolesFilter>
              {rolesComponent()}
            </RolesFilterContainer>
            <DifficultyFiltersContainer>
              <DifficultyFilter>Difficulty</DifficultyFilter>
              {difficultyComponent()}
            </DifficultyFiltersContainer>
            <LogoutButton>
              <NavToLoginIcon onClick={navigateToLogin} />
              <LogoutText onClick={navigateToLogin}>Log Out</LogoutText>
            </LogoutButton>
          </FiltersContainer>
        </SideBarResponsive>
      </Drawer>
    </>
  );

  const desktopSideBar = (
    <>
      <SideBar>
        <RolesFilterContainer>
          <RolesFilter>Roles</RolesFilter>
          {rolesComponent()}
        </RolesFilterContainer>

        <DifficultyFiltersContainer>
          <DifficultyFilter>Difficulty</DifficultyFilter>
          {difficultyComponent()}
        </DifficultyFiltersContainer>
        <LogoutButton>
          <NavToLoginIcon onClick={navigateToLogin} />
          <LogoutText onClick={navigateToLogin}>Log Out</LogoutText>
        </LogoutButton>
      </SideBar>
    </>
  );
  return windowWidth > 768 ? desktopSideBar : mobileSideBar;
};
