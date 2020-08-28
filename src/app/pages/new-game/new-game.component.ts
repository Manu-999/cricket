import { Component, OnInit } from '@angular/core';
import { GameService } from '../../shared/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss'],
})
export class NewGameComponent implements OnInit {
  public rounds: number;
  constructor(public game: GameService, public router: Router) {}

  ngOnInit(): void {}

  selectRounds(rounds) {
    this.rounds = rounds;
    console.log(this.rounds);
  }

  newPlayer(name: string) {
    this.game.addPlayer(name);
  }

  newGame() {
    this.game.newGame(this.rounds);
    this.router.navigate(['game']);
  }
}
