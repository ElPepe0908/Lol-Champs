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
} from "./styles";

import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

import axios from "axios";
import {
  ChampDetailResponse,
  ChampionElement,
} from "../../interfaces/ChampDetailInterface";
import { useQuery } from "react-query";
import { Loader } from "../../components/Loader";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const ChampDetailScreen = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const {
    data: championDetail,
    isFetching,
    isError,
    isStale,
  } = useQuery(
    ["championDetail"],
    () => getDetail(pathNameChamp), // Reemplzar por el nombre del campeon clickeado
    {
      refetchOnWindowFocus: false,
    }
  );
  console.log("championDetail", championDetail);
  const navigate = useNavigate();
  const state = useLocation();
  console.log("state", state);
  const pathNameChamp = state.pathname.split("/")[2];
  console.log("pathNameChamp", pathNameChamp);

  const handleNavigate = () => {
    navigate("/");
  };
  // const champion: ChampionElement = state?.state;
  // const fetchChampionDetail = async () => {
  //   if (championDetail?.champion_name) {
  //     try {
  //       return await getDetail(championDetail.champion_name);
  //     } catch (error) {
  //       console.log("error");
  //     }
  //   }
  // };

  // useEffect(() => {
  //   fetchChampionDetail();
  // }, [championDetail?.champion_name]);

  // const spells = [
  //   /////////////////////////// /////////////////////////////////////// CONVERTIR CON USEQUERY
  //   ChampDetail.champion_passive,
  //   ChampDetail.champion_q,
  //   ChampDetail.champion_w,
  //   ChampDetail.champion_e,
  //   ChampDetail.champion_r,
  // ];

  const getDetail = async (name: string): Promise<ChampionElement> => {
    const options = {
      method: "GET",
      url: `https://league-of-legends-champions.p.rapidapi.com/champions/en-us/${name}`,
      headers: {
        "X-RapidAPI-Key": "36d0f53ee9msh3a618e1e5aecca5p1906b1jsn2172de59bbcd",
        "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
      },
    };

    // return await axios
    //   .get<ChampDetailResponse>(url, { headers })
    //   .then(({ data }) => setChampDetail(data.champion[0]))
    //   .catch((error) => console.log(error));

    try {
      const response = await axios.request<ChampDetailResponse>(options);
      console.log("response", response.data.champion);
      return response.data.champion[0];
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  // useEffect(() => {
  //   getDetail("Aatrox");
  // }, []);

  console.log("championDetail", championDetail?.champion_name);

  const capitalizeFirstLetter = (word: string) => {
    const strCapitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return strCapitalized;
  };

  const isPageError = () => {
    if (isError) {
      return (
        <LoaderContainer>
          {/* <ErrorText>We couldn't find your champion. </ErrorText> */}
        </LoaderContainer>
      );
    }
  };

  const isPageFetching = () => {
    return (
      <GeneralDiv>
        {mobileScreen}
        {desktopScreen}
      </GeneralDiv>
    );
  };

  if (!championDetail?.champion)
    return (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    );
  const champId = JSON.parse(championDetail.data_dragon_json as string).key;
  console.log({ champId });

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
              <ChampNameResp>{championDetail.champion_name}</ChampNameResp>
            </ChampNameDiv>
            <ChampTitleResp>
              {champId} -{" "}
              {capitalizeFirstLetter(championDetail.champion_title as string)}
            </ChampTitleResp>
            <ChampStatsDivResp>
              <ChampStatsInfoResp>
                {championDetail.recommended_roles[0]}
              </ChampStatsInfoResp>
              {championDetail.recommended_roles[1] ? (
                <ChampStatsInfoResp>
                  {championDetail.recommended_roles[1]}
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
              <ChampName> {championDetail.champion_name} </ChampName>
            </ChampNameDiv>
            <ChampTitle>
              {capitalizeFirstLetter(championDetail.champion_title as string)}
            </ChampTitle>
            <ChampSeparation>
              <SeparationLine1 />
              <SeparationCircle />
              <SeparationLine2 />
            </ChampSeparation>
            {championDetail.champion_blurb ? (
              <ChampTextInfo>{championDetail.lore}</ChampTextInfo>
            ) : (
              <ChampTextInfo>Loading...</ChampTextInfo>
            )}
            <ChampId>{champId}</ChampId>
          </ChampInfoDiv>
          <ChampStatsDiv>
            <ChampStatsInfo>
              {championDetail.recommended_roles[0]}
            </ChampStatsInfo>
            {championDetail.recommended_roles[1] ? (
              <ChampStatsInfo>
                {championDetail.recommended_roles[1]}
              </ChampStatsInfo>
            ) : null}
          </ChampStatsDiv>
        </ChampDetailDiv>

        <ChampInfoSkinsDiv>
          {championDetail.skins ? (
            championDetail.skins.map((skin, index) => (
              <ChampSkinDiv
                key={skin.name}
                style={{ backgroundImage: `url(${skin.imageUrl})` }}
                className={index === 0 ? "" : "hidden"}
              />
            ))
          ) : (
            <ChampSkinDiv> Loading...</ChampSkinDiv>
          )}
          <CarouselInner>
            <CarouselDiv>
              <Container>
                <SwiperContainer>
                  <div>
                    <Swiper
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      {[1, 2, 3, 4].map((item) => (
                        <SwiperSlide key={item}>
                          <div
                            style={{
                              width: "100px",
                              height: "100px",
                              backgroundColor: "red",
                            }}
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </SwiperContainer>
              </Container>
            </CarouselDiv>
          </CarouselInner>
        </ChampInfoSkinsDiv>
      </UpperGeneralDiv>

      <GeneralSpellsDiv>
        <GeneralSpellsUpperDiv>
          <SpellSeparationLine />
          <SpellSeparationText>SPELLS</SpellSeparationText>
          <SpellSeparationLine />
        </GeneralSpellsUpperDiv>
        <ChampCarrusellDiv>
          <CarouselFlexSpells>
            <MdKeyboardArrowLeft size={25} />
          </CarouselFlexSpells>
          <ChampCarrusellInner>
            <ChampCarrusellSpellDiv
              backgroundImage={
                championDetail.champion_passive.champion_passive_video_poster
              }
            >
              <LogoSpellCircle>
                <LogoSpellIcon />
              </LogoSpellCircle>
            </ChampCarrusellSpellDiv>

            <ChampCarrusellSpellDiv
              backgroundImage={
                championDetail.champion_q.champion_q_video_poster
              }
            >
              <LogoSpellCircle>
                <LogoSpellIcon />
              </LogoSpellCircle>
            </ChampCarrusellSpellDiv>

            <ChampCarrusellSpellDiv
              backgroundImage={
                championDetail.champion_w.champion_w_video_poster
              }
            >
              <LogoSpellCircle>
                <LogoSpellIcon />
              </LogoSpellCircle>
            </ChampCarrusellSpellDiv>

            <ChampCarrusellSpellDiv
              backgroundImage={
                championDetail.champion_e.champion_e_video_poster
              }
            >
              <LogoSpellCircle>
                <LogoSpellIcon />
              </LogoSpellCircle>
            </ChampCarrusellSpellDiv>
          </ChampCarrusellInner>
          <CarouselFlexSpells>
            <MdKeyboardArrowRight size={25} />
          </CarouselFlexSpells>
        </ChampCarrusellDiv>
      </GeneralSpellsDiv>
    </>
  );

  return isPageError() || isPageFetching();
};
