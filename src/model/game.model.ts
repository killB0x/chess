import { Color, Coordinate } from "src/app/types/types";
import { Board } from "./board.model";
import { Pawn } from "./pieces/pawn.piece.model";
import { Piece } from "./pieces/piece.model";
import { Queen } from "./pieces/queen.piece.model";

export class Game {
  board: Board
  playerColor: Color = "white"
  computerColor: Color = "black"

  constructor (playerColor: Color) {
    this.board = new Board()
    this.board.initializeBoard(playerColor)
    this.playerColor = playerColor
    if (this.playerColor == "white") {
      this.computerColor = "black"
    } else {
      this.computerColor = "white"
    }
  }

  movePiece (piece: Piece, x:number, y:number) {
    this.board.getCells()[piece.y][piece.x].piece = undefined
    piece.x = x
    piece.y = y
    if (piece instanceof Pawn && (y == 0 || y == 7)) {
      this.board.getCells()[y][x].piece = new Queen(piece.color,x,y,"queen", this.playerColor == piece.color)
    } else {
      this.board.getCells()[y][x].piece = piece
    }
    if (piece.color != this.computerColor) {
      this.computerMove()
    }
  }

  computerMove() {
    const moves = this.board.getPotentialMovesByColor(this.computerColor)
    const piece = moves[ Math.floor(Math.random() * moves.length)]
    const move = piece.moves[Math.floor(Math.random() * piece.moves.length)]
    console.log("Computer move")
    this.movePiece(piece.piece, move.x, move.y)
  }


}
