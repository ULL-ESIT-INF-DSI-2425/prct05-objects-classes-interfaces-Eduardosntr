import { DiscographyData } from "./interfaces";
import { Song } from "./song";

/**
 * Function that checks if a year is correctly defined
 * @param year - The year to check
 * @returns If the date is correct return true, if not return false
 */
export function checkYear(year: number): boolean {
  let isYear = true;
  if (year < 1900 || year > 2026) {
    isYear = false;
  }
  return isYear;
}

/**
 * Abtract class that implements a Discography
 */
export abstract class Discography implements DiscographyData {
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
    if (!checkYear(this.year)) {
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

  public songsNumber() {
    return this.songs.length;
  }

  public showInformation(): void {
    console.table([this]);
  }

  abstract type(): string;
}

/**
 * The extension of the class Discography that implements the Album
 */
export class Album extends Discography {
  /**
   * Constructor of the Discography Class
   * @param _name - Name of the discography
   * @param _year - Year of publication
   * @param _songs - List of the song in the discography
   */
  constructor(discographyName: string, year: number, songs: Song[]) {
    if (songs.length < 8) {
      throw new Error("The album should have at least 8 songs");
    }
    super(discographyName, year, songs);
  }

  public type(): string {
    return "Album";
  }
}

/**
 * The extension of the class Discograpy that implements the EP
 */
export class Episode extends Discography {
  /**
   * Constructor of the Discography Class
   * @param _name - Name of the discography
   * @param _year - Year of publication
   * @param _songs - List of the song in the discography
   */
  constructor(discographyName: string, year: number, songs: Song[]) {
    if (songs.length >= 8) {
      throw new Error("The EP should have maximum 7 songs");
    }
    super(discographyName, year, songs);
  }

  public type(): string {
    return "EP";
  }
}
