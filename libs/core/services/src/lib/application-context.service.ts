import { Injectable, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { IApplicationContext } from './interfaces/IApplicationContext';
import { IActionEmitter, ActionEmitter } from './core/emitters';
import {
  Layout,
  Actions_UI,
  MenuAction,
  AuthAction,
  ILayoutProps,
  UserIdentityRole
} from './models';
import { AuthService } from './security/auth.service';
import { ISession, Session } from './models/session/session';
import { LayoutAction } from './models/ui/layout.actions';
import { ViewStateEnum } from './models/view';

export class ApplicationBaseContext {
  ux: ILayoutProps;
  session: ISession;
  instance: ApplicationContext;
  breakObserver: BreakpointObserver;
  dispatch: EventEmitter<IActionEmitter>;
  constructor(
    public identity: AuthService,
    breakpointObserver: BreakpointObserver
  ) {
    const self = this;
    self.dispatchInit();
    self.ux = new Layout(true);
    self.breakObserver = breakpointObserver;

  }
  protected sessionInit(refApp: ApplicationContext) {
    this.instance = refApp;
    this.session = new Session(refApp);
  }
  /**
   * @method: dispatchInit
   * @description: The following method subscribes
   * to the EventEmitter dispatch. Componets in the application
   * fire off the event as
   * @code: ctx.dispatch(event: IActionEmitter);
  * @memberof ApplicationBaseContext
   */
  protected dispatchInit(): void {
    const self = this;
    self.dispatch = new EventEmitter();
    self.dispatch.subscribe((event: IActionEmitter) => {
      switch (event.type) {
        case Actions_UI.Menu:
          self.instance.processMenuAction(event.subType as MenuAction);
          break;
        case Actions_UI.Mode:
          self.ux.transformMode();
          break;
        case Actions_UI.Auth:
          self.instance.processAuthAction(event.subType as AuthAction);
          break;
        case Actions_UI.Resize:
          self.ux.transformSize(event.subType as MenuAction);
          break;
      }
    });
  }
  protected breakpointObserverInit(): void{
    const self = this;
    self.breakObserver
      .observe([Breakpoints.Web, Breakpoints.Medium])
      .subscribe(result => {
        if (result.matches) {
          self.ux.transformMode();
        }
        self.dispatch.emit(
          new ActionEmitter(Actions_UI.Mode, MenuAction.SwitchMode_Over)
        );
      });
  }
}

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
export class ApplicationContext extends ApplicationBaseContext
  implements IApplicationContext {
  child: ApplicationContext;
  /**
   * Creates an instance of
   * application context.
   * @param breakpointObserver
   */
  constructor(
    public identity: AuthService,
    breakpointObserver: BreakpointObserver
  ) {
    super(identity, breakpointObserver);
    this.sessionInit(this);
   // this.initializeDispatcher();
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
        if (result.matches) {
          self.ux.transformMode();
        }
        self.dispatch.emit(
          new ActionEmitter(Actions_UI.Mode, MenuAction.SwitchMode_Over)
        );
      });
  }
}
