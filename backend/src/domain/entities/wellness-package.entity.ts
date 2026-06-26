export class WellnessPackage {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public price: number,
    public duration_minutes: number,
    public status: string,
  ) {}
}
