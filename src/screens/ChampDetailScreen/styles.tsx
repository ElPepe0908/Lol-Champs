import styled from "styled-components";
import { device } from "../../constants";
import { MdClear, MdKeyboardArrowLeft } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";

type BackgroundImageProps = {
  backgroundImage: string;
};

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const GeneralDiv = styled("div")({
  position: "relative",
  margin: "15px 15px",
  display: "flex",
  flexDirection: "column",

  [`@media ${device.tablets}`]: {
    margin: "30px 30px",
  },
});

export const UpperGeneralDiv = styled("div")({
  display: "flex",
  height: "none",
  justifyContent: "space-between",

  [`@media ${device.tablets}`]: {
    flexDirection: "column",
  },
});

export const ChampDetailDiv = styled("div")({
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  width: "22%",

  [`@media ${device.desktops_large}`]: {
    width: "27%",
  },
  [`@media ${device.desktops}`]: {
    width: "28%",
  },
  [`@media ${device.tablets}`]: {
    width: "28%",
  },
  [`@media ${device.tablets}`]: {
    width: "100%",
    height: "40%",
  },
});

export const BackInfoDiv = styled("div")({
  display: "none",

  [`@media ${device.tablets}`]: {
    display: "flex",
    borderRadius: 10,
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "10px",
    textAlign: "center",
  },
});

export const GoBackDiv = styled("div")({
  display: "none",

  [`@media ${device.tablets}`]: {
    backgroundColor: "#27272D",
    width: "20%",
    borderRadius: 8,
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 11,
  },
  [`@media ${device.phones}`]: {
    width: "25%",
  },
  [`@media ${device.old_phones}`]: {
    display: "none",
  },
});

export const ChampInfoResp = styled("div")({
  display: "none",

  [`@media ${device.tablets}`]: {
    backgroundColor: "#27272D",
    width: "80%",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "15px 0",
    marginLeft: "10px",
  },
  [`@media ${device.phones}`]: {
    width: "75%",
  },
  [`@media ${device.old_phones}`]: {
    width: "100%",
    marginLeft: 0,
  },
});

export const ChampInfoDiv = styled("div")({
  backgroundColor: "#27272D",
  borderRadius: 10,
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  padding: "20px 30px",
  marginBottom: "10px",
  flex: 1,

  [`@media ${device.desktops}`]: {
    padding: "15px 20px",
  },

  [`@media ${device.tablets}`]: {
    justifyContent: "center",
    marginBottom: 0,
    padding: "20px 0",
    alignItems: "center",
  },
});

export const ChampNameContainer = styled("div")({
  display: "flex",
  width: "100%",
  fontSize: 25,
  alignSelf: "center",
  fontWeight: "bold",
  marginBottom: 0,
  justifyContent: "center",
});

export const ChampNameDiv = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
export const ChampName = styled("h1")({
  fontSize: 32,
  fontWeight: "600",
  alignSelf: "center",
  marginBottom: 0,

  [`@media ${device.tablets}`]: {
    display: "none",
  },
});

export const ChampNameResp = styled("h1")({
  display: "none",

  [`@media ${device.tablets}`]: {
    display: "flex",
    fontSize: 35,
    fontWeight: "600",
    alignSelf: "center",
  },
});

export const ArrowIconResp = styled("div")({
  display: "none",
  [`@media ${device.old_phones}`]: {
    display: "flex",
    alignSelf: "center",
    position: "absolute",
    left: "35px",
  },
});

export const BackContainer = styled("div")({
  display: "flex",
  width: "100%",
  padding: "15px 0",
  backgroundColor: "#27272D",
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: 10,
  cursor: "pointer",

  [`@media ${device.tablets}`]: {
    display: "none",
  },
});

export const GoBackText = styled("div")({
  fontSize: 14,
});

export const NavigateBackDiv = styled("div")({
  display: "flex",
  cursor: "pointer",
});
export const ChampTitle = styled("p")({
  color: "#A8A8B3",
  marginBottom: 0,
  padding: "5px 0 20px",
  textAlign: "center",

  [`@media ${device.desktops}`]: {
    fontSize: 15,
  },

  [`@media ${device.tablets}`]: {
    display: "none",
  },
});

export const ChampTitleResp = styled("p")({
  display: "none",
  marginBottom: 0,

  [`@media ${device.tablets}`]: {
    display: "flex",
    alignSelf: "center",
    padding: 0,
  },
});

export const ChampSeparation = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const SeparationLine1 = styled("div")({
  width: "45%",
  height: "2px",
  backgroundColor: "#17171B",

  [`@media ${device.tablets}`]: {
    display: "none",
  },
});

export const SeparationLine2 = styled("div")({
  width: "45%",
  height: "2px",
  backgroundColor: "#17171B",

  [`@media ${device.tablets}`]: {
    display: "none",
  },
});

export const SeparationCircle = styled("div")({
  width: 10,
  height: 10,
  borderRadius: 10,
  backgroundColor: "#17171B",

  [`@media ${device.tablets}`]: {
    display: "none",
  },
});

export const ChampTextInfo = styled("p")({
  fontSize: 13,
  textAlign: "center",
  padding: "20px 0 30px",
  marginBottom: 0,

  [`@media ${device.desktops}`]: {
    fontSize: 12,
  },

  [`@media ${device.tablets}`]: {
    padding: "0",
    width: "90%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 3,
    "-webkit-box-orient": "vertical",
  },
  [`@media ${device.phones}`]: {
    fontSize: 12,
  },
  [`@media ${device.old_phones}`]: {
    fontSize: 11,
  },
});

export const ChampId = styled("div")({
  width: "100%",
  backgroundColor: "#17171B",
  borderRadius: 5,
  alignSelf: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 0",

  [`@media ${device.tablets}`]: {
    display: "none",
  },
});

export const ChampStatsDiv = styled("div")({
  backgroundColor: "#27272D",
  width: "100%",
  borderRadius: 10,
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  padding: "10px 0",

  [`@media ${device.tablets}`]: {
    display: "none",
  },
});

export const ChampStatsDivResp = styled("div")({
  display: "none",

  [`@media ${device.tablets}`]: {
    backgroundColor: "#27272D",
    width: "100%",
    borderRadius: 10,
    color: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: "0",
    marginTop: "15px",
  },
  [`@media ${device.phones}`]: {
    justifyContent: "space-between",
    padding: "0 10px",
  },
});

export const ChampStatsInfo = styled("div")({
  width: "83%",
  backgroundColor: "#17171B",
  borderRadius: 5,
  alignSelf: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "7px 0",
  padding: "10px 0",

  [`@media ${device.tablets}`]: {
    display: "none",
  },
});

export const ChampStatsInfoResp = styled("div")({
  display: "none",

  [`@media ${device.tablets}`]: {
    backgroundColor: "#17171B",
    borderRadius: 5,
    alignSelf: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "44%",
    fontSize: 13,
    margin: "0",
    padding: "13px 0",
  },
  [`@media ${device.phones}`]: {
    width: "49%",
  },
  [`@media ${device.small_phones}`]: {
    width: "48%",
  },
});

export const ChampInfoSkinsDiv = styled("div")({
  backgroundColor: "#27272D",
  padding: "15px",
  marginLeft: 10,
  borderRadius: 10,
  display: "flex",
  width: "78%",

  [`@media ${device.desktops_large}`]: {
    flexDirection: "column",
    width: "73%",
  },
  [`@media ${device.desktops}`]: {
    width: "72%",
  },
  [`@media ${device.tablets}`]: {
    marginTop: 10,
    width: "100%",
    marginLeft: 0,
  },
});

export const ChampSkinDiv = styled("div")({
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundColor: "#17171B",
  width: "75%",
  marginRight: 15,
  borderRadius: 10,
  transition: "all 0.5s ease",

  [`@media ${device.desktops_large}`]: {
    width: "100%",
    height: "75%",
    marginRight: 0,
  },

  [`@media ${device.tablets}`]: {
    margin: 0,
    height: "400px",
  },

  [`@media ${device.old_phones}`]: {
    height: "300px",
  },

  "&:not(:first-child).hidden": {
    display: "none",
  },
});

export const SkinNameHover = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: #070707;
  border-radius: 0px 0px 10px 10px;
  transition: opacity 0.4s ease-in-out;
`;
export const SkinName = styled.p`
  font-size: 17px;
  font-weight: 500;
  height: max-content;
  margin: 0;
`;

export const CarouselInner = styled("div")({
  width: "20%",
  height: "100%",
  borderRadius: 10,
  marginRight: 5,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignSelf: "center",

  [`@media ${device.desktops_large}`]: {
    width: "100%",
    height: "25%",
    flexDirection: "row",
    marginTop: "15px",
  },

  [`@media ${device.tablets}`]: {
    height: "135px",
    marginRight: 0,
  },
  [`@media ${device.old_phones}`]: {
    height: "125px",
  },
});

export const CarouselFlex = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  [`@media ${device.desktops_large}`]: {
    display: "none",
  },
  [`@media ${device.old_phones}`]: {
    width: "15px",
  },
});

export const CarouselFlexResp = styled("div")({
  display: "none",

  [`@media ${device.desktops_large}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const CarouselFlexSpells = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const CarouselDiv = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  overflow: "hidden",
  flexWrap: "wrap",

  [`@media ${device.desktops_large}`]: {
    flexDirection: "row",
  },
});

export const CarouselItem = styled("div")({
  backgroundColor: "#17171B",
  width: "100%",
  height: "30%",
  borderRadius: 10,

  [`@media ${device.desktops_large}`]: {
    width: "31%",
    height: "100%",
  },

  [`@media ${device.tablets}`]: {
    width: "32%",
  },
  [`@media ${device.old_phones}`]: {
    width: "48%",
  },
});

export const GeneralSpellsDiv = styled("div")({
  backgroundColor: "#27272D",
  padding: "15px 0",
  borderRadius: 10,
  marginTop: 10,
  display: "flex",
  justifyContent: "space-evenly",
  color: "white",
  fontSize: 16,
  fontWeight: "semibold",
  flexDirection: "column",
  height: "none",

  [`@media ${device.tablets}`]: {
    marginTop: 10,
    padding: "12px 0",
  },
});

export const GeneralSpellsUpperDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  marginBottom: 10,
});

export const SpellSeparationLine = styled("div")({
  backgroundColor: "#17171B",
  width: "34%",
  height: 1.8,

  [`@media ${device.old_phones}`]: {
    display: "none",
  },
});

export const SpellSeparationText = styled("h2")({
  [`@media ${device.tablets}`]: {
    fontSize: 20,
  },
  [`@media ${device.phones}`]: {
    fontSize: 18,
  },
});

export const ChampCarouselDiv = styled("div")({
  borderRadius: 10,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  width: "100%",
  height: "none",
});

export const ChampCarouselInner = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  overflow: "hidden",
  flexWrap: "wrap",
  height: "250px",
  [`@media ${device.desktops_large}`]: {
    minHeight: "230px",
  },
  [`@media ${device.desktops}`]: {
    minHeight: "200px",
  },
  [`@media ${device.tablets}`]: {
    minHeight: "220px",
  },
  [`@media ${device.phones}`]: {
    minHeight: "210px",
    height: "210px",
  },
  [`@media ${device.old_phones}`]: {
    minHeight: "170px",
    height: "170px",
  },
  [`@media ${device.small_phones}`]: {
    minHeight: "180px",
  },
});

export const ChampCarrusellSpellDiv = styled.div<BackgroundImageProps>`
  width: 24%;
  height: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center center;
  background-image: url(${(props) => props.backgroundImage});
  cursor: pointer;

  @media ${device.desktops} {
    width: 31%;
  }
  @media ${device.tablets} {
    width: 32%;
  }
  @media ${device.old_phones} {
    width: 48%;
  }
  @media ${device.small_phones} {
    width: 100%;
  }
`;

export const ChampSpellsVideo = styled.div`
  display: flex;
  width: 55vw;
  border: 1px solid #fff;
  border-radius: 10px;
  flex-direction: column;
  position: relative;

  @media ${device.desktops} {
    width: 60vw;
  }
  @media ${device.tablets} {
    width: 75vw;
  }
  @media ${device.phones} {
    width: 85vw;
  }
  @media ${device.old_phones} {
    width: 90vw;
  }
`;

export const ChampSpellsVideoPlayer = styled.video`
  width: 100%;
  height: 60vh;
  object-fit: cover;
  border-radius: 10px 10px 0 0;

  @media ${device.desktops} {
    height: 55vh;
  }
  @media ${device.tablets} {
    height: 50vh;
  }
  @media ${device.phones} {
    height: 45vh;
  }
  @media ${device.old_phones} {
    height: 37vh;
  }
  @media ${device.small_phones} {
    height: 28vh;
  }
`;

export const SpellInfoDiv = styled("div")({
  width: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  borderRadius: "0px 0px 10px 10px",
  borderTop: "1px solid rgba(255, 255, 255, 0.2)",
  padding: "25px 25px",
});

export const SpellImageDiv = styled("div")({
  height: "100%",
  marginRight: "25px",
  marginBottom: "5px",
  float: "left",

  [`@media ${device.old_phones}`]: {
    marginRight: "17px",
    marginBottom: "0px",
  },
});

export const SpellImage = styled("img")({
  width: "70px",
  height: "70px",
  borderRadius: "5px",
  objectFit: "cover",
  backgroundColor: "rgba(255, 255, 255, 1)",

  [`@media ${device.phones}`]: {
    width: "55px",
    height: "55px",
  },
  [`@media ${device.old_phones}`]: {
    width: "45px",
    height: "45px",
  },
});

export const SpellInfoTextDiv = styled("div")({
  height: "100%",
});

export const SpellInfoTitle = styled("h2")({
  fontSize: "19px",
  fontWeight: "bold",
  [`@media ${device.phones}`]: {
    fontSize: "17px",
  },
  [`@media ${device.old_phones}`]: {
    marginBottom: "0px",
  },
});

export const SpellInfoDescription = styled("p")({
  fontSize: "15px",
  marginBottom: 0,

  [`@media ${device.desktops}`]: {
    fontSize: "14px",
  },

  [`@media ${device.old_phones}`]: {
    fontSize: "12px",
    marginTop: "2px",
  },
  [`@media ${device.small_phones}`]: {
    fontSize: "13px",
  },
});

export const LogoSpellVideo = styled.div`
  display: flex;
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 1);
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const RemoveIcon = styled(MdClear)`
  font-size: 17px;
  fill: #a3a3a3;
`;

export const LogoSpellCircle = styled("div")({
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  backgroundColor: "rgba(0, 0, 0, 0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  bottom: "39%",
  alignSelf: "center",

  [`@media ${device.old_phones}`]: {
    width: "40px",
    height: "40px",
  },
});

export const LogoSpellIcon = styled(MdPlayArrow)({
  fontSize: "30px",
  fill: "#A3A3A3",

  [`@media ${device.old_phones}`]: {
    fontSize: "25px",
  },
});

export const SwiperContainer = styled("div")({
  height: "100%",
  width: "100%",
  display: "flex",
});

export const Container = styled("div")({
  width: "100%",
  maxWidth: "none",
  height: "100%",
});

export const ArrowBackInfo = styled(MdKeyboardArrowLeft)`
  font-size: 20px;
  cursor: pointer;

  @media ${device.tablets} {
    font-size: 40px;
  }
  @media ${device.old_phones} {
    margin-bottom: 0.5rem;
  }
`;

export const ScreenContainer = styled("div")({
  position: "absolute",
  width: "100%",
  height: "100%",
  display: "flex",
  top: 0,
  left: 0,
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  borderRadius: 10,
});

export const SpellVideoContainer = styled("div")({
  position: "fixed",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  top: 0,
  left: 0,
});
