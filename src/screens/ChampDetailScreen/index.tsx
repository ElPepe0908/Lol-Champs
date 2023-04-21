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

const ChampDetailScreen = () => {
  const [ChampSkins, setChampSkins] = useState<any>([]);

  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const getSkins = async () => {
    const url = `http://ddragon.leagueoflegends.com/cdn/11.6.1/data/en_US/champion/Bard.json`; // Bard

    return await axios
      .get(url)
      .then(({ data }) => setChampSkins(data.data.Bard.skins))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSkins();
  }, []);

  console.log({ ChampSkins });

  return (
    <GeneralDiv>
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
                <ChampNameResp>Bard</ChampNameResp>
              </ChampNameDiv>
              <ChampTitleResp>001 - The Wandering Caretaker</ChampTitleResp>
              <ChampStatsDivResp>
                <ChampStatsInfoResp>Tank</ChampStatsInfoResp>
                <ChampStatsInfoResp>Support</ChampStatsInfoResp>
              </ChampStatsDivResp>
            </ChampInfoResp>
          </BackInfoDiv>

          <ChampInfoDiv>
            <ChampNameDiv>
              <ArrowIcon>
                <MdKeyboardArrowLeft size={25} />
              </ArrowIcon>
              <ChampName>Bard</ChampName>
            </ChampNameDiv>
            <ChampTitle>The Wandering Caretaker</ChampTitle>
            <ChampSeparation>
              <SeparationLine1 />
              <SeparationCircle />
              <SeparationLine2 />
            </ChampSeparation>

            <ChampTextInfo>
              A traveler from beyond the stars, Bard is an agent of serendipity
              who fights to maintain a balance where life can endure the
              indifference of chaos. Many Runeterrans sing songs that ponder his
              extraordinary nature, yet they all agree that the cosmic vagabond
              is drawn to artifacts of great magical power. Surrounded by a
              jubilant choir of helpful spirit meeps, it is impossible to
              mistake his actions as malevolent, as Bard always serves the
              greater good... in his own odd way.
            </ChampTextInfo>

            <ChampId>001</ChampId>
          </ChampInfoDiv>
          <ChampStatsDiv>
            <ChampStatsInfo>Tank</ChampStatsInfo>
            <ChampStatsInfo>Support</ChampStatsInfo>
          </ChampStatsDiv>
        </ChampDetailDiv>

        <ChampInfoSkinsDiv>
          <ChampSkinDiv />
          <CarouselInner>
            {/* <CarouselFlex>
              <MdKeyboardArrowUp size={30} />
            </CarouselFlex>
            <CarouselFlexResp>
              <MdKeyboardArrowLeft size={25} />
            </CarouselFlexResp> */}
            <CarouselDiv>
              <Container>
                <SwiperContainer>
                  <div>
                    <Swiper
                      ref={sliderRef}
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
                      {/* {Ch`ampSkins?.map((skin: any) => (
                        <SwiperSlide key={skin?.url}>
                          <Card url={skin?.url} />
                        </SwiperSlide>
                      ))}` */}
                    </Swiper>
                    <div className="prev-arrow" onClick={handlePrev} />
                    <div className="next-arrow" onClick={handleNext} />
                  </div>

                  {/* 
                  <Swiper
                    loop={true}
                    modules={[Pagination, Navigation]}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    // navigation={{
                    //   enabled: true,
                    //   nextEl: ".swiper-button-next",
                    //   prevEl: ".swiper-button-prev",
                    // }}
                    slidesPerView={4}
                    breakpoints={{
                      320: { slidesPerView: 2, spaceBetween: 20 },
                      576: { slidesPerView: 2, spaceBetween: 20 },
                      768: { slidesPerView: 3, spaceBetween: 20 },
                      992: { slidesPerView: 3, spaceBetween: 20 },
                      1200: { slidesPerView: 4, spaceBetween: 20 },
                      1450: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                  >
                    {ChampSkins?.map((skin: any) => (
                      <SwiperSlide key={skin?.url}>
                        <Card url={skin?.url} />
                      </SwiperSlide>
                    ))}
                    <div className="prev" />
                    <div className="next" />
                  </Swiper> */}
                </SwiperContainer>
              </Container>
              {/*  <CarouselItem />
               <CarouselItem />
               <CarouselItem />
               <CarouselItem /> */}
            </CarouselDiv>
            {/* <CarouselFlexResp>
              <MdKeyboardArrowRight size={25} />
            </CarouselFlexResp>
            <CarouselFlex>
              <MdKeyboardArrowDown size={30} />
            </CarouselFlex> */}
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
            <ChampCarrusellSpellDiv />
            <ChampCarrusellSpellDiv />
            <ChampCarrusellSpellDiv />
            <ChampCarrusellSpellDiv />
          </ChampCarrusellInner>
          <CarouselFlexSpells>
            <MdKeyboardArrowRight size={25} />
          </CarouselFlexSpells>
        </ChampCarrusellDiv>
      </GeneralSpellsDiv>
    </GeneralDiv>
  );
};

export default ChampDetailScreen;
