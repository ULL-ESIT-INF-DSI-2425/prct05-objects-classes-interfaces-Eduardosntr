import { describe, test, expect } from "vitest";
import { Song } from "../../src/ejercicio-2/song";
import { GenresData } from "../../src/ejercicio-2/interfaces";
import { Episode } from "../../src/ejercicio-2/discography";
import { Artist } from "../../src/ejercicio-2/artist";

describe("Test class Artist", () => {
  const buenasNochesSongs: Song[] = [
    new Song("Kassandra", 120, [GenresData.Reggaeton], false, 20),
    new Song("Halo", 230, [GenresData.Reggaeton], false, 20),
    new Song("lA 125", 240, [GenresData.Reggaeton], false, 200),
    new Song("14 febrero", 300, [GenresData.Reggaeton], false, 300),
  ];

  const DondeQuieroEstarSongs: Song[] = [
    new Song("Donde Quiero Estar", 240, [GenresData.Reggaeton], false, 202),
    new Song("Yankee", 230, [GenresData.Reggaeton], false, 20),
    new Song("Dame", 240, [GenresData.Reggaeton], false, 2000),
    new Song("Wanda", 300, [GenresData.Reggaeton], false, 300),
  ];

  const BuenasNochesEp = new Episode("Buenas Noches", 2025, buenasNochesSongs);

  const DondeQuieroEstarEp = new Episode(
    "Donde Quiero Estar",
    2023,
    DondeQuieroEstarSongs,
  );

  const Quevedo = new Artist("Quevedo", 40000, [
    BuenasNochesEp,
    DondeQuieroEstarEp,
  ]);

  test("Test the name", () => {
    expect(Quevedo.artistName).toBe("Quevedo");
  });

  test("Test the duration", () => {
    expect(Quevedo.discographies).toStrictEqual([
      BuenasNochesEp,
      DondeQuieroEstarEp,
    ]);
  });

  test("Test the song list", () => {
    expect(Quevedo.listeners).toBe(40000);
  });

  test("Test if the constructor throws an error", () => {
    expect(
      () => new Artist("Quevedo", -1, [BuenasNochesEp, DondeQuieroEstarEp]),
    ).toThrowError("The number of listeners should be greater than 0");
  });

  test("Test if the year is correct", () => {
    expect(() => new Artist("Quevedo", 20000, [])).toThrowError(
      "The artist must have at least one discography",
    );
  });
});
