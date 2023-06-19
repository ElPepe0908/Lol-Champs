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

import axios from "axios";
import { useQuery } from "react-query";
import { Loader } from "../../components/Loader";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Champion,
  NewChampsDetailListResponse,
} from "../../interfaces/NewChampsDetailListResponse";
import { ChampDetailResponse } from "../../interfaces/ChampDetailInterface";
import SkinsCarousel from "../../components/SkinsCarousel";
import SpellsCarousel from "../../components/SpellsCarousel";

const ChampDetailScreen = () => {
  const { state, pathname } = useLocation();

  console.log("championName", { state: state?.championName });

  const { data: championDetail, isFetching: isChampionFetching } = useQuery(
    ["championDetail", state?.championName],
    () => getDetail(pathNameChamp),
    {
      refetchOnWindowFocus: false,
    }
  );
  const { data: championData, isFetching: isDataFetching } = useQuery(
    ["championData", state?.championName],
    () => getChampionData(pathNameChamp),
    {
      refetchOnWindowFocus: false,
    }
  );

  console.log("championDetail", championDetail);
  console.log(
    "championData",
    championData?.champion[0].champion_r.champion_r_video_mp4
  );
  const [champDetailInfo, setChampDetailInfo] = useState<Champion>();
  const [itemToShow, setItemToShow] = useState<string>("none");
  const [spellToShow, setSpellToShow] = useState<string>("none");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoToShow, setVideoToShow] = useState(null);
  const [selectedImageSkin, setSelectedImageSkin] = useState("");
  // const [imageSkinNumber, setImageSkinNumber] = useState<Number>(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (champDetailInfo) {
      setSelectedImageSkin(
        `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${state.championName}_0.jpg`
      );
    }
  }, [champDetailInfo]);

  useEffect(() => {
    if (championDetail)
      return setChampDetailInfo(Object.values(championDetail)[0] as any);
  }, [championDetail]);

  const selectNewSkin = (selectedImage: string) => {
    setSelectedImageSkin(selectedImage);
    console.log("selectedImageSkin", selectedImageSkin);
  };

  const handleSelectedSpell = (spellToShow: string) => {
    setSpellToShow(spellToShow);
  };

  const handleMouseOver = (itemToShow: string) => {
    setItemToShow(itemToShow);
  };

  const handleMouseOut = () => {
    setItemToShow("none");
  };

  const handleOpenVideo = (videoName: string) => {
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

  let champId = "";
  const navigate = useNavigate();
  const pathNameChamp = pathname.split("/")[2];

  const handleNavigate = () => {
    navigate("/home", {
      state: {
        championName: champDetailInfo?.name,
      },
    });
  };

  const getDetail = async (name: string) => {
    // const options = {
    //   method: "GET",
    //   url: `https://league-of-legends-champions.p.rapidapi.com/champions/en-us/${name}`,
    //   headers: {
    //     "X-RapidAPI-Key": "36d0f53ee9msh3a618e1e5aecca5p1906b1jsn2172de59bbcd",
    //     "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
    //   },
    // };
    const url = `http://ddragon.leagueoflegends.com/cdn/13.11.1/data/en_US/champion/${name}.json`;
    try {
      const response = await axios.get<NewChampsDetailListResponse>(url);
      console.log("response.data", response.data);
      return response.data.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const getChampionData = async (name: string) => {
    const url = `https://league-of-legends-champions.p.rapidapi.com/champions/en-us/${name}`;
    const headers = {
      "X-RapidAPI-Key": "36d0f53ee9msh3a618e1e5aecca5p1906b1jsn2172de59bbcd",
      "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
    };
    try {
      const response = await axios.get<ChampDetailResponse>(url, { headers });
      console.log("response.data", response.data);
      return response.data;
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
    name: `Passive - ${championData?.champion[0].champion_passive.champion_passive_name}`,
    imageUrl:
      championData?.champion[0].champion_passive.champion_passive_video_poster,
    videoUrl:
      championData?.champion[0].champion_passive.champion_passive_video_mp4,
  };
  const champQ = {
    name: `Q - ${championData?.champion[0].champion_q.champion_q_name}`,
    imageUrl: championData?.champion[0].champion_q.champion_q_video_poster,
    videoUrl: championData?.champion[0].champion_q.champion_q_video_mp4,
  };
  const champW = {
    name: `W - ${championData?.champion[0].champion_w.champion_w_name}`,
    imageUrl: championData?.champion[0].champion_w.champion_w_video_poster,
    videoUrl: championData?.champion[0].champion_w.champion_w_video_mp4,
  };
  const champE = {
    name: `E - ${championData?.champion[0].champion_e.champion_e_name}`,
    imageUrl: championData?.champion[0].champion_e.champion_e_video_poster,
    videoUrl: championData?.champion[0].champion_e.champion_e_video_mp4,
  };
  const champR = {
    name: `R - ${championData?.champion[0].champion_r.champion_r_name}`,
    imageUrl: championData?.champion[0].champion_r.champion_r_video_poster,
    videoUrl: championData?.champion[0].champion_r.champion_r_video_mp4,
  };
  const spells = [champPassive, champQ, champW, champE, champR];

  const SpellStyles = {
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
    },
    "@media screen and (max-width: 1450px)": {
      swiper: {
        width: "100%",
        height: "25%",
        paddingTop: "15px",
      },
      slide: {
        height: "50%",
      },
    },
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
              <ChampNameResp>{champDetailInfo?.name as any}</ChampNameResp>
            </ChampNameDiv>
            <ChampTitleResp>
              {champDetailInfo?.key} -
              {champDetailInfo?.title &&
                capitalizeFirstLetter(champDetailInfo?.title)}
            </ChampTitleResp>
            <ChampStatsDivResp>
              <ChampStatsInfoResp>
                {champDetailInfo?.tags[0]}
              </ChampStatsInfoResp>
              {champDetailInfo?.tags[1] ? (
                <ChampStatsInfoResp>
                  {champDetailInfo?.tags[1]}
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
              <ChampName>{champDetailInfo?.name}</ChampName>
            </ChampNameDiv>
            <ChampTitle>
              {champDetailInfo?.title &&
                capitalizeFirstLetter(champDetailInfo?.title)}
            </ChampTitle>
            <ChampSeparation>
              <SeparationLine1 />
              <SeparationCircle />
              <SeparationLine2 />
            </ChampSeparation>
            <ChampTextInfo>{champDetailInfo?.lore}</ChampTextInfo>
            <ChampId>#{champDetailInfo?.key}</ChampId>
          </ChampInfoDiv>
          <ChampStatsDiv>
            <ChampStatsInfo>{champDetailInfo?.tags[0]}</ChampStatsInfo>
            {champDetailInfo?.tags[1] ? (
              <ChampStatsInfo>{champDetailInfo?.tags[1]}</ChampStatsInfo>
            ) : null}
          </ChampStatsDiv>
        </ChampDetailDiv>

        <ChampInfoSkinsDiv>
          <ChampSkinDiv
            style={{
              backgroundImage: `url(${selectedImageSkin})`,
            }}
          />
          <SkinsCarousel
            ChampStyles={{ ...SkinStyles }}
            breakpoints={skinBreakpoints}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            itemToShow={itemToShow}
            onClickImage={selectNewSkin}
            skins={champDetailInfo?.skins}
            champion={champDetailInfo?.id}
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
          <ChampCarrusellInner>
            <SpellsCarousel
              ChampStyles={{ ...SpellStyles }}
              breakpoints={spellBreakpoints}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              itemToShow={itemToShow}
              onClickImage={handleOpenVideo}
              closeVideo={handleCloseVideo}
              spells={spells}
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
          </ChampCarrusellInner>
        </ChampCarrusellDiv>
      </GeneralSpellsDiv>
    </>
  );
  if (isChampionFetching)
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

export default ChampDetailScreen;
