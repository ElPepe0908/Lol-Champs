import { useState, useRef } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  GeneralDiv,
  UpperGeneralDiv,
  ChampDetailDiv,
  BackInfoDiv,
  GoBackDiv,
  ChampInfoResp,
  ChampInfoDiv,
  ChampNameContainer,
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
  GeneralSpellsDiv,
  GeneralSpellsUpperDiv,
  SpellSeparationLine,
  SpellSeparationText,
  ChampCarrusellDiv,
  ChampCarrusellInner,
  LoaderContainer,
  ArrowBackInfo,
  ChampSpellsVideo,
  LogoSpellVideo,
  ChampSpellsVideoPlayer,
  RemoveIcon,
  ChampNameDiv,
  BackContainer,
  GoBackText,
  NavigateBackDiv,
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
import {
  ChampDetailResponse,
  ChampionElement,
} from "../../interfaces/ChampDetailInterface";
import SkinsCarousel from "../../components/SkinsCarousel";
import SpellsCarousel from "../../components/SpellsCarousel";
import { baseUrl } from "../../constants";

const ChampDetailScreen = () => {
  const { state, pathname } = useLocation();
  const championName = state?.championName;
  const modifiedChampionName = championName.includes(" ")
    ? championName.replace(/\s/g, "")
    : championName.includes("'")
    ? championName
        .replace(/'/g, "")
        .replace(
          /(\b\w+)/,
          (match: any, word: any) =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
    : championName;
  console.log("modifiedChampionName", modifiedChampionName);

  const { data: championDetail, isFetching: isChampionFetching } = useQuery(
    ["championDetail", state?.championName],
    () => getDetail(modifiedChampionName),
    {
      refetchOnWindowFocus: false,
    }
  );
  const { data: championData, isFetching: isDataFetching } = useQuery(
    ["championData", state?.championName],
    () => getChampionData(championPathName),
    // () => getChampionData(championName),
    {
      refetchOnWindowFocus: false,
    }
  );
  const [championDetailInfo, setChampionDetailInfo] = useState<Champion>();
  const [championDataInfo, setChampionDataInfo] = useState<ChampionElement>();
  const [itemToShow, setItemToShow] = useState<string>("none");
  const [skinToShow, setSkinToShow] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImageSkin, setSelectedImageSkin] = useState("");
  const [imageSkin, setImageSkin] = useState<string>(
    `${baseUrl}${modifiedChampionName}_0.jpg`
  );
  const videoRef = useRef<HTMLVideoElement>(null);

  // console.log("championData", championData);
  // console.log("championDetail", championDetail);

  console.log("championDataInfo", championDataInfo?.champion_name);
  console.log("championDetailInfo", championDetailInfo);
  // useEffect(() => {
  //   if (championData) {
  //     return setChampionDataInfo(Object.values(championData.champion)[0]);
  //   }
  // }, [championData]);

  useEffect(() => {
    if (championDetailInfo) {
      setSelectedImageSkin(`${baseUrl}${modifiedChampionName}_0.jpg`);
    }
  }, [championDetailInfo]);
  useEffect(() => {
    if (selectedImageSkin !== "") {
      setImageSkin(selectedImageSkin);
    }
  }, [selectedImageSkin]);

  useEffect(() => {
    if (championDetail)
      return setChampionDetailInfo(Object.values(championDetail)[0]);
  }, [championDetail]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (selectedVideo && videoElement) {
      videoElement.play();
    } else if (!selectedVideo && videoElement) {
      videoElement?.pause();
    }
  }, [selectedVideo]);

  const selectNewSkin = (selectedImage: string) => {
    setSelectedImageSkin(selectedImage);
  };

  const handleSkinToShow = () => {
    setSkinToShow(true);
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

  let champId = "";
  const navigate = useNavigate();
  const pathNameChamp = pathname.split("/")[2];

  const championPathName: string = (() => {
    if (pathNameChamp.includes("'")) {
      const modifiedPathName = pathNameChamp.replace(/'/g, "-");
      return modifiedPathName;
    }
    if (pathNameChamp.includes(".")) {
      const modifiedPathName = pathNameChamp.replace(/\./g, "");
      return modifiedPathName;
    }
    if (pathNameChamp.includes("&")) {
      const champId = championDetailInfo?.id ?? "Nunu";
      const modifiedPathName = pathNameChamp.replace(pathNameChamp, champId);
      return modifiedPathName;
    }
    console.log("championName", championName);
    console.log("pathNameChamp", pathNameChamp);
    return pathNameChamp;
  })();

  const handleNavigate = () => {
    navigate("/home", {
      state: {
        championName: championDetailInfo?.name,
      },
    });
  };

  const getDetail = async (name: string) => {
    const url = `http://ddragon.leagueoflegends.com/cdn/13.11.1/data/en_US/champion/${name}.json`;
    try {
      const response = await axios.get<NewChampsDetailListResponse>(url);
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
    // imageUrl: championData?.champion[0].champion_passive.champion_passive_video_poster,
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
        marginTop: "15px",
      },
      slide: {},
    },
  };

  const spellBreakpoints = {
    200: {
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
    200: {
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
      slidesPerView: 2,
      direction: "horizontal",
    },
    1200: {
      slidesPerView: 3,
      direction: "horizontal",
    },
    1450: {
      slidesPerView: 3,
      direction: "vertical",
      autoHeight: true,
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
            <ChampNameContainer>
              <ArrowIconResp>
                <ArrowBackInfo />
              </ArrowIconResp>
              <ChampNameResp>{championDetailInfo?.name as any}</ChampNameResp>
            </ChampNameContainer>
            <ChampTitleResp>
              {championDetailInfo?.key} -
              {championDetailInfo?.title &&
                capitalizeFirstLetter(championDetailInfo?.title)}
            </ChampTitleResp>
            <ChampStatsDivResp>
              <ChampStatsInfoResp>
                {championDetailInfo?.tags[0]}
              </ChampStatsInfoResp>
              {championDetailInfo?.tags[1] ? (
                <ChampStatsInfoResp>
                  {championDetailInfo?.tags[1]}
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
          <BackContainer>
            <NavigateBackDiv
              style={{ display: "flex", cursor: "pointer" }}
              onClick={handleNavigate}
            >
              <ArrowBackInfo />
              <GoBackText>GO BACK</GoBackText>
            </NavigateBackDiv>
          </BackContainer>
          <ChampInfoDiv>
            <ChampNameContainer>
              <ChampNameDiv>
                <ChampName>{championDetailInfo?.name}</ChampName>
              </ChampNameDiv>
            </ChampNameContainer>
            <ChampTitle>
              {championDetailInfo?.title &&
                capitalizeFirstLetter(championDetailInfo?.title)}
            </ChampTitle>
            <ChampSeparation>
              <SeparationLine1 />
              <SeparationCircle />
              <SeparationLine2 />
            </ChampSeparation>
            <ChampTextInfo>{championDetailInfo?.lore}</ChampTextInfo>
            <ChampId>#{championDetailInfo?.key}</ChampId>
          </ChampInfoDiv>
          <ChampStatsDiv>
            <ChampStatsInfo>{championDetailInfo?.tags[0]}</ChampStatsInfo>
            {championDetailInfo?.tags[1] ? (
              <ChampStatsInfo>{championDetailInfo?.tags[1]}</ChampStatsInfo>
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
            champDetailInfo={championDetailInfo}
            breakpoints={skinBreakpoints}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            itemToShow={itemToShow}
            onClickImage={selectNewSkin}
            skins={championDetailInfo?.skins}
            champion={championDetailInfo?.id}
            skinSelected={imageSkin}
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
              isFetching={isDataFetching}
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
