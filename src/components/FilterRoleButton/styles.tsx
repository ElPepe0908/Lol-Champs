import styled from "styled-components";
import { device } from "../../constants";
import {
  GiBroadsword,
  GiCrossbow,
  GiThorHammer,
  GiFist,
  GiSmallFire,
} from "react-icons/gi";
import { FaShieldAlt } from "react-icons/fa";
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
`;

export const FilterButtonText = styled.p<FilterButtonElementsProps>`
  margin: 0;
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
export const FilterIconTank = styled(GiThorHammer)<FilterButtonElementsProps>`
  font-size: 20px;
  margin-left: 8px;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.isHovered || props.isSelected ? "1" : "0")};
  position: relative;
  right: -35px;

  @media ${device.old_phones} {
    font-size: 18px;
  }
  @media ${device.small_phones} {
    font-size: 14px;
    right: -30px;
  }
`;
export const FilterIconFighter = styled(GiFist)<FilterButtonElementsProps>`
  font-size: 20px;
  margin-left: 8px;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.isHovered || props.isSelected ? "1" : "0")};
  position: relative;
  right: -40px;

  @media ${device.old_phones} {
    font-size: 18px;
  }
  @media ${device.small_phones} {
    font-size: 14px;
    right: -32px;
  }
`;
export const FilterIconMage = styled(GiSmallFire)<FilterButtonElementsProps>`
  font-size: 20px;
  margin-left: 8px;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.isHovered || props.isSelected ? "1" : "0")};
  position: relative;
  right: -38px;

  @media ${device.old_phones} {
    font-size: 18px;
  }
  @media ${device.small_phones} {
    font-size: 14px;
    right: -32px;
  }
`;
export const FilterIconAssassin = styled(
  GiBroadsword
)<FilterButtonElementsProps>`
  font-size: 20px;
  margin-left: 8px;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.isHovered || props.isSelected ? "1" : "0")};
  position: relative;
  right: -48px;

  @media ${device.old_phones} {
    font-size: 18px;
  }
  @media ${device.small_phones} {
    font-size: 14px;
    right: -40px;
  }
`;
export const FilterIconSupport = styled(FaShieldAlt)<FilterButtonElementsProps>`
  font-size: 20px;
  margin-left: 8px;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.isHovered || props.isSelected ? "1" : "0")};
  position: relative;
  right: -46px;

  @media ${device.old_phones} {
    font-size: 18px;
  }
  @media ${device.small_phones} {
    font-size: 14px;
    right: -38px;
  }
`;
export const FilterIconMarksman = styled(GiCrossbow)<FilterButtonElementsProps>`
  font-size: 20px;
  margin-left: 8px;
  transition: all 0.2s ease;
  opacity: ${(props) => (props.isHovered || props.isSelected ? "1" : "0")};
  position: relative;
  right: -55px;

  @media ${device.tablets} {
    right: -50px;
  }
  @media ${device.old_phones} {
    right: -52px;
    font-size: 18px;
  }
  @media ${device.small_phones} {
    right: -42px;
    font-size: 14px;
  }
`;
