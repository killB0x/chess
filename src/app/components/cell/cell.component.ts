import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/types/types';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  @Input() color:Color = "white"
  colors = new Map<Color, string>([
    ["white", "#f0d9b5"],
    ["black", "#b58863"]
  ])

  constructor() { }

  ngOnInit(): void {
  }

}
