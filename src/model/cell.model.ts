import { Color, xCoordinate, yCoordinate } from "src/app/types/types";

export class Cell {
  color: Color
  x: xCoordinate
  y: yCoordinate

  constructor (color: Color, x:xCoordinate, y: yCoordinate) {
    this.color = color
    this.x = x
    this.y = y
  }
}
