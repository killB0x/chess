import { Color, pieceType, xCoordinate, yCoordinate } from "src/app/types/types"
import { Board } from "./board.model"

export class Piece {
  type: pieceType
  color: Color
  x: xCoordinate
  y: yCoordinate

  constructor(color: Color, x:xCoordinate, y: yCoordinate, type:pieceType) {
    this.color = color
    this.x = x
    this.y = y
    this.type = type
  }

  coordinateToNumber() {
    return [this.x.charCodeAt(0) - 97, -1 + this.y]
  }

  //abstract possibleMoves(board: Board): Coordinate[];
}
