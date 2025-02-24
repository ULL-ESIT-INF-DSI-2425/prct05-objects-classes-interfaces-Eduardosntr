import { Artist } from "./artist";

/**
 * Class that represents a Song Library
 */
export class SongLibrary {
  constructor(private _artists: Artist[]) {}

  get artists() {
    return this._artists;
  }

  public getNumberOfSongs(albumName: string): number {
    let numberOfSongs = 0;
    this.artists.forEach((artist) => {
      artist.discographies.forEach((discography) => {
        if (discography.discographyName === albumName) {
          numberOfSongs = discography.songsNumber();
        }
      });
    });
    return numberOfSongs;
  }
}
