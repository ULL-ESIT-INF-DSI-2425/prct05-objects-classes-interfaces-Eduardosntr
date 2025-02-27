/**
 * Class Foodstuff that implements the common atributes of a Drink or a Food
 */
export abstract class Product {
  /**
   * 
   * @param _id - The id of the product
   * @param _name - The name of the product
   * @param _nutricionalInfo - The nutricional info that the product have
   * @param _nutriscore - The nutriscore of the product
   */
  constructor(
    private _id : number,
    private _name: string, 
    private _nutricionalInfo: string, 
    private _nutriscore: string, 
  ) {}

  /**
   * Get the id of a product
   */
  get id() {
    return this._id;
  }

  /**
   * Get the name of a product 
   */
  get name() {
    return this._name;
  }

  /**
   * Get the nutricionalInfo of a product
   */
  get nutricionalInfo() {
    return this._nutricionalInfo;
  }

  /**
   *  Get the nutriscore of a product
   */
  get nutriscore() {
    return this._nutriscore;
  }

  /** 
   * Set the id of a product 
   */
  set id(newId: number) {
    this._id = newId;
  }

  /**
   * Set the name of a product
   */
  set name(newName: string) {
    this._name = newName;
  }

  /**
   * Set nutricionalInfo of a product 
   */
  set nutricionalInfo(newNutritonialInfo: string) {
    this._nutricionalInfo = newNutritonialInfo;
  }

  /**
   * Set the nutriscore of a product
   */
  set nutriscore(newNutriscore: string) {
    this._nutriscore = newNutriscore;
  }

  /**
   * Abstrac function that show the info of a product
   */
  abstract showInfo(): string;
}