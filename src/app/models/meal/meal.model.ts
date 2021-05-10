import { BaseModel } from '../base.model';
import { Dish } from '../dish/dish.model';
import { Ingredient } from '../ingredient/ingredient.model';
export enum MealCategory {
  FULL,
  LIGHT,
  SNACK,
}

export class Meal extends BaseModel {
  public readonly category: MealCategory;
  public readonly dishes: Dish[];

  constructor(data: any = {}) {
    super(data);
    Object.assign(this, data);
    this.dishes = this.dishes ? this.dishes.map((d) => new Dish(d)) : [];
  }
}
