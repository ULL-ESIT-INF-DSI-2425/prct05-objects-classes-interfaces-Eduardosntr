import { describe, test, expect } from "vitest";
import { Drink } from "../src/ejercicio-clase/drink";

describe("Test clase Drink", () => {
  const Agua = new Drink(1, "Agua", "Bebida manantial", "A", 150, false, "Fonteide")
  test("Test the id", () => {
    expect(Agua.id).toBe(1);
  });

  test("Test the name", () => {
    expect(Agua.name).toBe("Agua");
  });

  test("Test the nutricional information", () => {
    expect(Agua.nutricionalInfo).toBe("Bebida manantial");
  });

  test("Test the nutriscore", () => {
    expect(Agua.nutriscore).toBe("A");
  });

  test("Test the numnber of millileters", () => {
    expect(Agua.milliliters).toBe(150);
  });

  test("Test the drink is soda or not", () => {
    expect(Agua.isSoda).toBe(false);
  });

  test("Test the drink brand", () => {
    expect(Agua.brand).toBe("Fonteide");
  });

  test("Test the drink brand", () => {
    Agua.brand = "Lanjaron";
    expect(Agua.brand).toBe("Lanjaron");
  });

  test("Test the showInfo method", () => {
    const expectedInfo = `ID: 1\n` +
                         `Name: Agua\n` +
                         `Nutritional Info: Bebida manantial\n` +
                         `Nutriscore: A\n` +
                         `Milliliters: 150\n` +
                         `Is Soda: false\n` +
                         `Brand: Lanjaron`;
    expect(Agua.showInfo()).toBe(expectedInfo);
  });
});