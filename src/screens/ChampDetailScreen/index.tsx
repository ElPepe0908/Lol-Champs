import React from "react";

import {
  GeneralDiv,
  UpperGeneralDiv,
  ChampDetailDiv,
  GoBackDiv,
  ChampInfoDiv,
  ChampName,
  ChampTitle,
  ChampSeparation,
  SeparationLine1,
  SeparationLine2,
  SeparationCircle,
  ChampTextInfo,
  ChampId,
  ChampStatsDiv,
  ChampStatsInfo,
  ChampInfoSkinsDiv,
  ChampSkinDiv,
  CarouselInner,
  CarouselFlex,
  CarouselItem,
  GeneralSpellsDiv,
  GeneralSpellsUpperDiv,
  SpellSeparationLine,
  SpellSeparationText,
  ChampCarrusellDiv,
  ChampCarrusellSpellDiv,
} from "./styles";

import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const ChampDetailScreen = () => {
  return (
    <GeneralDiv>
      <UpperGeneralDiv>
        <ChampDetailDiv>
          <GoBackDiv>
            <MdKeyboardArrowLeft size={15} />
            GO BACK
          </GoBackDiv>

          <ChampInfoDiv>
            <ChampName>Bard</ChampName>
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
            <CarouselFlex>
              <MdKeyboardArrowLeft size={35} />
            </CarouselFlex>
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselItem />
            <CarouselFlex>
              <MdKeyboardArrowRight size={35} />
            </CarouselFlex>
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
          <ChampCarrusellSpellDiv />
          <ChampCarrusellSpellDiv />
          <ChampCarrusellSpellDiv />
          <ChampCarrusellSpellDiv />
        </ChampCarrusellDiv>
      </GeneralSpellsDiv>
    </GeneralDiv>
  );
};

export default ChampDetailScreen;
