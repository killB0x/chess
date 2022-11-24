import { Coordinate } from "src/app/types/types"
import { Board } from "src/model/board.model"
import { Piece } from "src/model/pieces/piece.model"

export function generateDirectionalMoves(xOffset:number, yOffset:number,piece:Piece, board:Board):Coordinate[] {
    let result = []
    let currentMove = {x:piece.x+xOffset,y: piece.y+yOffset}
    while (insideBoard(currentMove.x,currentMove.y) && avoidsSameColorCollision(currentMove.x,currentMove.y,board,piece)) {
      result.push(currentMove)
      if (oppositeColorCollision(currentMove.x, currentMove.y, board, piece)) {
        break
      }
      currentMove = {x:currentMove.x+xOffset,y: currentMove.y+yOffset}
    }
    return result
}

export function insideBoard(x:number, y:number) {
  return x < 8 && x >=0 && y < 8 && y >=0
}

export function avoidsSameColorCollision(x:number, y:number,board:Board, piece: Piece){
  if (board.getCells()[y][x].piece?.color == piece.color) {
    return false
  }
  return true;
}

export function oppositeColorCollision(x:number, y:number, board:Board, piece: Piece) {
  if (!insideBoard(x,y)) {
    return false
  }
  const collidedPiece = board.getCells()[y][x].piece
  if (collidedPiece && collidedPiece.color !== piece.color) {
    return true
  }
  return false
}
