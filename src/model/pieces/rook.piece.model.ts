import { Color, Coordinate, pieceType } from "src/app/types/types";
import { checkMovesAgainstCheck, generateDirectionalMoves } from "src/utils/utils";
import { Board } from "../board.model";
import { Piece } from "./piece.model";

export class Rook extends Piece {
  constructor (color:Color, x:number, y:number, type:pieceType) {
    super(color, x, y, type)
  }

  possibleMoves(board: Board): Coordinate[] {

    return checkMovesAgainstCheck(board,this,this.attackRadius(board))
  }

  attackRadius(board: Board): Coordinate[] {
    let allMoves:Coordinate[] = []
    allMoves = allMoves.concat(generateDirectionalMoves(1,0,this,board))
    allMoves = allMoves.concat(generateDirectionalMoves(-1,0,this,board))
    allMoves = allMoves.concat(generateDirectionalMoves(0,1,this,board))
    allMoves = allMoves.concat(generateDirectionalMoves(0,-1,this,board))
    return allMoves
  }

  deepCopy() {
    return new Rook(this.color, this.x, this.y, this.type)
  }
}
