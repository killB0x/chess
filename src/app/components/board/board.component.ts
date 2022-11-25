import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Cell } from 'src/model/cell.model';
import { Game } from 'src/model/game.model';
import { King } from 'src/model/pieces/king.piece.model';
import { checkCheck } from 'src/utils/utils';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  game: Game = new Game("white")
  lastActiveCell: Cell | undefined

  constructor(private eventService: EventsService) { }

  showPotentialMoves(cell:Cell) {
    if (cell.piece!.color == this.game.playerColor &&
      this.game.turn == this.game.playerColor) {
      this.lastActiveCell = cell
      cell.focused = true
      this.game.board.updateCellPotentialMove(cell)
    }
  }

  movePiece(cell:Cell) {
    if (this.lastActiveCell) {
        this.game.movePiece(this.lastActiveCell.piece!, cell.x, cell.y)
    }

  }


  ngOnInit(): void {
  }

  ngOnChanges() {

  }
}
