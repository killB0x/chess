import { Color, Coordinate, pieceType } from "src/app/types/types";
import { checkMovesAgainstCheck, generateDirectionalMoves } from "src/utils/utils";
import { Board } from "../board.model";
import { Piece } from "./piece.model";

export class Bishop extends Piece {

  constructor (color:Color, x:number, y:number, type:pieceType, isPlayer:boolean) {
    super(color, x, y, type, isPlayer)
  }

  possibleMoves(board: Board): Coordinate[] {


    //no need for inside board check
    return checkMovesAgainstCheck(board,this,this.attackRadius(board))
  }

  attackRadius(board: Board): Coordinate[] {
    let allMoves:Coordinate[] = []
    allMoves = allMoves.concat(generateDirectionalMoves(1,1,this, board))
    allMoves = allMoves.concat(generateDirectionalMoves(-1,-1,this, board))
    allMoves = allMoves.concat(generateDirectionalMoves(1,-1,this, board))
    allMoves = allMoves.concat(generateDirectionalMoves(-1,1,this, board))
    return allMoves
  }

  deepCopy() {
    return new Bishop(this.color, this.x, this.y, this.type, this.isPlayer)
  }
}
