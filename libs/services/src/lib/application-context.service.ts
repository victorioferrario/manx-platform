import { Injectable } from '@angular/core';
import { Observable, of, Observer } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';
import { IActionEmitter, ActionEmitter } from './core/emitters';
import { Actions_UI, MenuAction, LoadStateEnum, ModeEnum } from './models';
import { Layout, ILayoutProps, SizeEnum } from './models';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { SubHeaderConfiguration as ConfigSubHeader } from './models';
import { Actions } from '@ngrx/effects';
export interface IApplicationContext {
  ux: ILayoutProps;
  dispatch: EventEmitter<IActionEmitter>;
  breakObserver: BreakpointObserver;
  initializeDispatcher(): void;
  initializeBreakPointObserver(): void;
}

@Injectable({
  providedIn: 'root'
})
export class ApplicationContext implements IApplicationContext {
  ux: ILayoutProps;
  dispatch: EventEmitter<IActionEmitter>;
  breakObserver: BreakpointObserver;

  /**
   * Creates an instance of
   * application context.
   * @param breakpointObserver
   */
  constructor(breakpointObserver: BreakpointObserver) {
    const self = this;
    self.ux = new Layout(true);
    self.dispatch = new EventEmitter();
    self.breakObserver = breakpointObserver;
    self.initializeDispatcher();
    self.initializeBreakPointObserver();
  }
  initializeDispatcher() {
    const self = this;
    self.dispatch.subscribe((event: IActionEmitter) => {
      switch (event.type) {
        case Actions_UI.Menu:
          const temp = event.subType as MenuAction;
          switch (event.subType) {
            case MenuAction.State_Toggle:
              self.ux.props.opened = !self.ux.props.opened;
              break;
            default:
              self.ux.props.opened = temp === MenuAction.State_Open;
              break;
          }
          break;
        case Actions_UI.Mode:
          self.ux.transformMode();         
          break;
        case Actions_UI.Resize:          
          self.ux.transformSize(event.subType as MenuAction);
          break;
      }
    });
  }  
  /**
   * Initializes break point observer
   */
  initializeBreakPointObserver() {
    const self = this;
    self.breakObserver
      .observe([Breakpoints.Web, Breakpoints.Medium])
      .subscribe(result => {
        let event: IActionEmitter;
        if (result.matches) {
          event  = new ActionEmitter(Actions_UI.Resize, MenuAction.Resize_Large);
        } else {
          event = new ActionEmitter(Actions_UI.Resize, MenuAction.Resize_Small);
        }
        self.dispatch.emit(event);
      });
  }
}
