import { Component, OnInit } from '@angular/core';
import { GameService } from '../../shared/game.service';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss'],
})
export class RoundComponent implements OnInit {
  public round: number;
  constructor(public game: GameService) {}

  ngOnInit(): void {
    this.round = this.game.round;
  }
}
