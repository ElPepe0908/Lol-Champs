import { useChampsData } from "../hooks/useChampsData";
import { Datum } from "../interfaces/NewChampsListResponse";
import {
  ChampCardContainer,
  ChampCard,
  ChampNameDiv,
  ChampName,
} from "../screens/HomeScreen/styles";
import { Loader } from "./Loader";

export const LazyChamps = ({ champDetail }: { champDetail: Datum }) => {
  const {
    elementRef,
    isFetchingChamps,
    isIntersecting,
    handleMouseOver,
    handleMouseOut,
    navigateToChampionDetail,
    champs,
    show,
  } = useChampsData();
  return (
    <ChampCardContainer ref={elementRef as any}>
      <ChampCard
        champDetail={champDetail}
        isFetching={isFetchingChamps}
        show={isIntersecting}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={navigateToChampionDetail}
      >
        {!champDetail ? (
          <Loader />
        ) : (
          <ChampNameDiv show={show}>
            <ChampName>{champDetail.name}</ChampName>
          </ChampNameDiv>
        )}
      </ChampCard>
    </ChampCardContainer>
  );
};
