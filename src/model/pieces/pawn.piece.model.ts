import { Color, Coordinate, pieceType } from "src/app/types/types";
import { insideBoard, avoidsSameColorCollision, oppositeColorCollision, checkMovesAgainstCheck } from "src/utils/utils";
import { Board } from "../board.model";
import { Piece } from "./piece.model";

export class Pawn extends Piece {
  constructor (color:Color, x:number, y:number, type:pieceType) {
    super(color, x, y, type)
  }

  possibleMoves(board: Board): Coordinate[] {
    return checkMovesAgainstCheck(board,this,this.attackRadius(board))
  }

  //the range each piece can reach
  attackRadius(board:Board):Coordinate[] {
    let yOffset = -1
    if (this.color == "black") {
      yOffset = 1
    }
    let allMoves:Coordinate[] = []

    console.log(this.y, yOffset)
    if (!board.getCells()[this.y + yOffset][this.x].piece) {
      allMoves = [{x:this.x, y: this.y + yOffset}]
    }
    if (oppositeColorCollision(this.x-1,this.y + yOffset,board,this)) {
      allMoves.push({x:this.x-1, y:this.y + yOffset})
    }
    if (oppositeColorCollision(this.x+1,this.y + yOffset,board,this)) {
      allMoves.push({x:this.x+1, y:this.y + yOffset})
    }
    allMoves = allMoves.filter(val => insideBoard(val.x,val.y) && avoidsSameColorCollision(val.x,val.y,board,this))
    if ((yOffset < 0 && this.y < 6) || (yOffset > 0 && this.y > 1) || !allMoves) {
      return allMoves
    }
    allMoves.push({x:this.x, y: this.y + 2*yOffset})
    allMoves = allMoves.filter(val => insideBoard(val.x,val.y) && avoidsSameColorCollision(val.x,val.y,board,this))
    return allMoves
  }

  deepCopy() {
    return new Pawn(this.color, this.x, this.y, this.type)
  }
}
