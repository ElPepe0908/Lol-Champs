import { FilterButton, FilterButtonText } from "./styles";

interface Props {
  buttonTitle?: string;
  isSelected?: boolean;
  isHovered?: boolean;
  onClick?: () => void;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
}

export const FilterDifficultyButton = ({
  isSelected,
  isHovered,
  buttonTitle,
  onMouseOut,
  onMouseOver,
  onClick,
}: Props) => {
  return (
    <>
      <FilterButton
        isSelected={isSelected}
        isHovered={isHovered}
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <>
          <FilterButtonText isHovered={isHovered} isSelected={isSelected}>
            {buttonTitle}
          </FilterButtonText>
        </>
      </FilterButton>
    </>
  );
};
