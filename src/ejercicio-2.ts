/**
 * Enum that represents the genre o a Song data
 */
export enum GenresData {
  Pop = "Pop",
  Reggae = "Reggae",
  Rock = "Rock",
  Jazz = "Jazz",
  Blues = "Blues",
  Country = "Country",
  HipHop = "HipHop",
  Rap = "Rap",
  Electronic = "Electronic",
  Reggaeton = "Reggaeton",
  Latin = "Latin",
}

/**
 * Interface that represents a Song data
 */
export interface SongData {
  name: string;
  duration: number;
  genre: GenresData[];
  single: boolean;
  reproductions: number;
}

/**
 * Interface that represents a Discography data
 */
export interface DiscographyData {
  name: string;
  year: number;
  songs: SongData[];
}

/**
 * Interface that represents a Artist data
 */
export interface ArtistData {
  name: string;
  listeners: number;
  discography: DiscographyData[];
}
