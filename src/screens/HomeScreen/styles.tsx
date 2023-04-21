import styled from "styled-components";
import { device } from "../../constants";

export const HomeScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeScreenHeader = styled.div`
  height: 20vh;
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

export const SearchBarContainer = styled.div`
  width: 400px;
  height: 60px;
  border-radius: 25px;
  border: 1px solid #3a3a40;
  padding: 20px;
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

export const SearchBar = styled.input`
  width: 100%;
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
  @media ${device.desktops} {
    font-size: 14px;
  }
  @media ${device.small_phones} {
    font-size: 13px;
    padding: 0px 0px 0px 15px;
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

export const FilterButton = styled.button`
  background-color: #27272d;
  width: 200px;
  padding: 10px;
  border-radius: 4px;
  border: none;
  display: flex;
  justify-content: center;
  color: #808080;
  margin: 12px 0;
  cursor: pointer;

  @media ${device.desktops_large} {
    width: 180px;
    padding: 8px;
  }
  @media ${device.desktops} {
    width: 190px;
    padding: 10px;
  }
  @media ${device.tablets} {
    width: 140px;
    height: 40px;
    font-size: 14px;
  }
  @media ${device.phones} {
    width: 120px;
    height: 35px;
    font-size: 12px;
  }
`;

export const DifficultyFiltersContainer = styled.div`
  margin-top: 40px;
`;

export const LogoutButton = styled.div`
  width: 200px;
  flex: 1;
  display: flex;
  align-items: center;
  margin-top: 50px;
  cursor: pointer;

  @media ${device.desktops_large} {
    width: 180px;
  }
  @media ${device.desktops} {
    width: 190px;
    margin-top: 30px;
  }
  @media ${device.tablets} {
    width: 140px;
  }
  @media ${device.phones} {
    width: 120px;
  }
`;

export const LogoutText = styled.p`
  margin-bottom: 0px;
  margin-left: 15px;

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
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;

  @media ${device.desktops} {
    width: 72vw;
  }
  @media ${device.phones} {
    width: 99%;
  }
`;

export const ChampCard = styled.div`
  width: 350px;
  height: 200px;
  background: black;
  border-radius: 10px;
  margin: 0 10px 20px 10px;
  padding: 10px;
  cursor: pointer;

  @media ${device.desktops_large} {
    width: 280px;
    margin: 0 7px 15px 7px;
  }
  @media ${device.desktops} {
    width: 320px;
    height: 185px;
  }
  @media ${device.tablets} {
    width: 245px;
    height: 175px;
  }
  @media ${device.phones} {
    width: 45%;
    height: 200px;
  }
  @media ${device.old_phones} {
    width: 93%;
  }
  @media ${device.small_phones} {
    width: 92%;
    height: 170px;
  }
`;
