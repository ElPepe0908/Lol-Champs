import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { device } from "../../constants";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
export const SkinsSwiper = styled(Swiper)`
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
export const SkinsSwiperSlide = styled(SwiperSlide)`
  width: 100%;
  display: flex;
  background-color: #000;
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
export const SkinsPrevArrow = styled(MdKeyboardArrowLeft)`
  cursor: pointer;
  fill: #bfbfbf;
  width: 35px;
  height: 35px;
  transform: rotate(90deg);
  top: var(--swiper-navigation-top-offset, 5%);
  left: 43.5%;
  background-color: rgba(39, 39, 45, 0.7);
  border-radius: 50%;
  box-shadow: 0 0 2px 3px rgba(39, 39, 45, 0.7);

  @media ${device.desktops_large} {
    top: 50%;
    left: 15px;
    transform: rotate(0deg);
  }
  @media ${device.old_phones} {
    width: 30px;
    height: 30px;
  }
`;

export const SkinsNextArrow = styled(MdKeyboardArrowRight)`
  cursor: pointer;
  fill: #bfbfbf;
  width: 35px;
  height: 35px;
  transform: rotate(90deg);
  top: var(--swiper-navigation-top-offset, 95%);
  right: 43.5%;
  background-color: rgba(39, 39, 45, 0.7);
  border-radius: 50%;
  box-shadow: 0 0 2px 3px rgba(39, 39, 45, 0.7);

  @media ${device.desktops_large} {
    top: 50%;
    right: 15px;
    transform: rotate(0deg);
  }
  @media ${device.old_phones} {
    width: 30px;
    height: 30px;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: fixed;
`;
