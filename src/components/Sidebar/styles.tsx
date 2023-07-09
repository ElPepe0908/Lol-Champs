import styled from "styled-components";
import { device } from "../../constants";
import { MdOutlineLogout } from "react-icons/md";
import { FaBars } from "react-icons/fa";

export const DifficultyFilter = styled.p`
  display: flex;
  margin-bottom: 5px;
  width: 100%;
`;

export const DifficultyFiltersContainer = styled.div`
  margin-top: 25px;
  width: 67%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.old_phones} {
    width: 80%;
  }
  @media ${device.small_phones} {
    width: 75%;
  }
`;

export const FiltersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RolesFilter = styled.p`
  display: flex;
  width: 100%;
  align-self: flex-start;
  margin-bottom: 5px;

  @media ${device.phones} {
    display: flex;
    width: 100%;
  }
`;

export const LogoutButton = styled.div`
  width: 60%;
  flex: 1;
  display: flex;
  align-items: center;
  margin-top: 25px;

  @media ${device.desktops_large} {
    width: 70%;
  }
  @media ${device.phones} {
    width: 70%;
    margin-top: 25px;
  }
  @media ${device.old_phones} {
    width: 80%;
  }
  @media ${device.small_phones} {
    width: 75%;
  }
`;

export const LogoutText = styled.p`
  margin-bottom: 0px;
  margin-left: 15px;
  cursor: pointer;

  @media ${device.tablets} {
    font-size: 14px;
  }
`;
export const RolesFilterContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.phones} {
    width: 67%;
  }

  @media ${device.old_phones} {
    width: 80%;
  }
  @media ${device.small_phones} {
    width: 75%;
  }
`;
export const SideBarResponsive = styled.div`
  display: none;
  }
  @media ${device.phones} {
    background: #07121a;
    width: 35vw;
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
  }
  @media ${device.old_phones} {
    width: 45vw;
  }
`;

export const RolesMenuContainer = styled.div`
  display: none;

  @media ${device.phones} {
    display: flex;
  }
`;

export const NavToLoginIcon = styled(MdOutlineLogout)`
  cursor: "pointer";
`;

export const SideBar = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media ${device.desktops} {
    width: 27vw;
  }
  @media ${device.phones} {
    display: none;
  }
`;

export const FaBarIcon = styled(FaBars)`
  fill: #3a3a40;
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  top: 142px;
  left: 27px;
`;
