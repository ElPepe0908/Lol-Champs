export interface ChampsListResponse {
  champions: ChampionElement[];
  page: Page;
}

export interface ChampionElement {
  node: Champ;
}

export interface Champ {
  publish_details: PublishDetails;
  uid: string;
  url: string;
  champion_name: string;
  champion_splash: string;
  recommended_roles: string[];
  difficulty: number;
  champion: NodeChampion;
}

export interface NodeChampion {
  profile_image: ProfileImage | null;
}

export interface ProfileImage {
  url: string;
}

export interface PublishDetails {
  locale: Locale;
}

export enum Locale {
  EnUs = "en-us",
}

export interface Page {
  start: number;
  end: number;
  totalCount: number;
}
