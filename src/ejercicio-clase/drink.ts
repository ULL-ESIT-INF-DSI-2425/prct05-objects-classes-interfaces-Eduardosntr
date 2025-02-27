import { Product } from "./product";

/**
 * Subclass that implements a Drink product
 */
export class Drink extends Product {
  /**
   * 
   * @param _id - The id of the drink
   * @param _name - The name of the drink
   * @param _nutricionalInfo - The nutricional info that the drink have
   * @param _nutriscore - The nutriscore of the drink
   * @param _milliliters - The milliliters of the drink  
   * @param _isSoda - True if is a Soda drink
   * @param _brand - The brand of the drink
   */
  constructor(    
    _id : number,
    _name: string, 
    _nutricionalInfo: string, 
    _nutriscore: string, 
    private _milliliters: number, 
    private _isSoda: boolean, 
    private _brand: string, 
  ){
    super(_id, _name, _nutricionalInfo, _nutriscore);
  }


  /**
   * Function that show the info of a Drink
   * @returns The information as string
   */
  showInfo(): string {
    return `ID: ${this.id}\n` +
    `Name: ${this.name}\n` +
    `Nutritional Info: ${this.nutricionalInfo}\n` +
    `Nutriscore: ${this.nutriscore}\n` +
    `Milliliters: ${this.milliliters}\n` +
    `Is Soda: ${this.isSoda}\n` +
    `Brand: ${this.brand}`;
  }

  /**
   * Get the milliliters of a drink
   */
  get milliliters() {
    return this._milliliters; 
  }

  /**
   * Get if a product is Soda or not
   */
  get isSoda() {
    return this._isSoda;
  }

  get brand() {
    return this._brand;
  }

  set milliliters(newMililiters: number) {
    this._milliliters = newMililiters;
  }

  set isSoda(isSoda) {
    this._isSoda = isSoda;
  }

  set brand(brand) {
    this._brand = brand;
  }
}