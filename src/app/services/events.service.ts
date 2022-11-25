import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { King } from 'src/model/pieces/king.piece.model';
import { Color } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private clearEvent = new Subject<void>()
  clearEventObservable = this.clearEvent.asObservable()
  private gameOver = new Subject<Color>()
  gameOverObservable = this.gameOver.asObservable()

  constructor() { }

  fireClearEvent() {
    this.clearEvent.next()
  }

  fireGameOver(color: Color) {
    this.gameOver.next(color)
  }

}
