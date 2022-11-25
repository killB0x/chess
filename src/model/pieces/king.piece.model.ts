import { Color, Coordinate, pieceType } from "src/app/types/types";
import { insideBoard, avoidsSameColorCollision, checkMovesAgainstCheck } from "src/utils/utils";
import { Board } from "../board.model";
import { Piece } from "./piece.model";

export class King extends Piece {

  constructor (color:Color, x:number, y:number, type:pieceType, isPlayer:boolean) {
    super(color, x, y, type, isPlayer)
  }

  possibleMoves(board: Board): Coordinate[] {
    return checkMovesAgainstCheck(board,this,this.attackRadius(board))
  }

  attackRadius(board: Board): Coordinate[] {
    let allMoves = [
      {x:this.x+1, y:this.y+1},
      {x:this.x-1, y:this.y+1},
      {x:this.x+1, y:this.y-1},
      {x:this.x-1, y:this.y-1},
      {x:this.x+1, y:this.y},
      {x:this.x-1, y:this.y},
      {x:this.x, y:this.y-1},
      {x:this.x, y:this.y+1}
    ]

    return allMoves.filter(val => insideBoard(val.x,val.y) && avoidsSameColorCollision(val.x,val.y,board,this))
  }

  deepCopy() {
    return new King(this.color, this.x, this.y, this.type, this.isPlayer)
  }
}
