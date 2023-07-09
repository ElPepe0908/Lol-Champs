import styled from "styled-components";
import { device } from "../../constants";

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
  @media ${device.small_phones} {
    height: 40px;
    font-size: 12px;
  }
`;

export const FilterButtonText = styled.p<FilterButtonElementsProps>`
  margin: 0;
  transition: all 0.2s ease;
  color: ${(props) =>
    props.isHovered || props.isSelected ? "#fff" : "#808080"};
  font-size: 15px;
`;
