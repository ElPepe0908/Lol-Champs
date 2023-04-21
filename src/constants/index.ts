export type RolesType =
  | "ASSASIN"
  | "MAGE"
  | "TANK"
  | "SUPPORT"
  | "FIGHTER"
  | "MARKSMAN"
  | "ALL";

export type DifficultyType = "EASY" | "MEDIUM" | "HARD" | "ALL";

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
