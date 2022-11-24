import { Color, xCoordinate, yCoordinate } from "src/app/types/types";
import { getNextChar } from "src/utils/utils";
import { Cell } from "./cell.model";

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
    console.log(this.board)
  }

  getCells() {
    return this.board
  }
}
