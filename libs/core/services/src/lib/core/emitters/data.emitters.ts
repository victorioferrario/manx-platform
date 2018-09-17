

import { Output, EventEmitter } from '@angular/core';

export class DataEmitters {
  @Output()
  public UserData:EventEmitter<any> = new EventEmitter<any>();
}
