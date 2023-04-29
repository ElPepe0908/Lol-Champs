import styled from "styled-components";
import { device } from "../../constants";
import { Navigation } from "swiper";

export const GeneralDiv = styled("div")({
  width: "95%",
  height: "none",
  margin: "2vh auto",
  display: "flex",
  flexDirection: "column",

  [`@media ${device.tablets}`]: {
    width: "85%",
    margin: "3vh auto",
  },
  [`@media ${device.phones}`]: {
    width: "95%",
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
  width: "20%",

  [`@media ${device.desktops_large}`]: {
    width: "24%",
  },
  [`@media ${device.desktops}`]: {
    width: "25%",
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

export const ChampNameDiv = styled("div")({
  display: "flex",
  width: "100%",
  fontSize: 25,
  alignSelf: "center",
  fontWeight: "bold",
  marginBottom: 0,
  justifyContent: "center",
});

export const ChampName = styled("h1")({
  fontSize: 35,
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

export const ArrowIcon = styled("div")({
  display: "flex",
  alignSelf: "center",
  position: "absolute",
  left: "70px",

  [`@media ${device.desktops_large}`]: {
    left: "60px",
  },
  [`@media ${device.desktops}`]: {
    left: "45px",
  },

  [`@media ${device.tablets}`]: {
    display: "none",
  },
});

export const ChampTitle = styled("p")({
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
  padding: "15px 0",

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
});

export const ChampInfoSkinsDiv = styled("div")({
  backgroundColor: "#27272D",
  padding: "15px",
  marginLeft: 10,
  borderRadius: 10,
  display: "flex",
  width: "80%",

  [`@media ${device.desktops_large}`]: {
    flexDirection: "column",
    width: "76%",
  },
  [`@media ${device.desktops}`]: {
    width: "75%",
  },
  [`@media ${device.tablets}`]: {
    marginTop: 10,
    width: "100%",
    marginLeft: 0,
  },
  [`@media ${device.old_phones}`]: {
    padding: "10px 0",
  },
});

export const ChampSkinDiv = styled("div")({
  backgroundImage:
    'url("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundColor: "#17171B",
  width: "80%",
  marginRight: 20,
  borderRadius: 10,

  [`@media ${device.desktops_large}`]: {
    width: "100%",
    height: "75%",
    marginRight: 0,
  },

  [`@media ${device.tablets}`]: {
    margin: 0,
    height: "350px",
  },

  [`@media ${device.old_phones}`]: {
    height: "300px",
    width: "96%",
    margin: "0 2%",
  },
});

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
  height: 2,
  borderRadius: 10,

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

export const ChampCarrusellDiv = styled("div")({
  borderRadius: 10,
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  width: "100%",
  height: "none",
});

export const ChampCarrusellInner = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  overflow: "hidden",
  flexWrap: "wrap",
  height: "225px",

  [`@media ${device.tablets}`]: {
    height: "180px",
  },
  [`@media ${device.phones}`]: {
    height: "150px",
  },
  [`@media ${device.old_phones}`]: {
    height: "170px",
  },
  [`@media ${device.small_phones}`]: {
    height: "180px",
  },
});

export const ChampCarrusellSpellDiv = styled("div")({
  backgroundColor: "#17171B",
  width: "24%",
  height: "100%",
  borderRadius: 10,

  [`@media ${device.desktops}`]: {
    width: "31%",
  },
  [`@media ${device.tablets}`]: {
    width: "32%",
  },
  [`@media ${device.old_phones}`]: {
    width: "48%",
  },
  [`@media ${device.small_phones}`]: {
    width: "100%",
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
