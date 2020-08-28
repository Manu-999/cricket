import { Component, OnInit } from '@angular/core';
import { GameService } from '../../shared/game.service';
import { Player } from 'src/app/models/player';

@Component({
  selector: 'app-dartboard',
  templateUrl: './dartboard.component.html',
  styleUrls: ['./dartboard.component.scss'],
})
export class DartboardComponent implements OnInit {
  public players: Player[];

  constructor(public game: GameService) {}

  ngOnInit(): void {
    this.players = this.game.players;
  }
}
