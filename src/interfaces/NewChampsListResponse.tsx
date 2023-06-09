export interface NewChampsListResponse {
  data: Data;
  status: number;
  statusText: string;
  headers: NewResponseHeaders;
  config: Config;
  request: Request;
}

export interface Config {
  transitional: Transitional;
  adapter: string[];
  transformRequest: null[];
  transformResponse: null[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: Request;
  headers: ConfigHeaders;
  method: string;
  url: string;
}

export interface Request {}

export interface ConfigHeaders {
  Accept: string;
}

export interface Transitional {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export interface Data {
  type: Type;
  format: string;
  version: Version;
  data: { [key: string]: Datum };
}

export interface Datum {
  version: Version;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: Info;
  image: Image;
  tags: Tag[];
  partype: string;
  stats: { [key: string]: number };
}

export interface Image {
  full: string;
  sprite: Sprite;
  group: Type;
  x: number;
  y: number;
  w: number;
  h: number;
}

export enum Type {
  Champion = "champion",
}

export enum Sprite {
  Champion0PNG = "champion0.png",
  Champion1PNG = "champion1.png",
  Champion2PNG = "champion2.png",
  Champion3PNG = "champion3.png",
  Champion4PNG = "champion4.png",
  Champion5PNG = "champion5.png",
}

export interface Info {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export type ChampTags =
  | "Assasin"
  | "Fighter"
  | "Mage"
  | "Marksman"
  | "Support"
  | "Tank";

export enum Tag {
  Assassin = "Assassin",
  Fighter = "Fighter",
  Mage = "Mage",
  Marksman = "Marksman",
  Support = "Support",
  Tank = "Tank",
}

export enum Version {
  The13101 = "13.10.1",
}

export interface NewResponseHeaders {
  "content-type": string;
  "last-modified": string;
}
