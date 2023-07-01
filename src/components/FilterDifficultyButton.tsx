import { champStats, difficultyNumber } from "../constants";
import { useChampsData } from "../hooks/useChampsData";
import { FilterButton } from "../screens/HomeScreen/styles";

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
            onClick={() => {
              handleClickFilter(stats);
              getChampsByDifficulty(difficultyNumber[index]);
              refetchChamps();
            }}
            style={{
              borderColor: "white",
              borderLeft: `${
                selectFilter === stats || selectedRole === stats ? "6px" : "0px"
              } solid white`,
              transition: "all .1s ease",
            }}
            onMouseOver={() => handleRoleOver(stats)}
            onMouseOut={handleRoleOut}
          >
            <>
              <p
                style={{
                  margin: 0,
                  transition: "all .2s ease",
                  color:
                    selectedRole === stats ||
                    (showClickedRole && selectFilter === stats)
                      ? "#fff"
                      : "#808080",
                }}
              >
                {stats}
              </p>
            </>
          </FilterButton>
        );
      })}
    </>
  );
};
