import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Cell } from 'src/model/cell.model';
import { Game } from 'src/model/game.model';
import { checkCheck } from 'src/utils/utils';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  game: Game = new Game("black")
  lastActiveCell: Cell | undefined

  constructor(private eventService: EventsService) { }

  showPotentialMoves(cell:Cell) {
    this.lastActiveCell = cell
    this.game.board.updateCellPotentialMove(cell)
    this.checkCheckAfterEvent()
  }

  movePiece(cell:Cell) {
    if (this.lastActiveCell) {
      this.game.movePiece(this.lastActiveCell.piece!, cell.x, cell.y)
      this.checkCheckAfterEvent()
    }
  }

  checkCheckAfterEvent() {
    if (checkCheck(this.game.board,"white")) {
      this.eventService.fireSetCheck(this.game.board.getKing("white").piece!)
    } else if (checkCheck(this.game.board, "black")) {
      this.eventService.fireSetCheck(this.game.board.getKing("black").piece!)
    }
    else {
      this.eventService.fireRemoveCheck()
    }
  }

  ngOnInit(): void {
  }

}
