import { DataEvent } from '../enums';

export class DataEmitter {
  constructor(public action: DataEvent, public payload?: any) {}
}
