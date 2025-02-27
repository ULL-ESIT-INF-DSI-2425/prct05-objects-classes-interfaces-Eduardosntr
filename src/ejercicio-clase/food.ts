import { Product } from "./product";

/**
 * Subclass that implements a Food product
 */
export class Food extends Product {
  /**
   * Constructor of the class food
   * @param _id - The id of the food
   * @param _name - The name of the food
   * @param _nutricionalInfo - The nutricional info that the food have
   * @param _nutriscore - The nutriscore of the food
   * @param _grams - The weight of the food
   * @param _isExpired - True if the food is expired
   * @param _proteinsNumber - The number of proteins
   */
  constructor(    
    _id : number,
    _name: string, 
    _nutricionalInfo: string, 
    _nutriscore: string, 
    private _grams: number,  
    private _isExpired: boolean, 
    private _proteinsNumber: number, 
  ){
    super(_id, _name, _nutricionalInfo, _nutriscore);
  }

  /**
   * Function that show the info of a Food
   * @returns The information as string
   */
  public showInfo(): string {
    return `ID: ${this.id}\n` +
           `Name: ${this.name}\n` +
           `Nutritional Info: ${this.nutricionalInfo}\n` +
           `Nutriscore: ${this.nutriscore}\n` +
           `Grams: ${this.grams}\n` +
           `Expired: ${this.isExpired}\n` +
           `Proteins: ${this.proteinsNumber}`;
  }

  /**
   * Get the grams of a product
   */
  get grams() {
    return this._grams;
  }

  /**
   * Get if a food is expired
   */
  get isExpired() {
    return this._isExpired;
  }

  /**
   * Get the proteins number
   */
  get proteinsNumber() {
    return this._proteinsNumber;
  }

  set grams(newGrams: number) {
    this._grams = newGrams;
  }

  /**
   * Set if the food is expired or not
   */
  set isExpired(isExpired: boolean) {
    this._isExpired = isExpired;
  } 

  /**
   * Set the proteins number of a food
   */
  set proteinsNumber(newProteinsNumber: number) {
    this._proteinsNumber = newProteinsNumber;
  } 
}