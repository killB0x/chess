import { xCoordinate, yCoordinate } from "src/app/types/types";
import { getNextChar } from "src/utils/utils";
import { Cell } from "./cell.model";

export class Board {
  BOARD_SIZE = 8
  board: Cell[] = []

  constructor () {
    for (let i = 1; i <= 8; i++) {
      let currentChar = 'a'
      for (let j = 1; j <= 8; j++) {
        this.board.push(new Cell(
          (i-1) * this.BOARD_SIZE + j % 2 ? "white" : "black",
          currentChar as xCoordinate,
          i.toString() as yCoordinate))
        currentChar = getNextChar(currentChar)
      }
    }
  }
}
