import { Injectable, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { IApplicationContext } from './interfaces/IApplicationContext';
import { IActionEmitter, ActionEmitter } from './core/emitters';
import {
  Actions_UI,
  MenuAction,
  AuthAction,
  UserIdentityRole
} from './models';
import { AuthService } from './security/auth.service';
import { ISession, Session } from './models/session/session';
import { LayoutAction } from './models/ui/layout.actions';
import { ViewStateEnum } from './models/view';
import { ApplicationBaseContext } from './application-base.context';
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
 *
 */
@Injectable({
  providedIn: 'root'
})
export class ApplicationContext
extends ApplicationBaseContext
  implements IApplicationContext {
  child: ApplicationContext;
  constructor(
    public identity: AuthService,
    breakpointObserver: BreakpointObserver) {
    super(identity, breakpointObserver);
    // In order avoid circular dependency error,
    // we need to initalize these varaibles here.
    // this.sessionInit(this);
    this.instance =  this;
    this.session = new Session(this);
  }
  processAuthAction(action: AuthAction) {
    const self = this;
    switch (action) {
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
  }
  processMenuAction(action: MenuAction): void {
    const self = this;
    switch (action) {
      case MenuAction.State_Toggle:
        self.ux.props.opened = !self.ux.props.opened;
        break;
      default:
        self.ux.props.opened = action === MenuAction.State_Open;
        break;
    }
  }
}
