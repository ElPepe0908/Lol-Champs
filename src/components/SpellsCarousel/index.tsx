import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {
  LogoSpellCircle,
  LogoSpellIcon,
  SkinName,
  SkinNameHover,
} from "../../screens/ChampDetailScreen/styles";
import { ICarouselItem } from "../../constants";
import { Loader } from "../Loader";
import {
  SpellsNextArrow,
  SpellsPrevArrow,
  SpellsSwiper,
  SpellsSwiperSlide,
} from "./styles";

interface Props {
  breakpoints?: any;
  onMouseOver: (itemToShow: string) => void;
  onMouseOut: () => void;
  itemToShow: string;
  onClickImage: (selectedVideoName: string, spellName: string) => void;
  spells: ICarouselItem[];
  isFetching: boolean;
}

const SpellsCarousel = ({
  breakpoints,
  onMouseOver,
  onMouseOut,
  itemToShow,
  onClickImage,
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
              onClick={() => {
                onClickImage(
                  spells.videoUrl ? spells.videoUrl : "",
                  spells.hability
                );
              }}
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
          </div>
        );
      })}

      <SpellsPrevArrow className="swiper-button-prev" />
      <SpellsNextArrow className="swiper-button-next" />
    </SpellsSwiper>
  );
};

export default SpellsCarousel;
