import { Color, Coordinate, pieceType } from "src/app/types/types";
import { Board } from "../board.model";
import { Piece } from "./piece.model";

export class Knight extends Piece {
  constructor (color:Color, x:number, y:number, type:pieceType) {
    super(color, x, y, type)
  }

  possibleMoves(board: Board): Coordinate[] {
    let allMoves = [
      {x: this.x-2, y: this.y-1},
      {x: this.x-2, y: this.y+1},
      {x: this.x+2, y: this.y-1},
      {x: this.x+2, y: this.y+1},
      {x: this.x+1, y: this.y+2},
      {x: this.x-1, y: this.y+2},
      {x: this.x+1, y: this.y-2},
      {x: this.x-1, y: this.y-2},
    ]

    allMoves.filter(val => this.insideBoard(val.x,val.y))

    return allMoves
  }

}
