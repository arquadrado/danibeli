import { BaseModel } from '../base.model';

export enum IngredientCategory {
  FRUIT,
  VEGETABLE,
  DAIRY,
  WHITE_MEAT,
  RED_MEAT,
  FISH,
  FAT_FISH,
  OTHER,
}

export enum Allergenic {
  LACTOSE,
  GLUTEN,
  PEANUTS,
  SEAFOOD,
}

export class Ingredient extends BaseModel {
  public readonly category: IngredientCategory;
  public readonly knownAllergenics: Allergenic[];

  constructor(data: any = {}) {
    super(data);
    Object.assign(this, data);
  }
}
