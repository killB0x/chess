import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { Color } from 'src/app/types/types';
import { Cell } from 'src/model/cell.model';
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
  focused = false
  checked = false

  colors = new Map<Color, string>([
    ["white", "#f0d9b5"],
    ["black", "#b58863"],
    ["focused", "#646d40"]
  ])

  constructor(private eventService: EventsService) {
    this.eventService.clearEventObservable.subscribe(() => {
      this.focused = false
      this.checked = false
      if (this.cell) {
        this.cell.potentialOption = false
      }
    })
    this.eventService.removeCheckObservable.subscribe(() => {
      this.checked = false
    })
    this.eventService.setCheckObservable.subscribe((king) => {
      if (this.cell && this.cell.piece && this.cell.piece == king) {
        this.checked = true
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
      this.focused = true
      this.onShowPotentialMoves.emit(this.cell)
    }

  }

  onHoverEnter(e:any) {
    if (this.cell?.potentialOption) {
      this.focused = true
    }
  }

  onHoverLeave(e:any) {
    if (this.cell?.potentialOption) {
      this.focused = false
    }
  }

  ngOnInit(): void {
    if (this.cell) {
      this.cell.piece = this.cell.piece
    }

  }

}
