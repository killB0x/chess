import { Color, pieceType, xCoordinate, yCoordinate } from "src/app/types/types";
import { Cell } from "./cell.model";
import { Bishop } from "./pieces/bishop.piece.model";
import { King } from "./pieces/king.piece.model";
import { Knight } from "./pieces/knight.piece.model";
import { Pawn } from "./pieces/pawn.piece.model";
import { Piece } from "./pieces/piece.model";
import { Queen } from "./pieces/queen.piece.model";
import { Rook } from "./pieces/rook.piece.model";

export class Board {
  BOARD_SIZE = 8
  board: Cell[][] = []

  constructor () {
    let currentColor = "white"
    for (let i = 1; i <= 8; i++) {
      let currentRow: Cell[] = []
      for (let j = 1; j <= 8; j++) {
        currentRow.push(new Cell(
          currentColor as Color))
        if (j == this.BOARD_SIZE) {
          continue
        }
        if (currentColor === "white") {
          currentColor = "black"
        } else {
          currentColor = "white"
        }
      }
      this.board.push(currentRow)
    }
  }

  public initializeBoard(playerColor: Color) {
    //display entire board for readability
    const board_layout = [
      ["rook"  ,"knight" ,"bishop" ,"queen" ,"king"  ,"bishop" ,"knight" ,"rook" ],
      ["pawn"  ,"pawn"   ,"pawn"   ,"pawn"  ,"pawn"  ,"pawn"   ,"pawn"   ,"pawn" ],
      ["empty" ,"empty"  ,"empty"  ,"empty" ,"empty" ,"empty"  ,"empty"  ,"empty"],
      ["empty" ,"empty"  ,"empty"  ,"empty" ,"empty" ,"empty"  ,"empty"  ,"empty"],
      ["empty" ,"empty"  ,"empty"  ,"empty" ,"empty" ,"empty"  ,"empty"  ,"empty"],
      ["empty" ,"empty"  ,"empty"  ,"empty" ,"empty" ,"empty"  ,"empty"  ,"empty"],
      ["pawn"  ,"pawn"   ,"pawn"   ,"pawn"  ,"pawn"  ,"pawn"   ,"pawn"   ,"pawn" ],
      ["rook"  ,"knight" ,"bishop" ,"queen" ,"king"  ,"bishop" ,"knight" ,"rook" ],
    ]

    if (playerColor == "black") {
      board_layout[0].reverse()
      board_layout[board_layout.length-1].reverse()
    }

    let pieceColor:Color = playerColor == "white" ? "black" : "white"

    for (let i = 0; i < this.BOARD_SIZE; i++) {
      for (let j = 0; j < this.BOARD_SIZE; j++) {
        if (board_layout[i][j] != "empty") {
          this.board[i][j].piece = this.getPieceByType(
            j,
            i,
            pieceColor,
            board_layout[i][j] as pieceType)
        } else {
          pieceColor = playerColor
        }
      }
    }
  }

  getPieceByType(x: number, y:number, pieceColor: Color, type: pieceType,) {
    switch(type) {
      case "pawn":
        return new Pawn(pieceColor, x, y, type)
      case "bishop":
        return new Bishop(pieceColor, x, y, type)
      case "rook":
        return new Rook(pieceColor, x, y, type)
      case "king":
        return new King(pieceColor, x, y, type)
      case "knight":
        return new Knight(pieceColor, x, y, type)
      case "queen":
        return new Queen(pieceColor, x, y, type)
    }
  }

  getCells() {
    return this.board
  }
}
