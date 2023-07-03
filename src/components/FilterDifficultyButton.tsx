import { champStats, difficultyNumber } from "../constants";
import { useChampsData } from "../hooks/useChampsData";
import { FilterButton, FilterButtonText } from "../screens/HomeScreen/styles";

export const FilterDifficultyButton = () => {
  const {
    handleClickFilter,
    getChampsByDifficulty,
    refetchChamps,
    selectFilter,
    selectedRole,
    showClickedRole,
    handleRoleOut,
    handleRoleOver,
  } = useChampsData();

  return (
    <>
      {champStats.map((stats, index) => {
        return (
          <FilterButton
            key={stats}
            selectFilter={selectFilter}
            selectedRole={selectedRole}
            tag={stats}
            onClick={() => {
              handleClickFilter(stats);
              getChampsByDifficulty(difficultyNumber[index]);
              refetchChamps();
            }}
            onMouseOver={() => handleRoleOver(stats)}
            onMouseOut={handleRoleOut}
          >
            <>
              <FilterButtonText
                showClickedRole={showClickedRole}
                selectFilter={selectFilter}
                selectedRole={selectedRole}
                tag={stats}
              >
                {stats}
              </FilterButtonText>
            </>
          </FilterButton>
        );
      })}
    </>
  );
};
