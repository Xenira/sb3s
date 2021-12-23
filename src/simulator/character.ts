
export abstract class Character {
  abstract art: string;
  abstract name: string;
  abstract baseAttack: number;
  abstract baseHealth: number;
  golden = false;

  public get attack() : number {
    return this.baseAttack
  }
  public get health() : number {
    return this.baseHealth
  }

}
