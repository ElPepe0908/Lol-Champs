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
  ScreenContainer,
  SpellInfoDiv,
  SpellImageDiv,
  SpellImage,
  SpellInfoTextDiv,
  SpellInfoTitle,
  SpellInfoDescription,
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
    videoRefContainer,
    isChampionFetching,
    spellSelected,
    spellInfo,
    getSpellImg,
  } = useDetailScreen();

  const mobileScreen = (
    <UpperGeneralDiv>
      <ChampDetailDiv>
        <BackInfoDiv>
          <GoBackDiv onClick={handleNavigate}>
            <ArrowBackInfo />
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
          <BackContainer onClick={handleNavigate}>
            <NavigateBackDiv>
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
              breakpoints={spellBreakpoints}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              itemToShow={itemToShow}
              onClickImage={handleOpenVideo}
              spells={spells}
              isFetching={isDataFetching}
            />

            {selectedVideo && (
              <ScreenContainer>
                <div
                  style={{
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    top: 0,
                    left: 0,
                  }}
                >
                  <ChampSpellsVideo ref={videoRefContainer}>
                    <ChampSpellsVideoPlayer
                      src={selectedVideo}
                      controls
                      autoPlay
                    />
                    <SpellInfoDiv>
                      <SpellImageDiv>
                        <SpellImage src={getSpellImg()} />
                      </SpellImageDiv>
                      <SpellInfoTextDiv>
                        <SpellInfoTitle>
                          {spellInfo?.image.full.replace(
                            new RegExp(`.*${spellSelected}.*`),
                            spellSelected
                          )}{" "}
                          - {spellInfo?.name}
                        </SpellInfoTitle>

                        <SpellInfoDescription>
                          {spellInfo?.description.replace(/<[^>]+>/g, "")}
                        </SpellInfoDescription>
                      </SpellInfoTextDiv>
                    </SpellInfoDiv>
                    <LogoSpellVideo onClick={handleCloseVideo}>
                      <RemoveIcon />
                    </LogoSpellVideo>
                  </ChampSpellsVideo>
                </div>
              </ScreenContainer>
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
