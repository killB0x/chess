import { cellType, Color, xCoordinate, yCoordinate } from "src/app/types/types";

export class Cell {
  type: cellType
  color: Color
  x: xCoordinate
  y: yCoordinate


  constructor (color: Color, x:xCoordinate, y: yCoordinate, type?:cellType) {
    this.type = type ?? "empty"
    this.color = color
    this.x = x
    this.y = y
  }
}
