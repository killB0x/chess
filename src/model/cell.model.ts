import { Color, pieceType, xCoordinate, yCoordinate } from "src/app/types/types";
import { Piece } from "./pieces/piece.model";

export class Cell {
  piece: Piece | undefined
  color: Color
  potentialOption: boolean

  constructor (color: Color,  piece?: Piece) {
    this.potentialOption = false
    this.piece = piece
    this.color = color
  }
}
