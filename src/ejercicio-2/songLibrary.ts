import { Artist } from "./artist";

/**
 * Class that represents a Song Library
 */
export class SongLibrary {
  constructor(private _artists: Artist[]) {}

  get artists() {
    return this._artists;
  }

  public showInformation() {
    console.table(this);
  }

  public numberOfSongs(albumName: string): number {
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

  public albumDuration(albumName: string): number {
    let duration = 0;
    this.artists.forEach((artist) => {
      artist.discographies.forEach((discography) => {
        if (discography.discographyName == albumName) {
          discography.songs.forEach((song) => {
            duration += song.duration;
          });
        }
      });
    });
    return duration;
  }

  public albumReproductions(albumName: string): number {
    let reproductions = 0;
    this.artists.forEach((artist) => {
      artist.discographies.forEach((discography) => {
        if (discography.discographyName == albumName) {
          discography.songs.forEach((song) => {
            reproductions += song.reproductions;
          });
        }
      });
    });
    return reproductions;
  }
}
