import React, { useState, useRef, useCallback } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";
import { NavigationOptions } from "swiper/types";

import {
  GeneralDiv,
  UpperGeneralDiv,
  ChampDetailDiv,
  BackInfoDiv,
  GoBackDiv,
  ChampInfoResp,
  ChampInfoDiv,
  ChampNameDiv,
  ArrowIcon,
  ArrowIconResp,
  ChampName,
  ChampNameResp,
  ChampTitle,
  ChampTitleResp,
  ChampSeparation,
  SeparationLine1,
  SeparationLine2,
  SeparationCircle,
  ChampTextInfo,
  ChampId,
  ChampStatsDiv,
  ChampStatsDivResp,
  ChampStatsInfo,
  ChampStatsInfoResp,
  ChampInfoSkinsDiv,
  ChampSkinDiv,
  CarouselInner,
  CarouselFlex,
  CarouselFlexResp,
  CarouselFlexSpells,
  CarouselDiv,
  CarouselItem,
  GeneralSpellsDiv,
  GeneralSpellsUpperDiv,
  SpellSeparationLine,
  SpellSeparationText,
  ChampCarrusellDiv,
  ChampCarrusellInner,
  ChampCarrusellSpellDiv,
  SwiperContainer,
  Container,
  LoaderContainer,
  ArrowBackInfo,
  LogoSpellCircle,
  LogoSpellIcon,
  ChampSpellsVideo,
  LogoSpellVideo,
  ChampSpellsVideoPlayer,
  RemoveIcon,
  SkinName,
  SkinNameHover,
  CustomSwiperButton,
} from "./styles";

import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

import { css } from "styled-components";

import axios from "axios";
import {
  ChampDetailResponse,
  ChampionElement,
  Skin,
} from "../../interfaces/ChampDetailInterface";
import { useQuery } from "react-query";
import { Loader } from "../../components/Loader";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel";
import { ICarouselItem } from "../../constants";

export const ChampDetailScreen = () => {
  const {
    data: championDetail,
    isError,
    isFetching,
  } = useQuery(["championDetail"], () => getDetail(pathNameChamp), {
    refetchOnWindowFocus: false,
  });
  const [itemToShow, setItemToShow] = useState<string>("none");
  const [spellToShow, setSpellToShow] = useState<string>("none");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoToShow, setVideoToShow] = useState(null);
  const [selectedImageSkin, setSelectedImageSkin] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (championDetail) {
      setSelectedImageSkin(championDetail?.skins[0].imageUrl);
    }
  }, [championDetail]);

  const selectNewSkin = (selectedImage: string) => {
    setSelectedImageSkin(selectedImage);
  };

  const handleSelectedSpell = (spellToShow: string) => {
    setSpellToShow(spellToShow);
  };

  const handleMouseOver = (itemToShow: string) => {
    setItemToShow(itemToShow);
  }; //// visualizar nombre al hacer hover en skin

  const handleMouseOut = () => {
    setItemToShow("none");
  };

  const handleOpenVideo = (videoName: string) => {
    console.log("videoName", videoName);
    setSelectedVideo(videoName as any);
  };
  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (selectedVideo && videoElement) {
      videoElement.play();
    } else if (!selectedVideo && videoElement) {
      videoElement?.pause();
    }
  }, [selectedVideo]);
  const navigate = useNavigate();
  const state = useLocation();
  const pathNameChamp = state.pathname.split("/")[2];
  let champId = "";

  if (championDetail) {
    champId = JSON.parse(championDetail?.data_dragon_json as string).key || "";
  }
  const handleNavigate = () => {
    navigate("/home");
  };

  const getDetail = async (name: string): Promise<ChampionElement> => {
    const options = {
      method: "GET",
      url: `https://league-of-legends-champions.p.rapidapi.com/champions/en-us/${name}`,
      headers: {
        "X-RapidAPI-Key": "36d0f53ee9msh3a618e1e5aecca5p1906b1jsn2172de59bbcd",
        "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request<ChampDetailResponse>(options);
      return response.data.champion[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  const capitalizeFirstLetter = (word: string) => {
    const strCapitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return strCapitalized;
  };
  const champPassive = {
    name: `P - ${championDetail?.champion_passive.champion_passive_name}`,
    imageUrl: championDetail?.champion_passive.champion_passive_video_poster,
    videoUrl: championDetail?.champion_passive.champion_passive_video_mp4,
  };
  const champQ = {
    name: `Q - ${championDetail?.champion_q.champion_q_name}`,
    imageUrl: championDetail?.champion_q.champion_q_video_poster,
    videoUrl: championDetail?.champion_q.champion_q_video_mp4,
  };
  const champW = {
    name: `W - ${championDetail?.champion_w.champion_w_name}`,
    imageUrl: championDetail?.champion_w.champion_w_video_poster,
    videoUrl: championDetail?.champion_w.champion_w_video_mp4,
  };
  const champE = {
    name: `E - ${championDetail?.champion_e.champion_e_name}`,
    imageUrl: championDetail?.champion_e.champion_e_video_poster,
    videoUrl: championDetail?.champion_e.champion_e_video_mp4,
  };
  const champR = {
    name: `R - ${championDetail?.champion_r.champion_r_name}`,
    imageUrl: championDetail?.champion_r.champion_r_video_poster,
    videoUrl: championDetail?.champion_r.champion_r_video_mp4,
  };
  const spells = [champPassive, champQ, champW, champE, champR];

  const Spellstyles = {
    swiper: {
      width: "100%",
      height: "100%",
      padding: "0px 15px",
    },
    slide: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "end",
      borderRadius: 10,
      backgroundSize: "cover",
      backgroundPosition: "center",
      cursor: "pointer",
    },
  };
  const SkinStyles = {
    swiper: {
      width: "25%",
      height: "66vh",
      "@media screen and (maxWidth: 1450px)": {
        width: "100%",
        height: "25%",
        paddingTop: "15px",
      },
    },
    slide: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
      backgroundSize: "cover",
      backgroundPosition: "center",
      cursor: "pointer",
      "@media screen and (maxWidth: 1450px)": {
        height: "50%",
      },
    },
    // prevEl: <CustomSwiperButton />,
    // nextEl: <CustomSwiperButton />,
  };

  const spellBreakpoints = {
    250: {
      slidesPerView: 1,
    },
    415: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1450: {
      slidesPerView: 4,
    },
  };
  const skinBreakpoints = {
    320: {
      slidesPerView: 1,
      direction: "horizontal",
    },
    415: {
      slidesPerView: 2,
      direction: "horizontal",
    },
    576: {
      slidesPerView: 2,
      direction: "horizontal",
    },
    768: {
      slidesPerView: 2,
      direction: "horizontal",
    },
    992: {
      slidesPerView: 3,
      direction: "horizontal",
    },
    1450: {
      slidesPerView: 3,
      direction: "vertical",
    },
  };

  const mobileScreen = (
    <UpperGeneralDiv>
      <ChampDetailDiv>
        <BackInfoDiv>
          <GoBackDiv>
            <ArrowBackInfo onClick={handleNavigate} />
          </GoBackDiv>
          <ChampInfoResp>
            <ChampNameDiv>
              <ArrowIconResp>
                <ArrowBackInfo />
              </ArrowIconResp>
              <ChampNameResp>{championDetail?.champion_name}</ChampNameResp>
            </ChampNameDiv>
            <ChampTitleResp>
              {champId} -
              {championDetail &&
                capitalizeFirstLetter(championDetail?.champion_title as string)}
            </ChampTitleResp>
            <ChampStatsDivResp>
              <ChampStatsInfoResp>
                {championDetail?.recommended_roles[0]}
              </ChampStatsInfoResp>
              {championDetail?.recommended_roles[1] ? (
                <ChampStatsInfoResp>
                  {championDetail?.recommended_roles[1]}
                </ChampStatsInfoResp>
              ) : null}
            </ChampStatsDivResp>
          </ChampInfoResp>
        </BackInfoDiv>
      </ChampDetailDiv>
    </UpperGeneralDiv>
  );

  const desktopScreen = (
    <>
      <UpperGeneralDiv>
        <ChampDetailDiv>
          <ChampInfoDiv>
            <ChampNameDiv>
              <ArrowIcon>
                <ArrowBackInfo onClick={handleNavigate} />
              </ArrowIcon>
              <ChampName> {championDetail?.champion_name} </ChampName>
            </ChampNameDiv>
            <ChampTitle>
              {championDetail &&
                capitalizeFirstLetter(championDetail?.champion_title as string)}
            </ChampTitle>
            <ChampSeparation>
              <SeparationLine1 />
              <SeparationCircle />
              <SeparationLine2 />
            </ChampSeparation>
            {championDetail?.champion_blurb ? (
              <ChampTextInfo>{championDetail?.lore}</ChampTextInfo>
            ) : (
              <ChampTextInfo>Loading...</ChampTextInfo>
            )}
            <ChampId>{champId}</ChampId>
          </ChampInfoDiv>
          <ChampStatsDiv>
            <ChampStatsInfo>
              {championDetail?.recommended_roles[0]}
            </ChampStatsInfo>
            {championDetail?.recommended_roles[1] ? (
              <ChampStatsInfo>
                {championDetail?.recommended_roles[1]}
              </ChampStatsInfo>
            ) : null}
          </ChampStatsDiv>
        </ChampDetailDiv>

        <ChampInfoSkinsDiv>
          <ChampSkinDiv
            style={{ backgroundImage: `url(${selectedImageSkin})` }}
          />
          <Carousel
            // items={skins as string[]}
            items={championDetail?.skins as ICarouselItem[]}
            ChampStyles={{ ...SkinStyles }}
            breakpoints={skinBreakpoints}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            itemToShow={itemToShow}
            onClickImage={selectNewSkin}
            closeVideo={handleCloseVideo}
            championSrc={championDetail as ChampionElement}
          />
        </ChampInfoSkinsDiv>
      </UpperGeneralDiv>

      <GeneralSpellsDiv>
        <GeneralSpellsUpperDiv>
          <SpellSeparationLine />
          <SpellSeparationText>SPELLS</SpellSeparationText>
          <SpellSeparationLine />
        </GeneralSpellsUpperDiv>
        <ChampCarrusellDiv>
          {/* <CarouselFlexSpells>
            <MdKeyboardArrowLeft size={25} />
          </CarouselFlexSpells> */}
          <ChampCarrusellInner>
            <Carousel
              items={spells as ICarouselItem[]}
              ChampStyles={{ ...Spellstyles }}
              breakpoints={spellBreakpoints}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              itemToShow={itemToShow}
              onClickImage={handleOpenVideo}
              closeVideo={handleCloseVideo}
              championSrc={championDetail as ChampionElement}
            />

            {selectedVideo && (
              <ChampSpellsVideo>
                <ChampSpellsVideoPlayer
                  src={selectedVideo}
                  ref={videoRef}
                  controls
                  autoPlay
                />
                <LogoSpellVideo onClick={handleCloseVideo}>
                  <RemoveIcon />
                </LogoSpellVideo>
              </ChampSpellsVideo>
            )}

            {/* <ChampCarrusellSpellDiv
              onClick={() => handleOpenVideo("champion_q")}
              backgroundImage={
                championDetail?.champion_passive
                  .champion_passive_video_poster as string
              }
            >
              <LogoSpellCircle>
                <LogoSpellIcon />
              </LogoSpellCircle>
            </ChampCarrusellSpellDiv>
            {selectedVideo === "champion_q" && (
              <ChampSpellsVideo>
                <ChampSpellsVideoPlayer
                  src={championDetail?.champion_q.champion_q_video_mp4}
                  ref={videoRef}
                  controls
                  autoPlay
                />
                <LogoSpellVideo onClick={handleCloseVideo}>
                  <RemoveIcon />
                </LogoSpellVideo>
              </ChampSpellsVideo>
            )}

            <ChampCarrusellSpellDiv
              onClick={() => handleOpenVideo("champion_w")}
              backgroundImage={
                championDetail?.champion_q.champion_q_video_poster as string
              }
            >
              <LogoSpellCircle>
                <LogoSpellIcon />
              </LogoSpellCircle>
            </ChampCarrusellSpellDiv>
            {selectedVideo === "champion_w" && (
              <ChampSpellsVideo>
                <ChampSpellsVideoPlayer
                  src={championDetail?.champion_w.champion_w_video_mp4}
                  ref={videoRef}
                  controls
                  autoPlay
                />
                <LogoSpellVideo onClick={handleCloseVideo}>
                  <RemoveIcon />
                </LogoSpellVideo>
              </ChampSpellsVideo>
            )}

            <ChampCarrusellSpellDiv
              onClick={() => handleOpenVideo("champion_e")}
              backgroundImage={
                championDetail?.champion_w.champion_w_video_poster as string
              }
            >
              <LogoSpellCircle>
                <LogoSpellIcon />
              </LogoSpellCircle>
            </ChampCarrusellSpellDiv>
            {selectedVideo === "champion_e" && (
              <ChampSpellsVideo>
                <ChampSpellsVideoPlayer
                  src={championDetail?.champion_e.champion_e_video_mp4}
                  ref={videoRef}
                  controls
                  autoPlay
                />
                <LogoSpellVideo onClick={handleCloseVideo}>
                  <RemoveIcon />
                </LogoSpellVideo>
              </ChampSpellsVideo>
            )}

            <ChampCarrusellSpellDiv
              onClick={() => handleOpenVideo("champion_r")}
              backgroundImage={
                championDetail?.champion_e.champion_e_video_poster as string
              }
            >
              <LogoSpellCircle>
                <LogoSpellIcon />
              </LogoSpellCircle>
            </ChampCarrusellSpellDiv>
            {selectedVideo === "champion_r" && (
              <ChampSpellsVideo>
                <ChampSpellsVideoPlayer
                  src={championDetail?.champion_r.champion_r_video_mp4}
                  ref={videoRef}
                  controls
                  autoPlay
                />
                <LogoSpellVideo onClick={handleCloseVideo}>
                  <RemoveIcon />
                </LogoSpellVideo>
              </ChampSpellsVideo>
            )} */}
          </ChampCarrusellInner>
          {/* <CarouselFlexSpells>
            <MdKeyboardArrowRight size={25} />
          </CarouselFlexSpells> */}
        </ChampCarrusellDiv>
      </GeneralSpellsDiv>
    </>
  );
  if (isFetching)
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  return (
    <GeneralDiv>
      {mobileScreen}
      {desktopScreen}
    </GeneralDiv>
  );
};
