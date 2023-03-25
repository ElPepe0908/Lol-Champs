import styled from "styled-components";

export const HomeScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeScreenHeader = styled.div`
  height: 20vh;
  width: 100%;
`;

export const SideBar = styled.div`
  width: 20vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SideBarDivider = styled.div`
  width: 1.5px;
  border-radius: 1.5px;
  height: 100%;
  background-color: #27272d;
  align-self: flex-end;
`;

export const ChampsCardsContainer = styled.div`
  width: 80%;
  height: 100%;
  // background: red;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ChampCard = styled.div`
  width: 350px;
  height: 200px;
  background: black;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
`;
