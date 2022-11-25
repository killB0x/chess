import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  @Output() startGame = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.startGame.emit()
  }

}
