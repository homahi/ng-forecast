import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoadingService {
  private _count = 0;
  private _subject: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  get loading(): Observable<boolean> {
    return this._subject.asObservable();
  }

  start() {
    ++this._count;
    this._subject.next(true);
  }

  stop(force: boolean = false) {
    --this._count;
    if (force || this._count === 0) {
      this._count = 0;
      this._subject.next(false);
    }

  }

}
