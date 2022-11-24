import { Color, Coordinate, pieceType } from "src/app/types/types";
import { Board } from "../board.model";
import { Piece } from "./piece.model";

export class Queen extends Piece {
  constructor (color:Color, x:number, y:number, type:pieceType) {
    super(color, x, y, type)
  }

  possibleMoves(board: Board): Coordinate[] {
    return [{x:0,y:0}]
  }

}
