import { Color } from "src/app/types/types";
import { Board } from "./board.model";
import { Piece } from "./pieces/piece.model";

export class Game {
  board: Board

  constructor (playerColor: Color) {
    this.board = new Board()
    this.board.initializeBoard(playerColor)
  }

  movePiece (piece: Piece, x:number, y:number) {
    this.board.getCells()[piece.y][piece.x].piece = undefined
    piece.x = x
    piece.y = y
    this.board.getCells()[y][x].piece = piece
  }


}
