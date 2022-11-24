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
  piece:Piece | undefined
  focused = false

  colors = new Map<Color, string>([
    ["white", "#f0d9b5"],
    ["black", "#b58863"],
    ["focused", "#646d40"],
  ])

  constructor(private eventService: EventsService) {
    this.eventService.clearEventObservable.subscribe(() => {
      this.focused = false
      if (this.cell) {
        this.cell.potentialOption = false
      }

    })
  }

  getImageUrl() {
    if (this.piece) {
      return `../../../assets/images/${this.piece.color}_${this.piece.type}.svg`
    }
    return ""
  }

  onClick(element: any) {
    this.eventService.fireClearEvent()
    if (this.piece) {
      this.focused = true
      this.onShowPotentialMoves.emit(this.cell)
    }
  }

  ngOnInit(): void {
    if (this.cell) {
      this.piece = this.cell.piece
    }
  }

}
