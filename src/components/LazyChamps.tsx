import { useChampsData } from "../hooks/useChampsData";
import { Datum } from "../interfaces/NewChampsListResponse";
import {
  ChampCardContainer,
  ChampCard,
  ChampNameDiv,
  ChampName,
} from "../screens/HomeScreen/styles";
import { getChampsSplash } from "../utils/champInfo";
import { Loader } from "./Loader";

export const LazyChamps = (champDetail: Datum) => {
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
  const champCardStyle = champDetail
    ? {
        backgroundImage: `url(${getChampsSplash(champDetail.id)})`,
      }
    : { alignItems: "center" };
  return (
    <ChampCardContainer ref={elementRef as any}>
      <ChampCard
        isFetching={isFetchingChamps}
        show={isIntersecting}
        style={champCardStyle}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={navigateToChampionDetail}
      >
        {!champs ? (
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
