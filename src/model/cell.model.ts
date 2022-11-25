import { Color, pieceType, xCoordinate, yCoordinate } from "src/app/types/types";
import { Piece } from "./pieces/piece.model";

export class Cell {
  focused: boolean = false
  piece: Piece | undefined
  color: Color
  potentialOption: boolean
  x: number
  y: number

  constructor (color: Color, x:number, y:number,  piece?: Piece) {
    this.potentialOption = false
    this.piece = piece
    this.color = color
    this.x = x
    this.y = y
  }

  public deepCopy() {
    if (this.piece) {
      return new Cell(this.color, this.x, this.y, this.piece.deepCopy())
    }
    return new Cell(this.color, this.x, this.y)
  }
}
