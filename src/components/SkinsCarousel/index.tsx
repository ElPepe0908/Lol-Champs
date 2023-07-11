import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  SkinName,
  SkinNameHover,
} from "../../screens/ChampDetailScreen/styles";
import { Champion, Skin } from "../../interfaces/NewChampsDetailListResponse";
import {
  LoaderContainer,
  SkinsNextArrow,
  SkinsPrevArrow,
  SkinsSwiper,
  SkinsSwiperSlide,
} from "./styles";
import { Loader } from "../Loader";
import { baseUrl } from "../../constants";
import { useState } from "react";

interface Props {
  champDetailInfo: Champion | undefined;
  breakpoints?: any;
  onMouseOver: (itemToShow: string) => void;
  onMouseOut: () => void;
  itemToShow: string;
  onClickImage: (selectedImageSkin: string, videoName: string) => void;
  skins: Skin[] | undefined;
  champion: string | undefined;
  skinSelected: string;
}

const SkinsCarousel = ({
  champDetailInfo,
  breakpoints,
  onMouseOver,
  onMouseOut,
  itemToShow,
  onClickImage,
  champion,
  skins,
  skinSelected,
}: Props) => {
  const [isSlideClicked, setIsSlideClicked] = useState(false);

  const handleSlideClick = (skin: Skin) => {
    setIsSlideClicked(true);
    onClickImage(`${baseUrl}${champion}_${skin.num}.jpg`, "");
    onMouseOver(skin.name);
  };

  const handleMouseOut = (skin: Skin) => {
    if (
      !isSlideClicked &&
      skinSelected !== `${baseUrl}${champion}_${skin.num}.jpg`
    ) {
      onMouseOut();
    }
    setIsSlideClicked(false);
  };

  return (
    <SkinsSwiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      breakpoints={breakpoints}
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
    >
      {skins?.map((skin: Skin) => {
        !skins && (
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        );
        return (
          <SkinsSwiperSlide
            key={skin.num}
            style={{
              backgroundImage: `url(${baseUrl}${champion}_${skin.num}.jpg)`,
            }}
            onMouseOver={() => onMouseOver(skin.name)}
            onMouseOut={() => handleMouseOut(skin)}
            onClick={() => handleSlideClick(skin)}
          >
            <SkinNameHover
              key={skin.num}
              style={{
                opacity:
                  itemToShow === `${skin.name}` ||
                  skinSelected === `${baseUrl}${champion}_${skin.num}.jpg`
                    ? "0.7"
                    : "0",
              }}
            >
              <SkinName>
                {skin.name === "default" ? champDetailInfo?.name : skin.name}
              </SkinName>
            </SkinNameHover>
          </SkinsSwiperSlide>
        );
      })}
      <SkinsPrevArrow className="swiper-button-prev" />
      <SkinsNextArrow fontSize={15} className="swiper-button-next" />
    </SkinsSwiper>
  );
};

export default SkinsCarousel;
