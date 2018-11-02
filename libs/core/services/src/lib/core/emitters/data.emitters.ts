

import { Output, EventEmitter } from '@angular/core';

export class DataEmitters<T> {

  @Output()
  public UserData:EventEmitter<T> = new EventEmitter<T>();
}
