import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export const SpellsSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  padding: 0px 15px;
`;

export const SpellsSwiperSlide = styled(SwiperSlide)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

export const SpellsPrevArrow = styled(MdKeyboardArrowLeft)`
  cursor: pointer;
  fill: #bfbfbf;
  width: 45px;
  left: 25px;
  background-color: rgba(39, 39, 45, 0.7);
  border-radius: 50%;
  box-shadow: 0 0 2px 3px rgba(39, 39, 45, 0.7);
`;

export const SpellsNextArrow = styled(MdKeyboardArrowRight)`
  cursor: pointer;
  fill: #bfbfbf;
  width: 45px;
  right: 25px;
  background-color: rgba(39, 39, 45, 0.7);
  border-radius: 50%;
  box-shadow: 0 0 2px 3px rgba(39, 39, 45, 0.7);
`;
