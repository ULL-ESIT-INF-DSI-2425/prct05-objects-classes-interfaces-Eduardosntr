import { describe, test, expect } from "vitest";
import {
  ArtistData,
  DiscographyData,
  SongData,
  GenresData,
} from "../src/ejercicio-2/interfaces";

describe("Test iniciales Ejercicio 2", () => {
  const GranVia: SongData = {
    songName: "Gran Via",
    duration: 130,
    genres: [GenresData.Reggaeton],
    isSingle: false,
    reproductions: 200000,
  };

  const BuenasNoches: DiscographyData = {
    discographyName: "Buenas noches",
    year: 2024,
    songs: [GranVia],
  };

  const artist1: ArtistData = {
    artistName: "Quevedo",
    listeners: 20000,
    discographies: [BuenasNoches],
  };
  test("Test the name", () => {
    expect(artist1.artistName).toBe("Quevedo");
  });
  test("Test the discography", () => {
    expect(artist1.discographies).toStrictEqual([BuenasNoches]);
  });
  test("Test the discography song name", () => {
    expect(artist1.discographies[0].discographyName).toBe("Buenas noches");
  });
});
