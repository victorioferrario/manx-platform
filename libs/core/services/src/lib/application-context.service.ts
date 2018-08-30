


import { Injectable, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { IApplicationContext } from './interfaces/IApplicationContext';
import { IActionEmitter, ActionEmitter } from './core/emitters';
import {
  Actions_UI,
  ModeEnum,
  MenuAction,
  Layout,
  ILayoutProps,
  AuthAction,
  UserIdentityRole
} from './models';

import { ISession, Session } from './models/session/session';
import { LayoutAction } from './models/ui/layout.actions';
import { ViewStateEnum } from './models/view';

/**
 * ApplicationContext
 * @description: The Class has two parts. 
 * Class Instances: 
 * @class:ux, 
 * @type: ILayoutProps, ILayoutProps contains all the definitions 
 * for the sideNav behavior, subheader, and viewstate;
 * 
 * @class:session,  
 * @type:ISession;    
 * 
 * @class:breakObserver
 * @type:BreakpointObserver;
 * 
 * The second part is the dispatcher.  This very important, 
 * it is essentially the central routing station to handle broadcasted events from the components.
 * For Example:
 *    switch (event.type) {
        case Actions_UI.Menu:          
          switch (event.subType) {
            case MenuAction.State_Toggle:              
              break;
            default:
             // set menu to default state.              
              break;
          }
          break;
        case Actions_UI.Mode:
          //switched menu mode from: side, over, push.
          break;
        case Actions_UI.Auth:
          const temp2 = event.subType as AuthAction;
          switch (temp2) {
            case AuthAction.Login:
              // sets some variables after login
              break;
            case AuthAction.Logout:
              // clears variables after logout                       
              break;
            case AuthAction.Login_Buyer:
              // sets properties to be consumed by `Application-viewmanager.service.ts` that are specific for a buyer.
              break;
            case AuthAction.Login_Vendor:
              // sets properties to be consumed by `Application-viewmanager.service.ts`that are specific for a vendor.
              break;
          }
          break;
        case Actions_UI.Resize:
          // this is broadcasted when the screen size changes. 
          break;
 */
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
    self.session = new Session(self);
    self.dispatch = new EventEmitter();    
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
              self.ux.viewState.active = ViewStateEnum.portal;
              break;
            case AuthAction.Logout:
              self.ux.dispatch.emit(
                new LayoutAction(Actions_UI.Auth, AuthAction.Logout)
              );
              self.session.isAuthenticated = false;
              self.ux.viewState.active = ViewStateEnum.login;              
              break;
            case AuthAction.Login_Buyer:
              self.ux.viewState.active = ViewStateEnum.portal;
              self.session.authenticate(UserIdentityRole.Buyer, true);
              break;
            case AuthAction.Login_Vendor:
              self.ux.viewState.active = ViewStateEnum.portal;
              self.session.authenticate(UserIdentityRole.Vendor, true);
              break;
          }
          break;
        case Actions_UI.Resize:
          self.ux.transformSize(event.subType as MenuAction);
          break;
      }
    });    
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
          self.ux.transformMode();          
        } 
        event = new ActionEmitter(
          Actions_UI.Mode,
          MenuAction.SwitchMode_Over);
        self.dispatch.emit(event);
      });
  }
}
