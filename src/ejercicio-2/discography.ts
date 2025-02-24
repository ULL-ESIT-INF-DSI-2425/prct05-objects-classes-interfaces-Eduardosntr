import { DiscographyData } from "./interfaces";
import { Song } from "./song";

export function checkYear(year: number): boolean {
  let isYear = true;
  if (year < 1900 || year > 2026) {
    isYear = false;
  }
  return isYear;
}

/**
 * Class that implements a Discography
 */
export class Discography implements DiscographyData {
  /**
   * Constructor of the Discography Class
   * @param _name - Name of the discography
   * @param _year - Year of publication
   * @param _songs - List of the song in the discography
   */
  constructor(
    private _discographyName: string,
    private _year: number,
    private _songs: Song[],
  ) {
    if (checkYear(this.year)) {
      throw new Error("The year date is incorrect");
    }
    if (this.songs.length <= 0) {
      throw new Error("The discography should have at least one song");
    }
  }

  get discographyName() {
    return this._discographyName;
  }

  get year() {
    return this._year;
  }

  get songs() {
    return this._songs;
  }
}
