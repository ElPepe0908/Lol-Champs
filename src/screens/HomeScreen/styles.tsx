import styled from "styled-components";
import { device } from "../../constants";
import { AiOutlineSearch } from "react-icons/ai";
import { MdClear, MdArrowForwardIos } from "react-icons/md";

type DeleteButtonProps = {
  searchChamp: string;
};

type BackToArrowProps = {
  championName: any;
};

type FilterButtonProps = {
  show?: boolean;
  isSelected?: boolean;
  isHovered?: boolean;
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
    height: max-content;
    flex-direction: column;
    margin-bottom: 40px;
  }
  @media ${device.small_phones} {
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
`;

export const SearchIcon = styled(AiOutlineSearch)`
  font-size: 25px;
  fill: #3a3a40;
  cursor: pointer;

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

export const BackToChampArrow = styled(MdArrowForwardIos)<BackToArrowProps>`
  font-size: 25px;
  fill: "#3A3A40";
  cursor: ${(props) => (props.championName ? "pointer" : "not-allowed")};
  opacity: ${(props) => (props.championName ? "1" : "0.5")};
  user-select: ${(props) => (props.championName ? "initial" : "none")};
`;

export const SearchArrowContainer = styled.div`
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

export const SidebarContainer = styled.div`
  display: flex;

  @media ${device.phones} {
    display: none;
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
  opacity: ${(props) => (props.show || props.isSelected ? 1 : 0)};
  transition: opacity 0.5s ease-in-out;
`;

export const FilterContentDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
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

export const CardsContainer = styled.div`
  width: 79vw;
  height: 100vh;
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

export const ChampCardRequest = styled.p`
  cursor: pointer;
  margin: 0;
`;

export const ChampRequestContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const DeleteButton = styled.div<DeleteButtonProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.searchChamp !== "" ? "1" : "0")};
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
