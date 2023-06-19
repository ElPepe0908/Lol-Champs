import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  ChampSpellsVideo,
  ChampSpellsVideoPlayer,
  LogoSpellCircle,
  LogoSpellIcon,
  LogoSpellVideo,
  RemoveIcon,
  SkinName,
  SkinNameHover,
} from "../screens/ChampDetailScreen/styles";
import { ICarouselItem } from "../constants";

interface Props {
  ChampStyles: any;
  breakpoints?: any;
  onMouseOver: (itemToShow: string) => void;
  onMouseOut: () => void;
  itemToShow: string;
  onClickImage: (selectedVideoName: string, videoName: string) => void;
  closeVideo: () => void;
  spells: ICarouselItem[];
}

const SpellsCarousel = ({
  ChampStyles,
  breakpoints,
  onMouseOver,
  onMouseOut,
  itemToShow,
  onClickImage,
  closeVideo,
  spells,
}: Props) => {
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
    >
      {spells?.map((spells: ICarouselItem) => {
        return (
          <div>
            <SwiperSlide
              key={spells.name}
              style={{
                ...ChampStyles.slide,
                backgroundImage: `url(${spells.imageUrl})`,
                display: "flex",
                alignItems: "flex-end",
              }}
              onMouseOver={() => onMouseOver(`${spells.name}`)}
              onMouseOut={onMouseOut}
              onClick={() =>
                onClickImage(
                  spells.videoUrl ? spells.videoUrl : "",
                  spells.name
                )
              }
            >
              {spells.imageUrl?.includes("champion-abilities") ? (
                <LogoSpellCircle>
                  <LogoSpellIcon />
                </LogoSpellCircle>
              ) : null}
              <SkinNameHover
                key={spells.name}
                style={{
                  opacity: itemToShow === `${spells.name}` ? "0.8" : "0",
                }}
              >
                <SkinName>{spells.name}</SkinName>
              </SkinNameHover>
            </SwiperSlide>

            <ChampSpellsVideo>
              <ChampSpellsVideoPlayer src={spells.videoUrl} controls autoPlay />
              <LogoSpellVideo onClick={closeVideo}>
                <RemoveIcon />
              </LogoSpellVideo>
            </ChampSpellsVideo>
          </div>
        );
      })}
      <div className="swiper-button-prev " style={{ color: "black" }} />
      <div className="swiper-button-next" style={{ color: "black" }} />
    </Swiper>
  );
};

export default SpellsCarousel;
