import { ArtistData } from "./interfaces";
import { Discography } from "./discography";

export class Artist implements ArtistData {
  constructor(
    private _artistName: string,
    private _listeners: number,
    private _discographies: Discography[],
  ) {
    if (this.listeners < 0) {
      throw new Error("The number of listeners should be greater than 0");
    }
    if (this.discographies.length <= 0) {
      throw new Error("The artist must have at least one discography");
    }
  }

  get artistName() {
    return this._artistName;
  }

  get listeners() {
    return this._listeners;
  }

  get discographies() {
    return this._discographies;
  }
}
