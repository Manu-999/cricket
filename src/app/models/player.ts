import { Points } from './points';

export class Player {
  public id: number;
  public name: string;
  public closed: Points;
  public active: boolean;
  public points: number;
  public winner: boolean;

  constructor(
    id: number,
    name: string,
    closed: Points,
    active: boolean,
    points: number = 0,
    winner: boolean = false
  ) {
    (this.id = id),
      (this.name = name),
      (this.closed = closed),
      (this.active = active),
      (this.points = points),
      (this.winner = winner);
  }
}
