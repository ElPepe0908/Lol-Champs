import styled from "styled-components";
import { device } from "../../constants";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

type FilterButtonProps = {
  show?: boolean;
  isSelected?: boolean;
  isHovered?: boolean;
};
type FilterButtonElementsProps = {
  isHovered?: boolean;
  isSelected?: boolean;
};
export const FilterButton = styled.button<FilterButtonProps>`
  position: relative;
  background-color: #27272d;
  width: 100%;
  height: 50px;
  border-radius: 4px;
  border: none;
  border-left: ${(props) =>
      props.isHovered || props.isSelected ? "6px" : "0px"}
    solid white;
  transition: all 0.1s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #808080;
  margin: 6px 0;
  cursor: pointer;
  position: relative;

  @media ${device.tablets} {
    font-size: 14px;
  }
  @media ${device.phones} {
    width: 100%;
    height: 48px;
    font-size: 13px;
    align-items: center;
    margin: 6px 0;
  }
`;

export const FilterButtonText = styled.p<FilterButtonElementsProps>`
  margin: 0px 8px 0 0;
  transition: all 0.2s ease;
  color: ${(props) =>
    props.isHovered || props.isSelected ? "#fff" : "#808080"};
  font-size: 15px;
  position: absolute;

  @media ${device.old_phones} {
    font-size: 14px;
  }
  @media ${device.small_phones} {
    font-size: 12px;
  }
`;

export const FilterEasyIcon = styled(FaRegStar)<FilterButtonElementsProps>`
  font-size: 16px;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.isHovered || props.isSelected ? "1" : "0")};
  position: relative;
  right: -30px;

  @media ${device.small_phones} {
    font-size: 14px;
  }
`;

export const FilterMediumIcon = styled(
  FaStarHalfAlt
)<FilterButtonElementsProps>`
  font-size: 16px;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.isHovered || props.isSelected ? "1" : "0")};
  position: relative;
  right: -46px;

  @media ${device.small_phones} {
    right: -40px;
    font-size: 14px;
  }
`;
export const FilterHardIcon = styled(FaStar)<FilterButtonElementsProps>`
  font-size: 16px;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.isHovered || props.isSelected ? "1" : "0")};
  position: relative;
  right: -35px;

  @media ${device.small_phones} {
    right: -30px;
    font-size: 14px;
  }
`;
