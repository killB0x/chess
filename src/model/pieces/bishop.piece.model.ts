import { Color, Coordinate, pieceType } from "src/app/types/types";
import { generateDirectionalMoves } from "src/utils/utils";
import { Board } from "../board.model";
import { Piece } from "./piece.model";

export class Bishop extends Piece {

  constructor (color:Color, x:number, y:number, type:pieceType) {
    super(color, x, y, type)
  }

  possibleMoves(board: Board): Coordinate[] {
    let allMoves:Coordinate[] = []
    allMoves = allMoves.concat(generateDirectionalMoves(1,1,this))
    allMoves = allMoves.concat(generateDirectionalMoves(-1,-1,this))
    allMoves = allMoves.concat(generateDirectionalMoves(1,-1,this))
    allMoves = allMoves.concat(generateDirectionalMoves(-1,1,this))
    //no need for inside board check
    return allMoves
  }


}
