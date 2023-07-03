import { Datum, Tag } from "../interfaces/NewChampsListResponse";
import {
  FilterButton,
  FilterIconFighter,
  FilterButtonText,
  FilterIconTank,
  FilterIconMage,
  FilterIconAssasin,
  FilterIconSupport,
  FilterIconMarksman,
} from "../screens/HomeScreen/styles";
import { useChampsData } from "../hooks/useChampsData";

export const FilterRoleButton = () => {
  const {
    originalChampsData,
    handleClickFilter,
    getChampsByTag,
    selectFilter,
    selectedRole,
    handleRoleOver,
    handleRoleOut,
    showClickedRole,
    refetchChamps,
  } = useChampsData();
  const roleIcons = {
    Tank: FilterIconTank,
    Fighter: FilterIconFighter,
    Mage: FilterIconMage,
    Assassin: FilterIconAssasin,
    Support: FilterIconSupport,
    Marksman: FilterIconMarksman,
  };

  return (
    <>
      {Array.from(
        new Set(originalChampsData?.flatMap((champ: Datum) => champ.tags))
      ).map((tag: Tag) => {
        const IconComponent = roleIcons[tag];
        return (
          <FilterButton
            key={tag}
            selectFilter={selectFilter}
            selectedRole={selectedRole}
            tag={tag}
            onClick={() => {
              handleClickFilter(tag);
              getChampsByTag(tag);
              refetchChamps();
            }}
            onMouseOver={() => handleRoleOver(tag)}
            onMouseOut={handleRoleOut}
          >
            <FilterButtonText
              showClickedRole={showClickedRole}
              selectFilter={selectFilter}
              selectedRole={selectedRole}
              tag={tag}
            >
              {tag}
            </FilterButtonText>
            <IconComponent
              showClickedRole={showClickedRole}
              selectFilter={selectFilter}
              selectedRole={selectedRole}
              tag={tag}
            />
          </FilterButton>
        );
      })}
    </>
  );
};
