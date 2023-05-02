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
} from "./styles";

import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";

import axios from "axios";
import { useEffect } from "react";
import { Card } from "../../components/Card";
import { ChampionElement } from "../../interfaces/ChampDetailInterface";
import { ChampDetailResponse } from "../../interfaces/ChampDetailInterface";

export const ChampDetailScreen = () => {
  const [ChampDetail, setChampDetail] = useState<ChampionElement>(
    {} as ChampionElement
  );

  const spells = [
    ChampDetail.champion_passive,
    ChampDetail.champion_q,
    ChampDetail.champion_w,
    ChampDetail.champion_e,
    ChampDetail.champion_r,
  ];

  const getDetail = async () => {
    const url = `https://league-of-legends-champions.p.rapidapi.com/champions/en-us/bard`;
    const headers = {
      "X-RapidAPI-Key": "36d0f53ee9msh3a618e1e5aecca5p1906b1jsn2172de59bbcd",
      "X-RapidAPI-Host": "league-of-legends-champions.p.rapidapi.com",
    };

    return await axios
      .get<ChampDetailResponse>(url, { headers })
      .then(({ data }) => setChampDetail(data.champion[0]))
      // .then(({ data }) => console.log(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDetail();
  }, []);

  console.log({ ChampDetail });

  const capitalizeFirstLetter = (word: string) => {
    const strCapitalized = word.charAt(0).toUpperCase() + word.slice(1);
    return strCapitalized;
  };

  if (!ChampDetail.champion_name) {
    return <div>Loading...</div>;
  }

  const champId = JSON.parse(ChampDetail.data_dragon_json).key;
  console.log({ champId });

  const mobileScreen = (
    <UpperGeneralDiv>
      <ChampDetailDiv>
        <BackInfoDiv>
          <GoBackDiv>
            <MdKeyboardArrowLeft size={50} />
          </GoBackDiv>
          <ChampInfoResp>
            <ChampNameDiv>
              <ArrowIconResp>
                <MdKeyboardArrowLeft size={25} />
              </ArrowIconResp>
              <ChampNameResp>{ChampDetail.champion_name}</ChampNameResp>
            </ChampNameDiv>
            <ChampTitleResp>{champId} - The Wandering Caretaker</ChampTitleResp>
            <ChampStatsDivResp>
              <ChampStatsInfoResp>
                {ChampDetail.recommended_roles[0]}
              </ChampStatsInfoResp>
              <ChampStatsInfoResp>
                {ChampDetail.recommended_roles[1]}
              </ChampStatsInfoResp>
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
                <MdKeyboardArrowLeft size={25} />
              </ArrowIcon>
              <ChampName> {ChampDetail.champion_name} </ChampName>
            </ChampNameDiv>
            <ChampTitle>
              {capitalizeFirstLetter(ChampDetail.champion_title)}
            </ChampTitle>
            <ChampSeparation>
              <SeparationLine1 />
              <SeparationCircle />
              <SeparationLine2 />
            </ChampSeparation>
            {ChampDetail.champion_blurb ? (
              <ChampTextInfo>{ChampDetail.lore}</ChampTextInfo>
            ) : (
              <ChampTextInfo>Loading...</ChampTextInfo>
            )}
            <ChampId>{champId}</ChampId>
          </ChampInfoDiv>
          <ChampStatsDiv>
            <ChampStatsInfo>{ChampDetail.recommended_roles[0]}</ChampStatsInfo>
            <ChampStatsInfo>{ChampDetail.recommended_roles[1]}</ChampStatsInfo>
          </ChampStatsDiv>
        </ChampDetailDiv>

        <ChampInfoSkinsDiv>
          {ChampDetail.skins ? (
            ChampDetail.skins.map((skin, index) => (
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
            {spells?.map((spell: any, index) => (
              <ChampCarrusellSpellDiv
                key={spell}
                style={{
                  backgroundImage: `url(${spell.champion_passive_video_poster})`,
                }}
              >
                {spell.champion_passive_name}
              </ChampCarrusellSpellDiv>
            ))}

            {/* <ChampCarrusellSpellDiv />
            <ChampCarrusellSpellDiv />
            <ChampCarrusellSpellDiv />
            <ChampCarrusellSpellDiv /> */}
          </ChampCarrusellInner>
          <CarouselFlexSpells>
            <MdKeyboardArrowRight size={25} />
          </CarouselFlexSpells>
        </ChampCarrusellDiv>
      </GeneralSpellsDiv>
    </>
  );

  return (
    <GeneralDiv>
      {mobileScreen}
      {desktopScreen}
    </GeneralDiv>
  );
};
