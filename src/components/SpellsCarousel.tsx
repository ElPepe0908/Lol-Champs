import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
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
import { Loader } from "./Loader";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import {
  SpellsNextArrow,
  SpellsPrevArrow,
  SpellsSwiper,
  SpellsSwiperSlide,
} from "./styles";

interface Props {
  ChampStyles: any;
  breakpoints?: any;
  onMouseOver: (itemToShow: string) => void;
  onMouseOut: () => void;
  itemToShow: string;
  onClickImage: (selectedVideoName: string, videoName: string) => void;
  closeVideo: () => void;
  spells: ICarouselItem[];
  isFetching: boolean;
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
  isFetching,
}: Props) => {
  return (
    <SpellsSwiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={4}
      breakpoints={breakpoints}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
    >
      {spells?.map((spells: ICarouselItem) => {
        return (
          <div>
            <SpellsSwiperSlide
              key={spells.name}
              style={
                isFetching
                  ? {
                      backgroundColor: "#000",
                    }
                  : {
                      backgroundImage: `url(${spells.imageUrl})`,
                      display: "flex",
                      alignItems: "flex-end",
                    }
              }
              onMouseOver={() => onMouseOver(`${spells.name}`)}
              onMouseOut={onMouseOut}
              onClick={() =>
                onClickImage(
                  spells.videoUrl ? spells.videoUrl : "",
                  spells.name
                )
              }
            >
              {isFetching ? (
                <Loader />
              ) : spells.imageUrl?.includes("champion-abilities") ? (
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
            </SpellsSwiperSlide>

            <ChampSpellsVideo>
              <ChampSpellsVideoPlayer src={spells.videoUrl} controls autoPlay />
              <LogoSpellVideo onClick={closeVideo}>
                <RemoveIcon />
              </LogoSpellVideo>
            </ChampSpellsVideo>
          </div>
        );
      })}

      <SpellsPrevArrow className="swiper-button-prev" />
      <SpellsNextArrow className="swiper-button-next" />
    </SpellsSwiper>
  );
};

export default SpellsCarousel;
