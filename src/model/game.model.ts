import { Color } from "src/app/types/types";
import { Board } from "./board.model";
import { Pawn } from "./pieces/pawn.piece.model";
import { Piece } from "./pieces/piece.model";
import { Queen } from "./pieces/queen.piece.model";

export class Game {
  board: Board
  turn: Color = "white"
  playerColor: Color = "white"

  constructor (playerColor: Color) {
    this.board = new Board()
    this.board.initializeBoard(playerColor)
    this.playerColor = playerColor
  }

  movePiece (piece: Piece, x:number, y:number,) {
    this.board.getCells()[piece.y][piece.x].piece = undefined
    piece.x = x
    piece.y = y
    if (piece instanceof Pawn && (y == 0 || y == 7)) {
      this.board.getCells()[y][x].piece = new Queen(piece.color,x,y,"queen", this.playerColor == piece.color)
    } else {
      this.board.getCells()[y][x].piece = piece
    }
  }

  endTurn() {
    if (this.turn == "white") {
      this.turn = "black"
    } else {
      this.turn = "white"
    }
  }


}
