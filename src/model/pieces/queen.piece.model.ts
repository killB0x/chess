import { Color, Coordinate, pieceType } from "src/app/types/types";
import { generateDirectionalMoves } from "src/utils/utils";
import { Board } from "../board.model";
import { Piece } from "./piece.model";

export class Queen extends Piece {
  constructor (color:Color, x:number, y:number, type:pieceType) {
    super(color, x, y, type)
  }

  possibleMoves(board: Board): Coordinate[] {
    let allMoves:Coordinate[] = []
    allMoves = allMoves.concat(generateDirectionalMoves(1,0,this, board))
    allMoves = allMoves.concat(generateDirectionalMoves(-1,0,this, board))
    allMoves = allMoves.concat(generateDirectionalMoves(0,1,this, board))
    allMoves = allMoves.concat(generateDirectionalMoves(0,-1,this, board))
    allMoves = allMoves.concat(generateDirectionalMoves(1,1,this, board))
    allMoves = allMoves.concat(generateDirectionalMoves(-1,-1,this, board))
    allMoves = allMoves.concat(generateDirectionalMoves(-1,1,this, board))
    allMoves = allMoves.concat(generateDirectionalMoves(1,-1,this, board))

    console.log(allMoves.length)
    return allMoves
  }

}
