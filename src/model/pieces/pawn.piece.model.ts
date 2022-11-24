import { Color, Coordinate, pieceType } from "src/app/types/types";
import { insideBoard, avoidsSameColorCollision } from "src/utils/utils";
import { Board } from "../board.model";
import { Piece } from "./piece.model";

export class Pawn extends Piece {
  constructor (color:Color, x:number, y:number, type:pieceType) {
    super(color, x, y, type)
  }

  possibleMoves(board: Board): Coordinate[] {
    let allMoves = [{x:this.x, y: this.y-1}]
    allMoves = allMoves.filter(val => insideBoard(val.x,val.y) && avoidsSameColorCollision(val.x,val.y,board,this))
    if (this.y < 6 || !allMoves) {
      return allMoves
    }
    allMoves.push({x:this.x, y: this.y-2})
    allMoves = allMoves.filter(val => insideBoard(val.x,val.y) && avoidsSameColorCollision(val.x,val.y,board,this))

    console.log(allMoves.length)

    return allMoves
  }

}
