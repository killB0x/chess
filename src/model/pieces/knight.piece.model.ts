import { Color, Coordinate, pieceType } from "src/app/types/types";
import { insideBoard, avoidsSameColorCollision } from "src/utils/utils";
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

    allMoves = allMoves.filter(val => insideBoard(val.x,val.y) && avoidsSameColorCollision(val.x,val.y,board,this))
    console.log(allMoves.length)
    return allMoves
  }

}
