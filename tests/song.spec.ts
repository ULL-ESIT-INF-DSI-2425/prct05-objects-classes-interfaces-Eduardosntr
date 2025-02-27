import { describe, test, expect } from "vitest";
import { Song } from "../src/ejercicio-2/song";
import { GenresData } from "../src/ejercicio-2/interfaces";

describe("Test clase Song", () => {
  const song = new Song("Kassandra", 120, [GenresData.Reggaeton], false, 20);
  test("Test the name", () => {
    expect(song.songName).toBe("Kassandra");
  });

  test("Test the duration", () => {
    expect(song.duration).toBe(120);
  });

  test("Test the genres", () => {
    expect(song.genres).toStrictEqual([GenresData.Reggaeton]);
  });

  test("If the song is a single", () => {
    expect(song.isSingle).toBe(false);
  });
});
