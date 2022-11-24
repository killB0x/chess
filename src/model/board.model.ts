import { Color, pieceType, xCoordinate, yCoordinate } from "src/app/types/types";
import { Cell } from "./cell.model";
import { Piece } from "./piece.model";

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
          this.board[i][j].piece = new Piece(
            pieceColor,
            j,
            i,
            board_layout[i][j] as pieceType)
        } else {
          pieceColor = playerColor
        }
      }
    }
  }

  getCells() {
    return this.board
  }
}
