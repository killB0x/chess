import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {
  @Input() text:string = "Game Over"
  @Output() restartGame = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.restartGame.emit()
  }
}
