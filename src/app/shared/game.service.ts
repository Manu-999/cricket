import { Injectable } from '@angular/core';
import { Points } from '../models/points';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public players: Player[];
  constructor() {}
}
