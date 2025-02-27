import { describe, test, expect } from "vitest";
import { Song } from "../../src/ejercicio-2/song";
import { GenresData } from "../../src/ejercicio-2/interfaces";
import { Episode } from "../../src/ejercicio-2/discography";
import { Artist } from "../../src/ejercicio-2/artist";
import { SongLibrary } from "../../src/ejercicio-2/songLibrary";

describe("Song Library Tests", () => {
  const buenasNochesSongs: Song[] = [
    new Song("Kassandra", 120, [GenresData.Reggaeton], false, 20),
    new Song("Halo", 230, [GenresData.Reggaeton], false, 20),
    new Song("lA 125", 240, [GenresData.Reggaeton], false, 200),
    new Song("14 febrero", 300, [GenresData.Reggaeton], false, 300),
  ];

  const DondeQuieroEstarSongs: Song[] = [
    new Song("Donde Quiero Estar", 240, [GenresData.Reggaeton], false, 10),
    new Song("Yankee", 230, [GenresData.Reggaeton], false, 10),
    new Song("Dame", 240, [GenresData.Reggaeton], false, 10),
    new Song("Wanda", 300, [GenresData.Reggaeton], false, 10),
  ];

  const dtmfSongs: Song[] = [
    new Song("dtmf", 240, [GenresData.Reggaeton], false, 202),
    new Song("Baile Inolvidable", 230, [GenresData.Reggaeton], false, 20),
    new Song("Velda", 240, [GenresData.Reggaeton], false, 2000),
    new Song("Nuevayol", 300, [GenresData.Latin], false, 300),
  ];

  const BuenasNoches = new Episode("Buenas Noches", 2024, buenasNochesSongs);

  const DondeQuieroEstar = new Episode(
    "Donde Quiero Estar",
    2023,
    DondeQuieroEstarSongs,
  );

  const dtmf = new Episode("dtmf", 2025, dtmfSongs);

  const Quevedo = new Artist("Quevedo", 40000, [
    BuenasNoches,
    DondeQuieroEstar,
  ]);

  const BadBunny = new Artist("Bad Bunny", 40000, [dtmf]);

  const Spotify = new SongLibrary([Quevedo, BadBunny]);

  test("Test if the artist are correct", () => {
    expect(Spotify.artists).toStrictEqual([Quevedo, BadBunny]);
  });

  test("Test if the method that counts the songs of an album or ep are correct", () => {
    expect(Spotify.numberOfSongs("dtmf")).toBe(4);
  });

  test("Test if the method that counts the songs of an album or ep are correct", () => {
    expect(Spotify.numberOfSongs("Donde Quiero Estar")).toBe(4);
  });

  test("Test if the method that gets the duration of an album or ep is correct", () => {
    expect(Spotify.albumDuration("Donde Quiero Estar")).toBe(1010);
  });

  test("Test if the method that gets the number or reprodocutions of an album or ep is correct", () => {
    expect(Spotify.albumReproductions("Donde Quiero Estar")).toBe(40);
  });
});
