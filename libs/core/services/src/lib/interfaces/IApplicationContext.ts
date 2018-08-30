
import { EventEmitter } from '@angular/core';
import { Layout, ILayoutProps, SizeEnum, ISession } from '../models';
import { IActionEmitter, ActionEmitter } from '../core/emitters';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
//Todo: Remove this.
import { AuthService} from '../security/auth.service';
export interface IApplicationContext {
    ux: ILayoutProps;
    session: ISession;
    identity : AuthService;
    breakObserver: BreakpointObserver;
    dispatch: EventEmitter<IActionEmitter>;    
    initializeDispatcher(): void;
    initializeBreakPointObserver(): void;
  }