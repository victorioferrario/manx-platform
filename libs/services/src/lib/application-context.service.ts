import { Injectable, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { IApplicationContext } from './interfaces/IApplicationContext';
import { IActionEmitter, ActionEmitter } from './core/emitters';
import {
  Actions_UI,
  MenuAction,
  Layout,
  ILayoutProps,
  AuthAction,
  UserIdentityRole
} from './models';

import { LogLevel } from 'typescript-logging';
import { modelLogger, serviceLogger } from './util/logger/config';
import { ISession, Session } from './models/session/session';
import { LayoutAction } from './models/ui/layout.actions';

@Injectable({
  providedIn: 'root'
})
export class ApplicationContext implements IApplicationContext {
  ux: ILayoutProps;
  session: ISession;
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
    self.session = new Session(self);
    self.breakObserver = breakpointObserver;
    self.initializeDispatcher();
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
        case Actions_UI.Auth:
          const temp2 = event.subType as AuthAction;
          switch (temp2) {
            case AuthAction.Login:
              self.session.isAuthenticated = true;
              break;
            case AuthAction.Logout:
              self.ux.dispatch.emit(
                new LayoutAction(Actions_UI.Auth, AuthAction.Logout)
              );
              self.session.isAuthenticated = false;
              break;
            case AuthAction.Login_Buyer:
              self.session.authenticate(UserIdentityRole.Buyer, true);
              break;
            case AuthAction.Login_Vendor:
              self.session.authenticate(UserIdentityRole.Vendor, true);
              break;
          }
          break;
        case Actions_UI.Resize:
          self.ux.transformSize(event.subType as MenuAction);
          break;
      }
    });
    // chained together
    self.initializeBreakPointObserver();
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
          event = new ActionEmitter(Actions_UI.Resize, MenuAction.Resize_Large);
        } else {
          event = new ActionEmitter(Actions_UI.Resize, MenuAction.Resize_Small);
        }
        self.dispatch.emit(event);
      });
  }
}
