import { useEffect, useState } from "react";
import { Datum, Tag } from "../interfaces/NewChampsListResponse";
import { FilterButton, FilterFighterIcon } from "../screens/HomeScreen/styles";
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
  } = useChampsData();

  return (
    <>
      {Array.from(
        new Set(originalChampsData?.flatMap((champ: Datum) => champ.tags))
      ).map((tag: Tag) => {
        return (
          <FilterButton
            key={tag}
            onClick={() => {
              handleClickFilter(tag);
              getChampsByTag(tag);
            }}
            style={{
              borderColor: "white",
              borderLeft: `${
                selectFilter === tag || selectedRole === tag ? "6px" : "0px"
              } solid white`,
              transition: "all .1s ease",
            }}
            onMouseOver={() => handleRoleOver(tag)}
            onMouseOut={handleRoleOut}
          >
            <>
              <p
                style={{
                  margin: 0,
                  transition: "all .2s ease",
                  color:
                    selectedRole === tag ||
                    (showClickedRole && selectFilter === tag)
                      ? "#fff"
                      : "#808080",
                }}
              >
                {tag}
              </p>
              <FilterFighterIcon
                style={{
                  opacity:
                    selectedRole === tag ||
                    (showClickedRole && selectFilter === tag)
                      ? "1"
                      : "0",
                  transition: "all .2s ease",
                }}
              />
            </>
          </FilterButton>
        );
      })}
    </>
  );
};
