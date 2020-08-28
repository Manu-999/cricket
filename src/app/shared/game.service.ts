import { Injectable } from '@angular/core';
import { Points } from '../models/points';
import { Player } from '../models/player';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public players: Player[] = [];
  public game: Game;
  public round: number = 1;
  constructor() {}

  addPlayer(name: string): void {
    if (this.players.length === 0) {
      this.players.push(new Player(1, name, new Points(), true));
    } else {
      let id = this.players[0].id + 1;
      this.players.push(new Player(id, name, new Points(), false));
    }
    console.log(this.players);
  }

  newGame(rounds): void {
    this.game = new Game(rounds, this.players);
    console.log(this.game);
  }

  addPoints(points: object): void {}

  nextPlayer(): void {}
}
