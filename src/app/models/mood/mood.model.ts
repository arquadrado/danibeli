import { BaseModel } from '../base.model';
export enum MoodType {
  DISTEMPER,
  ACHE,
  WELL_BEING,
}

export enum MoodIntensity {
  VERY_LOW,
  LOW,
  MEDIUM,
  HIGH,
  VERY_HIGH,
  EXTREME,
}

export class Mood extends BaseModel {
  public readonly type: MoodType;
  public readonly intensity: MoodIntensity;
  constructor(data: any = {}) {
    super(data);
    Object.assign(this, data);
  }
}
