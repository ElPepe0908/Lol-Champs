import { Datum } from "../interfaces/NewChampsListResponse";
import {
  ChampCardContainer,
  ChampCard,
  ChampNameDiv,
  ChampName,
} from "../screens/HomeScreen/styles";
import { Loader } from "./Loader";

interface Props {
  champDetail: Datum;
  elementRef: any;
  isFetchingChamps: boolean;
  isIntersecting: boolean;
  handleMouseOver: any;
  handleMouseOut: any;
  navigateToChampionDetail: any;
  show: boolean;
}
export const ChampToRender = ({
  champDetail,
  elementRef,
  isFetchingChamps,
  isIntersecting,
  handleMouseOut,
  handleMouseOver,
  navigateToChampionDetail,
  show,
}: Props) => {
  console.log("elementRef", elementRef);
  console.log(show);
  if (isIntersecting)
    console.log("isIntersecting from champtorender", isIntersecting);
  return (
    <ChampCardContainer ref={elementRef as any}>
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
          <ChampNameDiv show={show}>
            <ChampName>{champDetail.name}</ChampName>
          </ChampNameDiv>
        )}
      </ChampCard>
    </ChampCardContainer>
  );
};
