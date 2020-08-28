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
  constructor() {}

  addPlayer(name: string): void {
    if (this.players.length === 0) {
      this.players.push(new Player(name, new Points(), true));
    } else {
      this.players.push(new Player(name, new Points(), false));
    }
    console.log(this.players);
  }

  newGame(rounds) {
    this.game = new Game(rounds, this.players);
    console.log(this.game);
  }

  addPoints(points: object): void {}
}
