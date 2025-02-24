import { GenresData, SongData } from "./interfaces";

/**
 * Class that represents a song implementing the interface SongData
 */
export class Song implements SongData {
  /**
   * Constructor of the Song class
   * @param songName - Represents the name of the song
   * @param duration - Represents the duration of the song
   * @param genres - Represents the genres that the song belongs to
   * @param single - Represents if a song is a single or not
   * @param reproductions - Represents the number of reproductions of a song
   */
  constructor(
    private _songName: string,
    private _duration: number,
    private _genres: GenresData[],
    private _single: boolean,
    private _reproductions: number,
  ) {
    if (this.duration <= 0) {
      throw new Error("The song duration must be greater than 0 seconds");
    }
    if (this.reproductions <= 0) {
      throw new Error("The song reproductions should be greater than 0");
    }
    if (this.genres.length <= 0) {
      throw new Error("The song should belong at 1 or more genres");
    }
  }

  get songName(): string {
    return this._songName;
  }

  get duration(): number {
    return this._duration;
  }

  get genres(): GenresData[] {
    return this._genres;
  }

  get single(): boolean {
    return this._single;
  }

  get reproductions(): number {
    return this._reproductions;
  }
}
