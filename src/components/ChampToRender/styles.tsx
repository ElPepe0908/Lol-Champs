import styled from "styled-components";
import { device } from "../../constants";
import { Datum } from "../../interfaces/NewChampsListResponse";
import { getChampsSplash } from "../../utils/champInfo";
type ChampNameProps = {
  show: boolean;
  hoveredChamp: any;
  champDetail: Datum;
};

type CardProps = {
  isFetching: boolean;
  isIntersecting: boolean;
  champDetail: Datum;
};

export const ChampCardContainer = styled.div`
  display: flex;
  width: 30%;
  height: 250px;
  background: #000;
  border-radius: 10px;
  margin: 0 10px 20px 10px;
  cursor: pointer;

  @media ${device.desktops_large} {
    width: 43%;
    height: 270px;
  }
  @media ${device.desktops} {
    width: 43%;
    height: 210px;
  }
  @media ${device.tablets} {
    width: 43%;
    height: 170px;
  }
  @media ${device.phones} {
    width: 45%;
    height: 185px;
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

export const ChampCard = styled.div<CardProps>`
  display: flex;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-image: ${(props) =>
    props.champDetail
      ? `url(${getChampsSplash(props.champDetail.id)})`
      : "none"};
  align-items: ${(props) => (props.champDetail ? "end" : "center")};
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.isIntersecting ? "1" : "0.4")};
  transition: opacity 0.5s linear;
`;

export const ChampNameDiv = styled.div<ChampNameProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #070707;
  border-radius: 0px 0px 10px 10px;
  opacity: ${(props) =>
    props.show && props.hoveredChamp === props.champDetail.name ? "0.7" : "0"};
  transition: opacity 0.2s ease-in-out;
`;

export const ChampName = styled.p`
  font-size: 17px;
  font-weight: 500;
  height: max-content;
  margin: 0;

  @media ${device.tablets} {
    font-size: 16px;
  }
  @media ${device.phones} {
    font-size: 15px;
  }
`;
