/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Champion,
  NewChampsDetailListResponse,
} from "../interfaces/NewChampsDetailListResponse";
import { baseUrl } from "../constants";
import axios from "axios";
import { ChampDetailResponse } from "../interfaces/ChampDetailInterface";

export const useDetailScreen = () => {
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
    {
      refetchOnWindowFocus: false,
    }
  );
  const [championDetailInfo, setChampionDetailInfo] = useState<Champion>();
  const [itemToShow, setItemToShow] = useState<string>("none");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedImageSkin, setSelectedImageSkin] = useState("");
  const [imageSkin, setImageSkin] = useState<string>(
    `${baseUrl}${modifiedChampionName}_0.jpg`
  );
  const videoRef = useRef<HTMLVideoElement>(null);

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
      "X-RapidAPI-Key": "2d60f7bfc5msh614cefcd884660dp1b936djsn2451881ee132",
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
  const championTitle =
    championDetailInfo?.title &&
    capitalizeFirstLetter(championDetailInfo?.title);

  return {
    handleNavigate,
    championDetailInfo,
    championData,
    spells,
    SpellStyles,
    spellBreakpoints,
    skinBreakpoints,
    capitalizeFirstLetter,
    getDetail,
    getChampionData,
    selectedImageSkin,
    setSelectedImageSkin,
    handleMouseOver,
    handleMouseOut,
    itemToShow,
    selectNewSkin,
    imageSkin,
    handleOpenVideo,
    handleCloseVideo,
    isDataFetching,
    selectedVideo,
    videoRef,
    isChampionFetching,
    championTitle,
  };
};
