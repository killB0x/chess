import { Color, pieceType, xCoordinate, yCoordinate } from "src/app/types/types";
import { getNextChar } from "src/utils/utils";
import { Cell } from "./cell.model";
import { Piece } from "./piece.model";

export class Board {
  BOARD_SIZE = 8
  board: Cell[] = []

  constructor () {
    let currentColor = "white"
    for (let i = 1; i <= 8; i++) {
      let currentChar = 'a'
      for (let j = 1; j <= 8; j++) {
        this.board.push(new Cell(
          currentColor as Color,
          currentChar as xCoordinate,
          i.toString() as yCoordinate))
        currentChar = getNextChar(currentChar)
        if (j == this.BOARD_SIZE) {
          continue
        }
        if (currentColor === "white") {
          currentColor = "black"
        } else {
          currentColor = "white"
        }
      }
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

    const flat_layout = board_layout.flat()
    let pieceColor:Color = playerColor == "white" ? "black" : "white"

    for (let i = 0; i < this.board.length; i++) {
      if (flat_layout[i] != "empty") {
        this.board[i].piece = new Piece(
          pieceColor,
          this.board[i].x,
          this.board[i].y,
          flat_layout[i] as pieceType)
      } else {
        pieceColor = playerColor
      }
    }
  }

  getCells() {
    return this.board
  }
}
