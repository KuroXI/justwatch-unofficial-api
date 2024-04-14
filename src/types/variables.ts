import type { Country } from "./country";
import type { Provider } from "./provider";

export type InfoVariables = {
  fullPath: string;
  language?: string;
  episodeMaxLimit?: number;
  format?: ImageFormat;
  profile?: PosterProfile;
  backdropProfile?: BackdropProfile;
};

export type SearchVariables = {
  after?: string;
  first?: number;
  country?: Country;
  language?: string;
  format?: ImageFormat;
  profile?: PosterProfile;
  backdropProfile?: BackdropProfile;
  filter: SearchFilter;
};

export type SearchFilter = {
  includeTitlesWithoutUrl?: boolean;
  searchQuery: string;
};

export type PopularVariables = {
  after?: string;
  first?: number;
  country?: Country;
  language?: string;
  format?: ImageFormat;
  profile?: PosterProfile;
  backdropProfile?: BackdropProfile;
  popularTitlesFilter: PopularTitlesFilter;
  popularTitlesSortBy: Sort;
};

export type PopularTitlesFilter = {
  ageCertifications?: AgeRestriction[];
  objectTypes?: Type[];
  genres?: Genres[];
  excludeGenres?: Genres[];
  packages?: Provider[];
};

export type Sort =
  | "POPULAR"
  | "TRENDING"
  | "RANDOM"
  | "ALPHABETICAL"
  | "RELEASE_YEAR"
  | "TMDB_POPULARITY"
  | "IMDB_SCORE";

export type AgeRestriction =
  | "G"
  | "PG"
  | "R-13"
  | "R-16"
  | "R-18"
  | "R18"
  | "R16"
  | "R13"
  | "16+"
  | "X";

export type Genres =
  | "act" // Action & Adventure
  | "ani" // Animation
  | "cmy" // Comedy
  | "crm" // Crime
  | "doc" // Documentary
  | "drm" // Drama
  | "fnt" // Fantasy
  | "hst" // History
  | "hrr" // Horror
  | "fml" // Kids & Family
  | "eur" // Made in Europe
  | "msc" // Music & Musical
  | "trl" // Mystery & Thriller
  | "rly" // Reality TV
  | "rma" // Romance
  | "spt" // Sports
  | "scf" // Sci-Fi
  | "war" // War & Military
  | "wsn"; // Western

export type Type = "MOVIE" | "SHOW";

export enum PosterProfile {
  LARGE = "S718",
  MEDIUM = "S592",
  SMALL = "S166",
}

export enum BackdropProfile {
  EXTRA_LARGE = "S1920",
  LARGE = "S1440",
  SMALL = "S640",
  EXTRA_SMALL = "S480",
}

export type ImageFormat = "PNG" | "JPG" | "WEBP";
