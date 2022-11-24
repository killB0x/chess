import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/types/types';
import { Board } from 'src/model/board.model';
import { Cell } from 'src/model/cell.model';
import { Game } from 'src/model/game.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  game: Game = new Game("white")
  lastActiveCell: Cell | undefined

  constructor() { }

  showPotentialMoves(cell:Cell) {
    this.lastActiveCell = cell
    this.game.board.updateCellPotentialMove(cell)
  }

  movePiece(cell:Cell) {
    console.log("MOVEW?", cell)
    if (this.lastActiveCell) {
      console.log("MOVE")
      this.game.movePiece(this.lastActiveCell.piece!, cell.x, cell.y)
    }
  }

  ngOnInit(): void {
  }

}
