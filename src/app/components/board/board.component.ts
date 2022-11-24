import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/types/types';
import { Board } from 'src/model/board.model';
import { Game } from 'src/model/game.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board: Board = new Board()
  game: Game = new Game("white")

  constructor() { }

  ngOnInit(): void {
  }

}
