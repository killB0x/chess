import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/types/types';
import { Board } from 'src/model/board.model';
import { Cell } from 'src/model/cell.model';
import { Game } from 'src/model/game.model';
import { checkCheck } from 'src/utils/utils';

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
    if (this.lastActiveCell) {
      this.game.movePiece(this.lastActiveCell.piece!, cell.x, cell.y)
      console.log("CHECK?", checkCheck(this.game.board, "white"))
    }
  }

  ngOnInit(): void {
  }

}
