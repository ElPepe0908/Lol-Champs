/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Champion,
  NewChampsDetailListResponse,
} from "../interfaces/NewChampsDetailListResponse";
import { baseUrl, passiveImgBaseUrl, spellImgBaseUrl } from "../constants";
import axios from "axios";
import { ChampDetailResponse } from "../interfaces/ChampDetailInterface";

export const useDetailScreen = () => {
  const { state, pathname } = useLocation();
  const championName = state?.championName;
  const modifiedChampionName = championName.includes(". ")
    ? championName.replace(/\./g, "").replace(/\s/g, "")
    : championName.includes(" ")
    ? championName.replace(/\s/g, "")
    : championName.includes("'")
    ? championName
        .replace(/'/g, "")
        .replace(
          /(\b\w+)/,
          (word: any) =>
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
  const [spellSelected, setSpellSelected] = useState<string>("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoRefContainer = useRef<HTMLDivElement>(null);
  console.log(spellSelected);

  const handleOpenVideo = (videoName: string, spellName: string) => {
    setSelectedVideo(videoName as any);
    setSpellSelected(spellName);
  };
  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };
  useEffect(() => {
    const handleClickOutsideForm = (event: MouseEvent) => {
      const target = event.target as Node;
      const isVideoClicked = videoRefContainer?.current?.contains(target);
      if (!isVideoClicked) {
        handleCloseVideo();
      }
    };

    document.addEventListener("mousedown", handleClickOutsideForm);

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideForm);
    };
  }, [handleCloseVideo, videoRef]);

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

  const getSpellInfo = () => {
    if (spellSelected === "Passive") return championDetailInfo?.passive;
    if (spellSelected === "Q") return championDetailInfo?.spells[0];
    if (spellSelected === "W") return championDetailInfo?.spells[1];
    if (spellSelected === "E") return championDetailInfo?.spells[2];
    if (spellSelected === "R") return championDetailInfo?.spells[3];
    return null;
  };
  const getSpellImg = () => {
    return spellSelected === "Passive"
      ? passiveImgBaseUrl + spellInfo?.image.full
      : spellImgBaseUrl + spellInfo?.image.full;
  };
  const spellInfo = getSpellInfo();
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
    const url = `https://ddragon.leagueoflegends.com/cdn/13.11.1/data/en_US/champion/${name}.json`;
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
      "X-RapidAPI-Key": "c2de09efd7msh362205fafa2ff67p1c73c0jsn98474d950e34",
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
    hability: "Passive",
    name: `Passive - ${championData?.champion[0].champion_passive.champion_passive_name}`,
    imageUrl:
      championData?.champion[0].champion_passive.champion_passive_video_poster,
    videoUrl:
      championData?.champion[0].champion_passive.champion_passive_video_mp4,
    spellAssets: `${passiveImgBaseUrl}${championDetailInfo?.passive.image.full}`,
  };
  const champQ = {
    hability: "Q",
    name: `Q - ${championData?.champion[0].champion_q.champion_q_name}`,
    imageUrl: championData?.champion[0].champion_q.champion_q_video_poster,
    videoUrl: championData?.champion[0].champion_q.champion_q_video_mp4,
    spellAssets: `${spellImgBaseUrl}${championDetailInfo?.spells[0].image.full}`,
  };
  const champW = {
    hability: "W",
    name: `W - ${championData?.champion[0].champion_w.champion_w_name}`,
    imageUrl: championData?.champion[0].champion_w.champion_w_video_poster,
    videoUrl: championData?.champion[0].champion_w.champion_w_video_mp4,
    spellAssets: `${spellImgBaseUrl}${championDetailInfo?.spells[1].image.full}`,
  };
  const champE = {
    hability: "E",
    name: `E - ${championData?.champion[0].champion_e.champion_e_name}`,
    imageUrl: championData?.champion[0].champion_e.champion_e_video_poster,
    videoUrl: championData?.champion[0].champion_e.champion_e_video_mp4,
    spellAssets: `${spellImgBaseUrl}${championDetailInfo?.spells[2].image.full}`,
  };
  const champR = {
    hability: "R",
    name: `R - ${championData?.champion[0].champion_r.champion_r_name}`,
    imageUrl: championData?.champion[0].champion_r.champion_r_video_poster,
    videoUrl: championData?.champion[0].champion_r.champion_r_video_mp4,
    spellAssets: `${spellImgBaseUrl}${championDetailInfo?.spells[3].image.full}`,
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
      spaceBetween: 10,
    },
    415: {
      slidesPerView: 2,
      direction: "horizontal",
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 10,
      direction: "horizontal",
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
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
    videoRefContainer,
    isChampionFetching,
    championTitle,
    spellSelected,
    spellInfo,
    getSpellImg,
  };
};
