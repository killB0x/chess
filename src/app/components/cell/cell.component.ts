import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/types/types';
import { Piece } from 'src/model/pieces/piece.model';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() color:Color = "white"
  @Input() piece:Piece | undefined

  colors = new Map<Color, string>([
    ["white", "#f0d9b5"],
    ["black", "#b58863"]
  ])

  getImageUrl() {
    if (this.piece) {
      return `../../../assets/images/${this.piece.color}_${this.piece.type}.svg`
    }
    return ""
  }

  constructor() { }

  onClick() {

  }

  ngOnInit(): void {

  }

}
