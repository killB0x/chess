import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';
import { King } from 'src/model/pieces/king.piece.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private clearEvent = new Subject<void>()
  clearEventObservable = this.clearEvent.asObservable()

  constructor() { }

  fireClearEvent() {
    this.clearEvent.next()
  }


}
