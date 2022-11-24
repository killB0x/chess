import { Color } from "src/app/types/types";
import { Board } from "./board.model";

export class Game {
  board: Board

  constructor (playerColor: Color) {
    this.board = new Board()
    this.board.initializeBoard(playerColor)
  }


}
