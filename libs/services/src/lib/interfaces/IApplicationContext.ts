
import { EventEmitter } from '@angular/core';
import { Layout, ILayoutProps, SizeEnum, ISession } from '../models';
import { IActionEmitter, ActionEmitter } from '../core/emitters';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
export interface IApplicationContext {
    ux: ILayoutProps;
    session: ISession;
    breakObserver: BreakpointObserver;
    dispatch: EventEmitter<IActionEmitter>;    
    initializeDispatcher(): void;
    initializeBreakPointObserver(): void;
  }