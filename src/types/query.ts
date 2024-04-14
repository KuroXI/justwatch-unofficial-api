import type { Country } from "./country";
import type { Provider } from "./provider";
import type {
  BackdropProfile,
  Genres,
  ImageFormat,
  Type,
  Sort,
  PosterProfile,
  AgeRestriction,
} from "./variables";

export type InfoQuery = {
  path: string;
  country?: Country;
  language?: string;
  episodeMaxLimit?: number;
  format?: ImageFormat;
  profile?: PosterProfile;
  backdropProfile?: BackdropProfile;
};

export type SearchQuery = {
  after?: string;
  first?: number;
  country?: Country;
  language?: string;
  format?: ImageFormat;
  profile?: PosterProfile;
  backdropProfile?: BackdropProfile;
  includeTitlesWithoutUrl?: boolean;
};

export type PopularQuery = {
  sort: Sort;
  after?: string;
  first?: number;
  country?: Country;
  language?: string;
  profile?: PosterProfile;
  backdropProfile?: BackdropProfile;
  format?: ImageFormat;
  ageRestriction?: AgeRestriction[];
  genres?: Genres[];
  excludeGenres?: Genres[];
  provider?: Provider[];
  type?: Type[];
};
