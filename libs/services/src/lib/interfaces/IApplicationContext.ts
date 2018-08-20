
import { EventEmitter } from '@angular/core';
import { Layout, ILayoutProps, SizeEnum } from '../models';
import { IActionEmitter, ActionEmitter } from '../core/emitters';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
export interface IApplicationContext {
    ux: ILayoutProps;
    dispatch: EventEmitter<IActionEmitter>;
    breakObserver: BreakpointObserver;
    initializeDispatcher(): void;
    initializeBreakPointObserver(): void;
  }