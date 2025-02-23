import { describe, test, expect } from "vitest";
import {
  ArtistData,
  DiscographyData,
  GenresData,
  SongData,
} from "../src/ejercicio-2";

describe("Test iniciales Ejercicio 2", () => {
  const GranVia: SongData = {
    name: "Gran Via",
    duration: 130,
    genre: [GenresData.Reggaeton],
    single: false,
    reproductions: 200000,
  };

  const BuenasNoches: DiscographyData = {
    name: "Buenas noches",
    year: 2024,
    songs: [GranVia],
  };

  const artist1: ArtistData = {
    name: "Quevedo",
    listeners: 20000,
    discography: [BuenasNoches],
  };
  test("Test the name", () => {
    expect(artist1.name).toBe("Quevedo");
  });
  test("Test the discography", () => {
    expect(artist1.discography).toStrictEqual([BuenasNoches]);
  });
  test("Test the discography song name", () => {
    expect(artist1.discography[0].name).toBe("Buenas noches");
  });
});
