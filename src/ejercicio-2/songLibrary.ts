import { Artist } from "./artist";
import { TableData } from "./interfaces";

/**
 * Class that represents a Song Library
 */
export class SongLibrary {
  /**
   *
   * @param _artists - The array of artist that belongs in the song library
   */
  constructor(private _artists: Artist[]) {}

  get artists() {
    return this._artists;
  }

  /**
   * Function that show the info of a SongLibrary
   */
  public showInformation() {
    const tableData: TableData[] = [];
    this.artists.forEach((artist) => {
      artist.discographies.forEach((discography) => {
        discography.songs.forEach((song) => {
          tableData.push({
            artistName: artist.artistName,
            discographyName: discography.discographyName,
            songName: song.songName,
            duration: song.duration,
            reproductions: song.reproductions,
          });
        });
      });
    });
    console.table(tableData);
  }

  /**
   * Function that search info into the SongLibrary
   */
  public search(query: string): TableData[] {
    const tableData: TableData[] = [];
    this.artists.forEach((artist) => {
      artist.discographies.forEach((discography) => {
        discography.songs.forEach((song) => {
          if (
            artist.artistName.includes(query) ||
            discography.discographyName.includes(query) ||
            song.songName.includes(query)
          ) {
            tableData.push({
              artistName: artist.artistName,
              discographyName: discography.discographyName,
              songName: song.songName,
              duration: song.duration,
              reproductions: song.reproductions,
            });
          }
        });
      });
    });
    return tableData;
  }

  /**
   * Function that returns the number of songs of an album
   */
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

  /**
   * Function that return the duration of an album
   */
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

  /**
   * Function that returns the total reproductions of an album
   */
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
