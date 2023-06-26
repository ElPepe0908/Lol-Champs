import styled, { keyframes } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { device } from "../constants";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

type DotAnimationProps = {
  delay: number;
};

export const ChampionCard = styled("div")({
  width: "100%",
  height: "100%",
  background: "blue",
});

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: fixed;
`;

const dotPulse = keyframes`
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1.0); }
`;

export const Dot = styled.div<DotAnimationProps>`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: #27272d;
  animation: ${dotPulse} 1s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
`;

export const CarouselImage = styled.div`
  width: 100%;
  height: 100%;
  background: blue;
`;
export const CarouselImage2 = styled.div`
  width: 100%;
  height: 100%;
  background: red;
`;

export const StyledSwiper = styled(Swiper)`
  width: 25%;
  height: 100%;

  @media ${device.desktops_large} {
    width: 100%;
    height: 27%;
    margin-top: 15px;
  }

  @media ${device.desktops} {
    width: 100%;
    height: 36%;
  }

  @media ${device.tablets} {
    width: 100%;
    height: 190px;
  }

  @media ${device.old_phones} {
    width: 100%;
    height: 140px;
  }
`;

export const StyledSwiperSlide = styled(SwiperSlide)<{ isSelected: boolean }>`
  width: 100%;
  display: flex;
  alignItems: "flex-end",
  backgroundColor: "#000",
  justify-content: center;
  align-items: end;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  cursor: pointer;

  @media ${device.desktops_large} {
    width: 32%;
    height: 100%;
  }
`;

export const SpellsPrevArrow = styled(MdKeyboardArrowLeft)`
  cursor: pointer;
  fill: #bfbfbf;
  width: 44px;
  left: 25px;
`;

export const SpellsNextArrow = styled(MdKeyboardArrowRight)`
  cursor: pointer;
  fill: #bfbfbf;
  width: 44px;
  right: 25px;
`;

export const SkinsPrevArrow = styled(MdKeyboardArrowLeft)`
  cursor: pointer;
  fill: #bfbfbf;
  width: 44px;
  left: 10px;
`;

export const SkinsNextArrow = styled(MdKeyboardArrowRight)`
  cursor: pointer;
  fill: #bfbfbf;
  width: 44px;
  right: 10px;
`;
