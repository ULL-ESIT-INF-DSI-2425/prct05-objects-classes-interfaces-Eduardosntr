import { Artist } from "./artist";
import { Discography } from "./discography";

/**
 * Class that represents a Song Library
 */
export class SongLibrary {
  constructor(
    private _artists: Artist[],
    private _discographies: Discography[],
  ) {}

  get artists() {
    return this._artists;
  }

  get discographies() {
    return this._discographies;
  }

  public getNumberOfSongs(albumName: string): number {
    let numberOfSongs = 0;
    this.discographies.forEach((discography) => {
      if (discography.discographyName === albumName) {
        numberOfSongs = discography.songsNumber();
      }
    });
    return numberOfSongs;
  }
}
