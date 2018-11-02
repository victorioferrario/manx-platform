import { EventEmitter } from '@angular/core';

export class BaseContext<T> {
  dispatch: EventEmitter<T>;
  constructor() {
    const self = this;
    self.dispatch = new EventEmitter();
  }
}
