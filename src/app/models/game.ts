import { Player } from './player';

export class Game {
  public rounds: number;
  public round: number;
  public players: Player[];
  public winner: string;

  constructor(
    rounds: number,
    players: Player[],
    round: number = 0,
    winner: string = null
  ) {
    (this.rounds = rounds),
      (this.players = players),
      (this.round = round),
      (this.winner = winner);
  }
}
