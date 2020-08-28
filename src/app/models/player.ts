import { Points } from './points';

export class Player {
  public name: string;
  public closed: Points;
  public points: number;
  public active: boolean;
  public winner: boolean;

  constructor(
    name: string,
    closed: Points,
    active: boolean,
    points: number = 0,
    winner: boolean = false
  ) {
    (this.name = name),
      (this.closed = closed),
      (this.active = active),
      (this.points = points),
      (this.winner = winner);
  }
}
