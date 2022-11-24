import { Color, Coordinate, pieceType, xCoordinate, yCoordinate } from "src/app/types/types"
import { Board } from "../board.model"

export abstract class Piece {
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

  insideBoard(x:number, y:number) {
    return x < 8 && x >=0 && y < 8 && y >=0
  }

  abstract possibleMoves(board: Board): Coordinate[];
}
