import {
  FilterButton,
  FilterButtonText,
  FilterIconAssassin,
  FilterIconFighter,
  FilterIconMage,
  FilterIconMarksman,
  FilterIconSupport,
  FilterIconTank,
} from "../screens/HomeScreen/styles";
interface Props {
  buttonTitle?: string;
  isSelected?: boolean;
  isHovered?: boolean;
  onClick?: () => void;
  onMouseOver?: () => void;
  onMouseOut?: () => void;
}
export const FilterRoleButton = ({
  isSelected,
  isHovered,
  buttonTitle,
  onMouseOut,
  onMouseOver,
  onClick,
}: Props) => {
  const roleIcons = {
    Tank: FilterIconTank,
    Fighter: FilterIconFighter,
    Mage: FilterIconMage,
    Assassin: FilterIconAssassin,
    Support: FilterIconSupport,
    Marksman: FilterIconMarksman,
  };
  const Icon = roleIcons[buttonTitle as keyof typeof roleIcons];
  return (
    <FilterButton
      isSelected={isSelected}
      isHovered={isHovered}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <FilterButtonText isSelected={isSelected} isHovered={isHovered}>
        {buttonTitle}
      </FilterButtonText>
      {Icon && <Icon isSelected={isSelected} isHovered={isHovered} />}
    </FilterButton>
  );
};
