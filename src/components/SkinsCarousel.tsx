import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SkinName, SkinNameHover } from "../screens/ChampDetailScreen/styles";
import { Champion, Skin } from "../interfaces/NewChampsDetailListResponse";
import { StyledSwiper, StyledSwiperSlide } from "./styles";
import styled from "styled-components";

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
        return (
          <StyledSwiperSlide
            key={skin.num}
            style={{
              backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_${skin.num}.jpg)`,
              display: "flex",
              alignItems: "flex-end",
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
                opacity: itemToShow === `${skin.name}` ? "0.8" : "0",
              }}
            >
              <SkinName>{skin.name}</SkinName>
            </SkinNameHover>
          </StyledSwiperSlide>
        );
      })}
      <div className="swiper-button-prev " style={{ color: "black" }} />
      <div className="swiper-button-next" style={{ color: "black" }} />
    </StyledSwiper>
  );
};

export default SkinsCarousel;
