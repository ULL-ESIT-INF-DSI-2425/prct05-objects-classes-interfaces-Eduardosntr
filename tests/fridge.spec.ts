import { describe, test, expect } from "vitest";
import { Food } from "../src/ejercicio-clase/food";
// import { Drink } from "../src/ejercicio-clase/drink";
//import { FoodList, Fridge } from "../src/ejercicio-clase/fridge"

describe("Test clase Drink", () => {
  const Manzana = new Food(1, "Manzana", "Fruta roja", "A", 20, false, 30)
  //const Agua = new Drink(1, "Agua", "Bebida manantial", "A", 150, false, "Fonteide")

  // const Manzanas: FoodList = {
    
  // }
  
  // const fridge = new Fridge([Manzana], )
  
  test("Test the list of drinks", () => {
    expect(Manzana.id).toBe(1);
  });

  test("Test the name", () => {
    expect(Manzana.name).toBe("Manzana");
  });

  test("Test the nutricional information", () => {
    expect(Manzana.nutricionalInfo).toBe("Fruta roja");
  });

  test("Test the nutriscore", () => {
    expect(Manzana.nutriscore).toBe("A");
  });

  test("Test the number of grams", () => {
    expect(Manzana.grams).toBe(20);
  });

  test("Test the expired date of the food", () => {
    expect(Manzana.isExpired).toBe(false);
  });

  test("Test the number of proteins of the food", () => {
    expect(Manzana.proteinsNumber).toBe(30);
  });

  test("Test the new number of proteins of the food", () => {
    Manzana.proteinsNumber = 50;
    expect(Manzana.proteinsNumber).toBe(50);
  });

  test("Test the new number of proteins of the food", () => {
    Manzana.proteinsNumber = 50;
    expect(Manzana.proteinsNumber).toBe(50);
  });

  test("Test the new number of proteins of the food", () => {
    Manzana.proteinsNumber = 50;
    expect(Manzana.proteinsNumber).toBe(50);
  });

  test("Test the showInfo method", () => {
    const expectedInfo = `ID: 1\n` +
                         `Name: Manzana\n` +
                         `Nutritional Info: Fruta roja\n` +
                         `Nutriscore: A\n` +
                         `Grams: 20\n` +
                         `Expired: false\n` +
                         `Proteins: 50`;
    expect(Manzana.showInfo()).toBe(expectedInfo);
  });
});