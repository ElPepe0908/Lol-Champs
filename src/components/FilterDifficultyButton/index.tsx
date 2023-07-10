import {
  FilterButton,
  FilterButtonText,
  FilterEasyIcon,
  FilterHardIcon,
  FilterMediumIcon,
} from "./styles";

interface Props {
  buttonTitle?: string;
  isSelected?: boolean;
  isHovered?: boolean;
  onClick?: () => void;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
  getChampsByDifficulty?: (difficulty: number) => void;
}

export const FilterDifficultyButton = ({
  isSelected,
  isHovered,
  buttonTitle,
  onMouseOut,
  onMouseOver,
  onClick,
  getChampsByDifficulty,
}: Props) => {
  const difficultyIcons = {
    Easy: FilterEasyIcon,
    Medium: FilterMediumIcon,
    Hard: FilterHardIcon,
  };
  const Icon = difficultyIcons[buttonTitle as keyof typeof difficultyIcons];

  // const getDifficultyCount = (difficulty: string | undefined) => {
  //   const count = difficulty === "Medium" ? 2 : difficulty === "Hard" ? 3 : 1;
  //   return count;
  // };
  // const renderIcons = () => {
  //   const iconsToRender = [];

  //   for (let i = 0; i < getDifficultyCount(buttonTitle); i++) {
  //     iconsToRender.push(
  //       <Icon key={i} isSelected={isSelected} isHovered={isHovered} />
  //     );
  //   }

  //   return iconsToRender;
  // };
  // console.log(renderIcons());
  return (
    <>
      <FilterButton
        isSelected={isSelected}
        isHovered={isHovered}
        onClick={onClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <FilterButtonText isHovered={isHovered} isSelected={isSelected}>
          {buttonTitle}
        </FilterButtonText>
        {/* {Icon && renderIcons()} */}
        {/* {renderIcons()} */}
        {Icon && <Icon isSelected={isSelected} isHovered={isHovered} />}
      </FilterButton>
    </>
  );
};
