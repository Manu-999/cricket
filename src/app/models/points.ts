export class Points {
  public twenty: number;
  public nineteen: number;
  public eighteen: number;
  public seventeen: number;
  public sixteen: number;
  public fifteen: number;
  public bull: number;

  constructor(
    twenty: number = 0,
    nineteen: number = 0,
    eighteen: number = 0,
    seventeen: number = 0,
    sixteen: number = 0,
    fifteen: number = 0,
    bull: number = 0
  ) {
    (this.twenty = twenty),
      (this.nineteen = nineteen),
      (this.eighteen = eighteen),
      (this.seventeen = seventeen),
      (this.sixteen = sixteen),
      (this.fifteen = fifteen),
      (this.bull = bull);
  }
}
