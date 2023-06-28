import { Champ } from "../interfaces/ChampsListInterface";
import { ChampionElement } from "../interfaces/ChampDetailInterface";
import { DifficultyType, RolesType } from "../constants";
import { createContext, useReducer } from "react";
import { champsReducer } from "./ChampsReducer";

export interface ChampsState {
  champs: Champ[];
  champSelected: ChampionElement | undefined;
  rolFilterSelected: RolesType;
}

export const champsInitialState: ChampsState = {
  champs: [],
  champSelected: undefined,
  rolFilterSelected: "ALL",
};

export interface ChampsContextProps {
  champsState: ChampsState;
  setChamps: (champs: Champ[]) => void;
  setChampSelected: (champ: ChampionElement) => void;
  setRolFilterSelected: (rol: RolesType) => void;
  setDifficultyFilterSelected: (difficulty: DifficultyType) => void;
}

export const ChampsContext = createContext({} as ChampsContextProps);

export const ChampsProvider = ({ children }: any) => {
  const [champsState, dispatch] = useReducer(champsReducer, champsInitialState);

  const setChamps = (champs: Champ[]) => {
    dispatch({ type: "setChamps", payload: champs });
  };

  const setChampSelected = (champ: ChampionElement) => {
    dispatch({ type: "setChampSelected", payload: champ });
  };

  const setRolFilterSelected = (rol: RolesType) => {
    dispatch({ type: "setRolFilterSelected", payload: rol });
  };

  const setDifficultyFilterSelected = (difficulty: DifficultyType) => {
    dispatch({ type: "setDifficultyFilterSelected", payload: difficulty });
  };

  return (
    <ChampsContext.Provider
      value={{
        champsState,
        setChamps,
        setChampSelected,
        setRolFilterSelected,
        setDifficultyFilterSelected,
      }}
    >
      {children}
    </ChampsContext.Provider>
  );
};
