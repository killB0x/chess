import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Color } from 'src/app/types/types';
import { Cell } from 'src/model/cell.model';
import { King } from 'src/model/pieces/king.piece.model';
import { Piece } from 'src/model/pieces/piece.model';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() color:Color = "white"
  @Input() cell:Cell | undefined
  @Output() onShowPotentialMoves = new EventEmitter<Cell>()
  @Output() onMovePiece = new EventEmitter<Cell>()
  checked = false

  colors = new Map<Color, string>([
    ["white", "#f0d9b5"],
    ["black", "#b58863"],
    ["focused", "#646d40"]
  ])

  constructor(private eventService: EventsService) {
    this.eventService.clearEventObservable.subscribe(() => {
      this.checked = false
      if (this.cell) {
        this.cell.focused = false
        this.cell.potentialOption = false
      }
    })
  }

  getImageUrl() {
    if (this.cell?.piece) {
      return `../../../assets/images/${this.cell.piece.color}_${this.cell.piece.type}.svg`
    }
    return ""
  }

  onClick(element: any) {
    const movePiece = this.cell?.potentialOption
    this.eventService.fireClearEvent()
    if (movePiece) {
      this.onMovePiece.emit(this.cell)
    } else if (this.cell?.piece) {

      this.onShowPotentialMoves.emit(this.cell)
    }

  }

  getCheckedStatus() {
    const piece = this.cell?.piece
    if (piece instanceof King) {
      return piece.checked
    }
    return false
  }

  onHoverEnter(e:any) {
    if (this.cell?.potentialOption) {
      console.log("A")
      this.cell.focused = true
    }
  }

  onHoverLeave(e:any) {
    if (this.cell?.potentialOption) {
      this.cell.focused = false
    }
  }

  ngOnInit(): void {
    if (this.cell) {
      this.cell.piece = this.cell.piece
    }

  }

}
