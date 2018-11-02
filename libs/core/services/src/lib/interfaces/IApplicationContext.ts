import { BreakpointObserver } from '@angular/cdk/layout';
import { EventEmitter } from '@angular/core';

import { IActionEmitter } from '../core/emitters';
import { AuthAction, DataAction, IDataPayload, ILayoutProps, ISession, MenuAction } from '../models';
import { AuthService } from '../security/auth.service';

export interface IApplicationContext {
  ux: ILayoutProps;
  session: ISession;
  identity: AuthService;
  breakObserver: BreakpointObserver;
  dispatch: EventEmitter<IActionEmitter>;
  processDataAction(action: DataAction, data: IDataPayload): void;
  processAuthAction(action: AuthAction): void;
  processMenuAction(action: MenuAction): void;
}
