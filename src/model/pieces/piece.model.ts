import { Color, Coordinate, pieceType, xCoordinate, yCoordinate } from "src/app/types/types"
import { Board } from "../board.model"

export abstract class Piece {
  isPlayer: boolean
  type: pieceType
  color: Color
  x: number
  y: number

  constructor(color: Color, x:number, y: number, type:pieceType, isPlayer: boolean) {
    this.color = color
    this.x = x
    this.y = y
    this.type = type
    this.isPlayer = isPlayer
  }

  abstract possibleMoves(board: Board): Coordinate[];
  abstract attackRadius(board: Board): Coordinate[];
  abstract deepCopy():Piece;
}
