import { Color, pieceType, xCoordinate, yCoordinate } from "src/app/types/types"
import { Board } from "./board.model"

export class Piece {
  type: pieceType
  color: Color
  x: number
  y: number

  constructor(color: Color, x:number, y: number, type:pieceType) {
    this.color = color
    this.x = x
    this.y = y
    this.type = type
  }


  //abstract possibleMoves(board: Board): Coordinate[];
}
