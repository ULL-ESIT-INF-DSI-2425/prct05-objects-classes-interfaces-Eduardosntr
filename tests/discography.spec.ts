import { describe, test, expect } from "vitest";
import { Song } from "../src/ejercicio-2/song";
import { GenresData } from "../src/ejercicio-2/interfaces";
import { Album, Episode } from "../src/ejercicio-2/discography";

describe("Test iniciales Ejercicio 2", () => {
  const buenasNochesSongs: Song[] = [
    new Song("Kassandra", 120, [GenresData.Reggaeton], false, 20),
    new Song("Halo", 230, [GenresData.Reggaeton], false, 20),
    new Song("lA 125", 240, [GenresData.Reggaeton], false, 200),
    new Song("14 febrero", 300, [GenresData.Reggaeton], false, 300),
  ];

  const BuenasNochesAlbum = new Episode(
    "Buenas Noches",
    2025,
    buenasNochesSongs,
  );

  test("Test the name", () => {
    expect(BuenasNochesAlbum.discographyName).toBe("Buenas Noches");
  });

  test("Test the duration", () => {
    expect(BuenasNochesAlbum.year).toBe(2025);
  });

  test("Test the song list", () => {
    expect(BuenasNochesAlbum.songs).toStrictEqual(buenasNochesSongs);
  });

  test("Test the number of song", () => {
    expect(BuenasNochesAlbum.songsNumber()).toBe(4);
  });

  test("Test the type of the Discography", () => {
    expect(BuenasNochesAlbum.type()).toBe("EP");
  });

  test("Test if the constructor throws an error", () => {
    expect(
      () => new Album("Buenas Noches", 2024, buenasNochesSongs),
    ).toThrowError("The album should have at least 8 songs");
  });

  test("Test if the year is correct", () => {
    expect(
      () => new Episode("Buenas Noches", 2027, buenasNochesSongs),
    ).toThrowError("The year date is incorrect");
  });
});
