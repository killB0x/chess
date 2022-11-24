import { Component, OnInit } from '@angular/core';


type Color = "black" | "white"
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  colors = new Map<Color, string>([
    ["white", "#b58863"],
    ["black", "#f0d9b5"]
  ])

  constructor() { }

  ngOnInit(): void {
  }

}
