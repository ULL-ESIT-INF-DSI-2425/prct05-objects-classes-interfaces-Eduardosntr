import { Food } from "./food";
import { Drink } from "./drink";
import { Product } from "./product";

/**
 * Interface with the numebr of list 
 */
export interface List {
  numberofProducts: number, 
}

/**
 * Interfce with a foodList
 */
export interface FoodList extends List {
  foodProduct: Food
}

/**
 * Interface with a drinkList
 */
export interface DrinkList extends List {
  drinkProduct: Drink
}


/**
 * Class Frigde that implements a fridge 
 */
export class Fridge {
  /**
   * 
   * @param _foods - List of products 
   * @param _drinks - List of drinks
   * @param _shoopingList - Shopping list
   */
  constructor(
    private _foods: FoodList[], 
    private _drinks: DrinkList[],
    private _shoopingList: Product[], 
  ){}

  /**
   * Get the foods of a fridge
   */
  get foods() {
    return this._foods;
  }

  get drinks() {
    return this._drinks; 
  }

  public numberOfFoods() : number {
    return this.foods.length;
  }

  public numberOfDrinks() : number {
    return this.drinks.length;
  }
}