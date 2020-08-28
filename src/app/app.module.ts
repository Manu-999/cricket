import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoundComponent } from './components/round/round.component';
import { DartsComponent } from './components/darts/darts.component';
import { NextPlayerComponent } from './components/next-player/next-player.component';
import { DartboardComponent } from './components/dartboard/dartboard.component';
import { NewGameComponent } from './pages/new-game/new-game.component';
import { GameComponent } from './pages/game/game.component';
import { WinnerComponent } from './pages/winner/winner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    RoundComponent,
    DartsComponent,
    NextPlayerComponent,
    DartboardComponent,
    NewGameComponent,
    GameComponent,
    WinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
