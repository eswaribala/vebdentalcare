export class Treatment{

  private _treatmentId:number;
  private _treatmentType:string;
  private _treatmentCost:number;


  constructor(treatmentId: number, treatmentType: string, treatmentCost: number) {
    this._treatmentId = treatmentId;
    this._treatmentType = treatmentType;
    this._treatmentCost = treatmentCost;
  }

  get treatmentId(): number {
    return this._treatmentId;
  }

  set treatmentId(value: number) {
    this._treatmentId = value;
  }

  get treatmentType(): string {
    return this._treatmentType;
  }

  set treatmentType(value: string) {
    this._treatmentType = value;
  }

  get treatmentCost(): number {
    return this._treatmentCost;
  }

  set treatmentCost(value: number) {
    this._treatmentCost = value;
  }
}
