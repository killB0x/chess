import { Color, pieceType, xCoordinate, yCoordinate } from "src/app/types/types";
import { Piece } from "./piece.model";

export class Cell {
  piece: Piece | undefined
  color: Color

  constructor (color: Color,  piece?: Piece) {
    this.piece = piece
    this.color = color
  }
}
