import { DifficultyType, RolesType } from "../constants";
import { ChampionElement } from "../interfaces/ChampDetailInterface";
import { Champ } from "../interfaces/ChampsListInterface";
import { ChampsState } from "./ChampsContext";

type ChampsAction =
  | { type: "setChamps"; payload: Champ[] }
  | { type: "setChampSelected"; payload: ChampionElement }
  | { type: "setRolFilterSelected"; payload: RolesType }
  | { type: "setDifficultyFilterSelected"; payload: DifficultyType };

export const champsReducer = (
  state: ChampsState,
  action: ChampsAction
): ChampsState => {
  switch (action.type) {
    case "setChamps":
      return {
        ...state,
        champs: action.payload,
      };
    case "setChampSelected":
      return {
        ...state,
        champSelected: action.payload,
      };
    case "setRolFilterSelected":
      return {
        ...state,
        rolFilterSelected: action.payload,
      };
    case "setDifficultyFilterSelected":
      return {
        ...state,
      };
    default:
      return state;
  }
};
