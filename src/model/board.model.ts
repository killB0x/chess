import { Color, Coordinate, pieceType, xCoordinate, yCoordinate } from "src/app/types/types";
import { Cell } from "./cell.model";
import { Bishop } from "./pieces/bishop.piece.model";
import { King } from "./pieces/king.piece.model";
import { Knight } from "./pieces/knight.piece.model";
import { Pawn } from "./pieces/pawn.piece.model";
import { Piece } from "./pieces/piece.model";
import { Queen } from "./pieces/queen.piece.model";
import { Rook } from "./pieces/rook.piece.model";

export class Board {
  BOARD_SIZE = 8
  board: Cell[][] = []

  constructor () {
    let currentColor = "white"
    for (let i = 1; i <= 8; i++) {
      let currentRow: Cell[] = []
      for (let j = 1; j <= 8; j++) {
        currentRow.push(new Cell(
          currentColor as Color,
          j-1,
          i-1))
        if (j == this.BOARD_SIZE) {
          continue
        }
        if (currentColor === "white") {
          currentColor = "black"
        } else {
          currentColor = "white"
        }
      }
      this.board.push(currentRow)
    }
  }

  public initializeBoard(playerColor: Color) {
    //display entire board for readability and easier testing
    const board_layout = [
      ["rook"  ,"knight" ,"bishop" ,"queen" ,"king"  ,"bishop" ,"knight" ,"rook" ],
      ["pawn"  ,"pawn"   ,"pawn"   ,"pawn"  ,"pawn"  ,"pawn"   ,"pawn"   ,"pawn" ],
      ["empty" ,"empty"  ,"empty"  ,"empty" ,"empty" ,"empty"  ,"empty"  ,"empty"],
      ["empty" ,"empty"  ,"empty"  ,"empty" ,"empty" ,"empty"  ,"empty"  ,"empty"],
      ["empty" ,"empty"  ,"empty"  ,"empty" ,"empty" ,"empty"  ,"empty"  ,"empty"],
      ["empty" ,"empty"  ,"empty"  ,"empty" ,"empty" ,"empty"  ,"empty"  ,"empty"],
      ["pawn"  ,"pawn"   ,"pawn"   ,"pawn"  ,"pawn"  ,"pawn"   ,"pawn"   ,"pawn" ],
      ["rook"  ,"knight" ,"bishop" ,"queen" ,"king"  ,"bishop" ,"knight" ,"rook" ],
    ]

    if (playerColor == "black") {
      board_layout[0].reverse()
      board_layout[board_layout.length-1].reverse()
    }

    let pieceColor:Color = playerColor == "white" ? "black" : "white"

    for (let i = 0; i < this.BOARD_SIZE; i++) {
      for (let j = 0; j < this.BOARD_SIZE; j++) {
        if (board_layout[i][j] != "empty") {
          this.board[i][j].piece = this.getPieceByType(
            j,
            i,
            pieceColor,
            board_layout[i][j] as pieceType,
            playerColor)
        } else {
          pieceColor = playerColor
        }
      }
    }
  }

  getPieceByType(x: number, y:number, pieceColor: Color, type: pieceType, playerColor:Color) {
    switch(type) {
      case "pawn":
        return new Pawn(pieceColor, x, y, type, pieceColor == playerColor)
      case "bishop":
        return new Bishop(pieceColor, x, y, type, pieceColor == playerColor)
      case "rook":
        return new Rook(pieceColor, x, y, type, pieceColor == playerColor)
      case "king":
        return new King(pieceColor, x, y, type, pieceColor == playerColor)
      case "knight":
        return new Knight(pieceColor, x, y, type, pieceColor == playerColor)
      case "queen":
        return new Queen(pieceColor, x, y, type, pieceColor == playerColor)
    }
  }

  updateCellPotentialMove(cell:Cell) {
    if (cell.piece) {
      const cellPositions = cell.piece.possibleMoves(this)
      cellPositions.forEach(e => {
        this.board[e.y][e.x].potentialOption = true
      });
    }
  }

  getPotentialMovesByColor(color:Color) {
    let pieces = this.getPiecesByColor(color)
    let moves: any[] = []
    pieces.forEach(piece => {
      let possibleMoves = piece.possibleMoves(this)
      if (possibleMoves.length != 0 ) {
        moves = moves.concat({piece:piece, moves:possibleMoves})
      }
    })
    return moves
  }

  deepCopy() {
    const board = new Board()
    for (const cell of this.board.flat()) {
      board.board[cell.y][cell.x] = cell.deepCopy()
    }
    return board
  }

  getPiecesByColor(color: Color) {
    const pieces:Piece[] = []
    this.board.flat().forEach(cell => {
      const piece = cell.piece
      if (piece && piece.color == color) {
        pieces.push(piece)
      }
    })
    return pieces
  }

  getKing(color: Color) {
    let [king] = this.board.flat().filter(cell => cell.piece instanceof King && cell.piece.color == color)
    return king
  }

  getCells() {
    return this.board
  }
}
