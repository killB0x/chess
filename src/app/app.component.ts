import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chess';
  gameStarted = false

  startGame() {
    this.gameStarted = true
  }

  restartGame() {
    this.gameStarted = false
  }
}
