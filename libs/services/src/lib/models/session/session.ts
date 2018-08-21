import { IActionEmitter, ActionEmitter } from '../../core/emitters';
import { IApplicationContext } from '../../interfaces/IApplicationContext';
import { Actions_UI, AuthAction } from '../enums';
export interface ISession {
  isAuthenticated: boolean;
  isLoading:boolean;
  container: IApplicationContext;
}

export class Session implements ISession {
  isLoading = false;
  isAuthenticated = false;
  container: IApplicationContext;
  //dispatch:EventEmitter;
  constructor(parent: IApplicationContext) {
    const self = this;
    self.container = parent;    
  }
}
