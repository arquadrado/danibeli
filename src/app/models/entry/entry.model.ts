import { BaseModel } from '../base.model';
import { Moment } from 'moment';
import { Meal } from '../meal/meal.model';
import { Mood } from '../mood/mood.model';

export class Entry extends BaseModel {
  public readonly date: Moment;
  private readonly meals: Meal[];
  private readonly mood: Mood;
  constructor(data: any = {}) {
    super(data);
    Object.assign(this, data);
  }
}
