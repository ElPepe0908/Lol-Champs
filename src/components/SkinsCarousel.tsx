import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SkinName, SkinNameHover } from "../screens/ChampDetailScreen/styles";
import { Skin } from "../interfaces/NewChampsDetailListResponse";
import { LoaderContainer, StyledSwiper, StyledSwiperSlide } from "./styles";
import { Loader } from "./Loader";

interface Props {
  breakpoints?: any;
  onMouseOver: (itemToShow: string) => void;
  onMouseOut: () => void;
  itemToShow: string;
  onClickImage: (selectedImageSkin: string, videoName: string) => void;
  skins: Skin[] | undefined;
  champion: string | undefined;
}

const SkinsCarousel = ({
  breakpoints,
  onMouseOver,
  onMouseOut,
  itemToShow,
  onClickImage,
  champion,
  skins,
}: Props) => {
  return (
    <StyledSwiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      breakpoints={breakpoints}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
    >
      {skins?.map((skin: Skin) => {
        {
          !skins && (
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          );
        }
        return (
          <StyledSwiperSlide
            key={skin.num}
            style={{
              backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${skin.num}.jpg)`,
              display: "flex",
              alignItems: "flex-end",
              backgroundColor: "#27272D",
            }}
            onMouseOver={() => onMouseOver(`${skin.name}`)}
            onMouseOut={onMouseOut}
            onClick={() =>
              onClickImage(
                `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${skin.num}.jpg`,
                ""
              )
            }
          >
            <SkinNameHover
              key={skin.num}
              style={{
                opacity: itemToShow === `${skin.name}` ? "0.7" : "0",
              }}
            >
              <SkinName>{skin.name}</SkinName>
            </SkinNameHover>
          </StyledSwiperSlide>
        );
      })}
      <div className="swiper-button-prev " style={{ color: "#27272d" }} />
      <div className="swiper-button-next" style={{ color: "black" }} />
    </StyledSwiper>
  );
};

export default SkinsCarousel;
