import { Component, OnInit } from '@angular/core';
import { GameService } from '../../shared/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public round: number;
  constructor(public game: GameService) {}

  ngOnInit(): void {}
}
