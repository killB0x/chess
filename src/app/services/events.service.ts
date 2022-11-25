import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { King } from 'src/model/pieces/king.piece.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private clearEvent = new Subject<void>()
  private setCheck = new Subject<King>()
  private removeCheck = new Subject<void>()
  clearEventObservable = this.clearEvent.asObservable()
  setCheckObservable = this.setCheck.asObservable()
  removeCheckObservable = this.setCheck.asObservable()
  constructor() { }

  fireClearEvent() {
    this.clearEvent.next()
  }

  fireSetCheck(king: King) {
    this.setCheck.next(king)
  }

  fireRemoveCheck() {
    this.removeCheck.next()
  }

}
