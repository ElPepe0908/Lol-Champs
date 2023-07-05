import React from "react";
import { FilterButton, FilterFighterIcon } from "../screens/HomeScreen/styles";

interface Props {
  buttonTitle: string;
  isSelected: boolean;
  isHovered: boolean;
  onClick: () => void;
  onMouseOver: () => void;
  onMouseOut: () => void;
}

export const CustomButton = ({
  isSelected,
  isHovered,
  buttonTitle,
  onMouseOut,
  onMouseOver,
  onClick,
}: Props) => {
  return (
    <FilterButton
      onClick={onClick}
      style={{
        borderColor: "white",
        borderLeft: `${isSelected ? "6px" : "0px"} solid white`,
        transition: "all .1s ease",
      }}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <>
        <p>{buttonTitle}</p>
        <FilterFighterIcon
          style={{
            opacity: isSelected || isHovered ? "1" : "0",
            transition: "all .2s ease",
          }}
        />
      </>
    </FilterButton>
  );
};
