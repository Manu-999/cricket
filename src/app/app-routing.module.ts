import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewGameComponent } from './pages/new-game/new-game.component';
import { GameComponent } from './pages/game/game.component';
import { WinnerComponent } from './pages/winner/winner.component';

const routes: Routes = [
  { path: '', component: NewGameComponent },
  { path: 'game', component: GameComponent },
  { path: 'winner', component: WinnerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
