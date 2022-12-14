import { Color, Coordinate } from "src/app/types/types";
import { checkCheck } from "src/utils/utils";
import { Board } from "./board.model";
import { King } from "./pieces/king.piece.model";
import { Pawn } from "./pieces/pawn.piece.model";
import { Piece } from "./pieces/piece.model";
import { Queen } from "./pieces/queen.piece.model";

export class Game {
  board: Board
  playerColor: Color = "white"
  computerColor: Color = "black"
  turn: Color = "white"
  ended: boolean = false
  winner: string | undefined

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
    if (checkCheck(this.board,"white")) {
      (this.board.getKing("white").piece! as King).checked = true
    } else if (checkCheck(this.board, "black")) {
      (this.board.getKing("black").piece! as King).checked = true
    }
    else {
      (this.board.getKing("black").piece! as King).checked = false;
      (this.board.getKing("white").piece! as King).checked = false;
    }
    this.endTurn()
    if (this.gameOver(this.turn)) {
      this.ended = true
      if (piece.color == this.computerColor) {
        this.winner = "Computer"
      } else {
        this.winner = "You"
      }
      return
    }
    if (piece.color != this.computerColor) {
      this.computerMove()
    }
  }

 computerMove() {
    setTimeout(() => {
      const moves = this.board.getPotentialMovesByColor(this.computerColor)
      const piece = moves[ Math.floor(Math.random() * moves.length)]
      const move = piece.moves[Math.floor(Math.random() * piece.moves.length)]
      this.movePiece(piece.piece, move.x, move.y)
    }, 1000)
  }

  endTurn() {
    if (this.turn == "white") {
      this.turn = "black"
    } else {
      this.turn = "white"
    }
  }

  gameOver(color: Color) {
    if (checkCheck(this.board, color)) {
      return this.board.getPotentialMovesByColor(this.computerColor).length == 0
    }
    return false
  }

}
