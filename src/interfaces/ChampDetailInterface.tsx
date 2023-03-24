export interface ChampDetailResponse {
  champion: ChampionElement[];
  video: ChampResponseVideo[];
}

export interface ChampionElement {
  publish_details: PublishDetails;
  uid: string;
  url: string;
  data_dragon_id: string;
  data_dragon_json: string;
  champion_blurb: string;
  lore: string;
  champion_icon: string;
  champion_name: string;
  champion_splash: string;
  champion_title: string;
  recommended_lanes: any[];
  recommended_roles: string[];
  links: Link[];
  champion: ChampionChampion;
  skins: Skin[];
  champion_passive: ChampionPassive;
  champion_q: ChampionQ;
  champion_w: ChampionW;
  champion_e: ChampionE;
  champion_r: ChampionR;
  related_champions: any[];
}

export interface ChampionChampion {
  modular_blocks: any[];
}

export interface ChampionE {
  champion_e_description: string;
  champion_e_icon: string;
  champion_e_name: string;
  champion_e_video_mp4: string;
  champion_e_video_poster: string;
  champion_e_video_webm: string;
}

export interface ChampionPassive {
  champion_passive_description: string;
  champion_passive_icon: string;
  champion_passive_name: string;
  champion_passive_video_mp4: string;
  champion_passive_video_poster: string;
  champion_passive_video_webm: string;
}

export interface ChampionQ {
  champion_q_description: string;
  champion_q_icon: string;
  champion_q_name: string;
  champion_q_video_mp4: string;
  champion_q_video_poster: string;
  champion_q_video_webm: string;
}

export interface ChampionR {
  champion_r_description: string;
  champion_r_icon: string;
  champion_r_name: string;
  champion_r_video_mp4: string;
  champion_r_video_poster: string;
  champion_r_video_webm: string;
}

export interface ChampionW {
  champion_w_description: string;
  champion_w_icon: string;
  champion_w_name: string;
  champion_w_video_mp4: string;
  champion_w_video_poster: string;
  champion_w_video_webm: string;
}

export interface Link {
  href: string;
  title: string;
}

export interface PublishDetails {
  locale: string;
}

export interface Skin {
  name: string;
  imageUrl: string;
}

export interface ChampResponseVideo {
  video: PurpleVideo[];
  title: string;
}

export interface PurpleVideo {
  video: FluffyVideo;
}

export interface FluffyVideo {
  file: File;
  height: number;
  width: number;
}

export interface File {
  url: string;
  content_type: string;
}
