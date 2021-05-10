export class BaseModel {
  public readonly id: string;
  public readonly name: string;

  constructor(data: any = {}) {
    Object.assign(this, data);
  }
}
