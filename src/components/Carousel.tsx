import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { ChampionElement, Skin } from "../interfaces/ChampDetailInterface";
import { Champ } from "../interfaces/ChampsListInterface";
import { useState } from "react";
import {
  ChampSpellsVideo,
  ChampSpellsVideoPlayer,
  CustomSwiperButton,
  LogoSpellCircle,
  LogoSpellIcon,
  LogoSpellVideo,
  RemoveIcon,
  SkinName,
  SkinNameHover,
} from "../screens/ChampDetailScreen/styles";
import { ICarouselItem, NewICarouselItem } from "../constants";
import { Champion } from "../interfaces/NewChampsDetailListResponse";

interface Props {
  // items: NewICarouselItem[];
  ChampStyles: any;
  breakpoints?: any;
  onMouseOver: (itemToShow: string) => void;
  onMouseOut: () => void;
  itemToShow: string;
  onClickImage: (selectedImageSkin: string, videoName: string) => void;
  closeVideo: () => void;
  // championSrc: Champion;
}

const Carousel = ({
  // items,
  ChampStyles,
  breakpoints,
  onMouseOver,
  onMouseOut,
  itemToShow: itemToShow,
  onClickImage,
  closeVideo,
}: // championSrc,
Props) => {
  const navigationStyles = {
    color: "black",
    fontSize: "30px",
  };
  return (
    <Swiper
      style={{ ...ChampStyles.swiper }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={4}
      breakpoints={breakpoints}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
    >
      {/* {items.map((item, key) => {
        return (
          <div>
            <SwiperSlide
              key={item.imageUrl}
              style={{
                ...ChampStyles.slide,
                backgroundImage: `url(${item.imageUrl})`,
                display: "flex",
                alignItems: "flex-end",
              }}
              onMouseOver={() => onMouseOver(`${key}-${item.name}`)}
              onMouseOut={onMouseOut}
              onClick={() => onClickImage(item.videoUrl ?? item.imageUrl, "")}
            >
              {item.imageUrl.includes("champion-abilities") ? (
                <LogoSpellCircle>
                  <LogoSpellIcon />
                </LogoSpellCircle>
              ) : null}
              <SkinNameHover
                key={key}
                style={{
                  opacity: itemToShow === `${key}-${item.name}` ? "0.8" : "0",
                }}
              >
                <SkinName>{item.name}</SkinName>
              </SkinNameHover>
            </SwiperSlide>

            <ChampSpellsVideo>
              <ChampSpellsVideoPlayer
                src={championSrc.champion_q.champion_q_video_mp4}
                controls
                autoPlay
              />
              <LogoSpellVideo onClick={closeVideo}>
                <RemoveIcon />
              </LogoSpellVideo>
            </ChampSpellsVideo>
          </div>
        );
      })}
      <div className="swiper-button-prev " style={navigationStyles} />
      <div className="swiper-button-next" style={navigationStyles} /> */}
    </Swiper>
  );
};

export default Carousel;
