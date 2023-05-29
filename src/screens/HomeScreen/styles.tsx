import styled, { keyframes } from "styled-components";
import { device } from "../../constants";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClear } from "react-icons/md";
type DeleteButtonProps = {
  show: boolean;
};

type ChampNameProps = {
  show: boolean;
};

type DivWithBackground = {
  backgroundImage: string;
  hoverBackgroundImage: string;
};

type FilterButtonProps = {
  show: boolean;
};

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const HomeScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeScreenHeader = styled.div`
  height: 18vh;
  display: flex;
  align-items: center;

  @media ${device.phones} {
    height: 21.5vh;
    flex-direction: column;
    margin-bottom: 40px;
  }
  @media ${device.small_phones} {
    height: 19.5vh;
    margin-bottom: 30px;
  }
`;

export const LogoContainerResponsive = styled.div`
  display: none;

  @media ${device.phones} {
    display: flex;
    width: 100%;
    justify-content: center;
    margin: 30px 0 30px;
  }
`;

export const MenuContainer = styled.div`
  display: none;

  @media ${device.phones} {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media ${device.small_phones} {
    width: 40px;
    height: 40px;
  }
`;

export const SearchMenuContainer = styled.div`
  @media ${device.phones} {
    width: 100%;
    display: flex;
  }
`;

export const LogoContainer = styled.div`
  width: 20vw;
  display: flex;
  justify-content: center;

  @media ${device.desktops} {
    width: 27vw;
  }
  @media ${device.phones} {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 200px;
  cursor: pointer;
  @media ${device.desktops_large} {
    width: 190px;
  }
  @media ${device.tablets} {
    width: 140px;
  }
  @media ${device.phones} {
    width: 180px;
  }
  @media ${device.small_phones} {
    width: 160px;
  }
`;

export const SearchBarContainer = styled.form`
  width: 400px;
  height: 60px;
  border-radius: 25px;
  border: 1px solid #3a3a40;
  padding: 20px 10px 20px 20px;
  display: flex;
  align-items: center;

  @media ${device.desktops_large} {
    width: 300px;
    height: 50px;
    padding: 10px 20px;
  }
  @media ${device.desktops} {
    width: 260px;
    height: 45px;
    padding: 10px 15px 10px 20px;
  }
  @media ${device.phones} {
    width: 245px;
    height: 45px;
  }
  @media ${device.old_phones} {
  }

  @media ${device.small_phones} {
    width: 190px;
    height: 40px;
    padding: 10px 15px 10px 20px;
  }
`;

export const SearchIconResponsive = styled.div`
  display: none;

  // @media ${device.old_phones} {
  //   display: flex;
  //   width: 50px;
  //   height: 50px;
  //   justify-content: center;
  //   align-items: center;
  // }
`;

export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 25px;
  fill: #3a3a40;

  @media ${device.phones} {
    font-size: 23px;
  }
  @media ${device.small_phones} {
    font-size: 20px;
  }
`;

export const DeleteTextButton = styled(MdClear)`
  font-size: 25px;
  fill: #fff;
  opacity: 0.6;

  @media ${device.desktops} {
    font-size: 20px;
  }
  @media ${device.small_phones} {
    font-size: 20px;
  }
`;

export const SearchBar = styled.input`
  width: 303px;
  height: 100%;
  border: none;
  border-radius: 25px;
  padding: 0 20px;
  color: #3a3a40;
  outline: none;
  font-size: 16px;
  background-color: transparent;

  &::placeholder {
    color: #3a3a40;
  }
  @media ${device.desktops_large} {
    width: 198px;
  }
  @media ${device.desktops} {
    font-size: 14px;
    width: 166px;
  }
  @media ${device.phones} {
    width: 153px;
  }
  @media ${device.small_phones} {
    font-size: 13px;
    padding: 0px 0px 0px 15px;
    width: 105px;
  }
`;

export const ArrowIconContainer = styled.div`
  display: flex;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;

  @media ${device.small_phones} {
    width: 40px;
    height: 40px;
  }
`;

export const SeachArrowContainer = styled.div`
  display: flex;
  width: 80vw;
  align-items: center;
  justify-content: space-around;

  @media ${device.desktops} {
    width: 72vw;
  }
  @media ${device.phones} {
    width: 95vw;
    justify-content: space-between;
  }
`;

export const HomeScreenBody = styled.div`
  display: flex;

  @media ${device.phones} {
    align-items: center;
  }
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

export const SidebarContainer = styled.div`
  display: flex;

  @media ${device.phones} {
    display: none;
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

export const FiltersContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RolesFilter = styled.p`
  display: none;

  @media ${device.phones} {
    display: flex;
    width: 100%;
  }
`;

export const FilterButton = styled.button`
  background-color: #27272d;
  width: 100%;
  height: 50px;
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #808080;
  margin: 6px 0;
  cursor: pointer;
  position: relative;

  @media ${device.tablets} {
    font-size: 14px;
  }
  @media ${device.phones} {
    width: 100%;
    height: 50px;
    font-size: 13px;
    align-items: center;
    margin: 8px 0;
  }
  @media ${device.small_phones} {
    height: 40px;
    font-size: 12px;
  }
`;

export const SelectFilterButton = styled.div<FilterButtonProps>`
  display: flex;
  background-color: #ffffff;
  width: 6px;
  height: 100%;
  position: absolute;
  left: 0;
  border-radius: 4px 0 0 4px;
  opacity: ${(props) => (props.show ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

export const RolesFilterContainer = styled.div`
  width: 70%;
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

export const DifficultyFilter = styled.p`
  display: flex;
  margin-bottom: 5px;
  width: 100%;
`;

export const DifficultyFiltersContainer = styled.div`
  margin-top: 40px;
  width: 70%;
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
    margin-top: 60px;
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

export const SideBarDivider = styled.div`
  width: 1.5px;
  height: 77vh;
  border-radius: 1.5px;
  background-color: #27272d;

  @media ${device.phones} {
    display: none;
  }
`;

export const ChampsCardsContainer = styled.div`
  width: 79vw;
  height: 82vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;
  align-content: flex-start;

  @media ${device.desktops} {
    width: 72vw;
  }
  @media ${device.phones} {
    width: 99vw;
  }
`;

export const ChampCard = styled.div`
  display: flex;
  width: 30%;
  height: 250px;
  background: black;
  border-radius: 10px;
  margin: 0 10px 20px 10px;
  cursor: pointer;
  background-size: cover;
  background-position: center;
  align-items: end;
  justify-content: center;

  @media ${device.desktops_large} {
    width: 45%;
    height: 270px;
    margin: 0 7px 15px 7px;
  }
  @media ${device.desktops} {
    width: 45%;
    height: 220px;
  }
  @media ${device.tablets} {
    width: 90%;
    height: 300px;
    // width: 45%;
    // height: 175px;
  }
  @media ${device.phones} {
    width: 91%;
    height: 300px;
  }
  @media ${device.old_phones} {
    width: 91%;
    height: 260px;
  }
  @media ${device.small_phones} {
    width: 92%;
    height: 200px;
  }
`;

export const ChampNameDiv = styled.div<ChampNameProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #070707;
  border-radius: 0px 0px 10px 10px;
  opacity: ${(props) => (props.show ? "0.8" : "0")};
  transition: opacity 0.2s ease-in-out;
`;
export const ChampName = styled.p`
  font-size: 17px;
  font-weight: 500;
  height: max-content;
  margin: 0;
`;
export const ChampCardRequest = styled.p`
  cursor: pointer;
  margin: 0;
`;

// export const RequestButtonContainer = styled.div`
//   width: 100%;
//   display: flex;
// `;

export const ChampRequestContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const RolesMenuContainer = styled.div`
  display: none;

  @media ${device.phones} {
    display: flex;
  }
`;
export const DeleteButton = styled.div<DeleteButtonProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: opacity 0.5s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: rgba(88, 88, 88, 0.2);
    transition: background-color 0.3s ease-in-out;
  }

  @media ${device.desktops_large} {
    width: 35px;
    height: 35px;
  }
  @media ${device.desktops} {
    width: 32px;
    height: 32px;
  }
  @media ${device.small_phones} {
    width: 28px;
    height: 28px;
  }
`;

// export const FloatingText = styled.div`
//   position: absolute;
//   // top: 60px;
//   // left: 500px;
//   top: 115px;
//   left: 34%;
//   background-color: #27272d;
//   opacity: 0.8;
//   font-size: 13px;
//   color: #fff;
//   padding: 7px;
//   box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
//   border-radius: 5px;
// `;
