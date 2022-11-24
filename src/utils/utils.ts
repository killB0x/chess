import { Coordinate } from "src/app/types/types"
import { Piece } from "src/model/pieces/piece.model"

export function generateDirectionalMoves(xOffset:number, yOffset:number,piece:Piece):Coordinate[] {
    let result = []
    let currentMove = {x:piece.x+xOffset,y: piece.y+yOffset}
    while (piece.insideBoard(currentMove.x,currentMove.y)) {
      result.push(currentMove)
      currentMove = {x:currentMove.x+xOffset,y: currentMove.y+yOffset}
    }
    return result
}

