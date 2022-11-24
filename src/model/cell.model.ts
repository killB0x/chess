import { Color, pieceType, xCoordinate, yCoordinate } from "src/app/types/types";
import { Piece } from "./piece.model";

export class Cell {
  piece: Piece | undefined
  color: Color
  x: xCoordinate
  y: yCoordinate

  constructor (color: Color, x:xCoordinate, y: yCoordinate, piece?: Piece) {
    this.piece = piece
    this.color = color
    this.x = x
    this.y = y
  }
}
