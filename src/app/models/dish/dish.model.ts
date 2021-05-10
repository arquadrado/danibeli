import { BaseModel } from '../base.model';
import { Ingredient } from '../ingredient/ingredient.model';

export class Dish extends BaseModel {
  public readonly ingredients: Ingredient[];
  constructor(data: any = {}) {
    super(data);
    Object.assign(this, data);
    this.ingredients = this.ingredients
      ? this.ingredients.map((i) => new Ingredient(i))
      : [];
  }
}
