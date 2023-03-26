import styled from "styled-components";

export const HomeScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeScreenHeader = styled.div`
  height: 20vh;
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled.div`
  width: 20vw;
  display: flex;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 200px;
`;

export const SearchBarContainer = styled.div`
  width: 400px;
  height: 60px;
  border-radius: 25px;
  border: 1px solid #3a3a40;
  padding: 20px;
  display: flex;
  align-items: center;
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
  font-weight: 200;

  &::placeholder {
    color: #3a3a40;
  }
`;

export const HomeScreenBody = styled.div`
  display: flex;
`;

export const SideBar = styled.div`
  width: 20vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilterButton = styled.div`
  background-color: #27272d;
  width: 200px;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  color: #808080;
  margin: 12px 0;
  cursor: pointer;
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
`;

export const LogoutText = styled.div`
  margin-bottom: 0px;
  margin-left: 15px;
  cursor: pointer;
`;

export const SideBarDivider = styled.div`
  width: 1.5px;
  border-radius: 1.5px;
  background-color: #27272d;
  height: 77vh;
`;

export const ChampsCardsContainer = styled.div`
  width: 79%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow-y: scroll;
`;

export const ChampCard = styled.div`
  width: 350px;
  height: 200px;
  background: black;
  border-radius: 10px;
  margin: 0 10px 20px 10px;
  padding: 10px;
  cursor: pointer;
`;
