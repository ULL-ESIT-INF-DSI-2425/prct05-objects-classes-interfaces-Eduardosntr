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
  songName: string;
  duration: number;
  genres: GenresData[];
  isSingle: boolean;
  reproductions: number;
}

/**
 * Interface that represents a Discography data
 */
export interface DiscographyData {
  discographyName: string;
  year: number;
  songs: SongData[];
}

/**
 * Interface that represents a Artist data
 */
export interface ArtistData {
  artistName: string;
  listeners: number;
  discographies: DiscographyData[];
}
