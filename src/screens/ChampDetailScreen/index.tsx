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
  ChampCarouselDiv,
  ChampCarouselInner,
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

import { Loader } from "../../components/Loader";
import SkinsCarousel from "../../components/SkinsCarousel";
import SpellsCarousel from "../../components/SpellsCarousel";
import { useDetailScreen } from "../../hooks/useDetailScreen";

const ChampDetailScreen = () => {
  const {
    handleNavigate,
    championDetailInfo,
    spells,
    SpellStyles,
    spellBreakpoints,
    skinBreakpoints,
    capitalizeFirstLetter,
    selectedImageSkin,
    handleMouseOver,
    handleMouseOut,
    imageSkin,
    itemToShow,
    selectNewSkin,
    handleOpenVideo,
    handleCloseVideo,
    isDataFetching,
    selectedVideo,
    videoRef,
    isChampionFetching,
  } = useDetailScreen();

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
              <ChampNameResp>{championDetailInfo?.name}</ChampNameResp>
            </ChampNameContainer>
            <ChampTitleResp>
              {championDetailInfo?.key} -{" "}
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
            <NavigateBackDiv onClick={handleNavigate}>
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
        <ChampCarouselDiv>
          <ChampCarouselInner>
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
          </ChampCarouselInner>
        </ChampCarouselDiv>
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
