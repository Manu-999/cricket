import { Points } from './points';

export class Player {
  public name: string;
  public points: Points;
  public winner: boolean;

  constructor(name: string, points: Points, winner: boolean = false) {
    (this.name = name), (this.points = points), (this.winner = winner);
  }
}
