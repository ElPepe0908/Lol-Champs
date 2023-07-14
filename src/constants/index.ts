export type RolesType =
  | "ASSASSIN"
  | "MAGE"
  | "TANK"
  | "SUPPORT"
  | "FIGHTER"
  | "MARKSMAN"
  | "ALL";

export const roles = [
  "Assassin",
  "Mage",
  "Tank",
  "Support",
  "Fighter",
  "Marksman",
];

export type DifficultyType = "Easy" | "Medium" | "Hard";

export const difficultyNumber = [0, 4, 8];

const SCREEN_SIZES = {
  small_phones: "415px",
  old_phones: "576px",
  phones: "768px",
  tablets: "992px",
  desktops: "1200px",
  desktops_large: "1450px",
};

export const device = {
  small_phones: `(max-width: ${SCREEN_SIZES.small_phones})`,
  old_phones: `(max-width: ${SCREEN_SIZES.old_phones})`,
  phones: `(max-width: ${SCREEN_SIZES.phones})`,
  tablets: `(max-width: ${SCREEN_SIZES.tablets})`,
  desktops: `(max-width: ${SCREEN_SIZES.desktops})`,
  desktops_large: `(max-width: ${SCREEN_SIZES.desktops_large})`,
};
export const initialChampsToRender = 10;

export const baseUrl =
  "http://ddragon.leagueoflegends.com/cdn/img/champion/splash/";

export const spellImgBaseUrl =
  "https://ddragon.leagueoflegends.com/cdn/13.13.1/img/spell/";

export const passiveImgBaseUrl =
  "https://ddragon.leagueoflegends.com/cdn/13.13.1/img/passive/";

export interface ICarouselItem {
  hability: string;
  name: string;
  imageUrl: string | undefined;
  videoUrl?: string | undefined;
  spellAssets?: string | undefined;
}

export const champStats = ["Easy", "Medium", "Hard"];
