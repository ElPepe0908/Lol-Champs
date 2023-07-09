import { Datum } from "../../interfaces/NewChampsListResponse";
import {
  ChampCardContainer,
  ChampCard,
  ChampNameDiv,
  ChampName,
} from "./styles";
import { Loader } from "../Loader";
import { useChampToRender } from "../../hooks/useChampToRender";

interface Props {
  champDetail: Datum;
  isFetchingChamps: boolean;
  handleMouseOver: any;
  handleMouseOut: any;
  navigateToChampionDetail: any;
  show: boolean;
  hoveredChamp: any;
}

export const ChampToRender = ({
  champDetail,
  isFetchingChamps,
  handleMouseOver,
  handleMouseOut,
  navigateToChampionDetail,
  show,
  hoveredChamp,
}: Props) => {
  const { elementRef, isIntersecting } = useChampToRender();
  return (
    <ChampCardContainer ref={elementRef}>
      <ChampCard
        champDetail={champDetail}
        isFetching={isFetchingChamps}
        isIntersecting={isIntersecting}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={navigateToChampionDetail}
      >
        {!champDetail ? (
          <Loader />
        ) : (
          <ChampNameDiv
            show={show}
            hoveredChamp={hoveredChamp}
            champDetail={champDetail}
          >
            <ChampName>{champDetail.name}</ChampName>
          </ChampNameDiv>
        )}
      </ChampCard>
    </ChampCardContainer>
  );
};
