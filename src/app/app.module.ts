import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { CellComponent } from './components/cell/cell.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { GameOverComponent } from './components/game-over/game-over.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CellComponent,
    MainScreenComponent,
    GameOverComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
