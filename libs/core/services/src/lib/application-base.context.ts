import { EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { IApplicationContext } from './interfaces/IApplicationContext';
import { IActionEmitter, ActionEmitter } from './core/emitters';
import {
  Layout,
  Actions_UI,
  MenuAction,
  AuthAction,
  ILayoutProps
} from './models';
import { AuthService } from './security/auth.service';
import { ISession, Session } from './models/session/session';
export class ApplicationBaseContext {
  ux: ILayoutProps;
  session: ISession;
  instance: IApplicationContext;
  breakObserver: BreakpointObserver;
  dispatch: EventEmitter<IActionEmitter>;
  constructor(
    public identity: AuthService,
    breakpointObserver: BreakpointObserver) {
    const self = this;
    self.dispatchInit();
    self.ux = new Layout(true);
    self.breakObserver = breakpointObserver;
  }
  /**
   * @method: sessionInit
   * @param {ApplicationContext} refApp
   * @memberof ApplicationBaseContext
   * ToDo: Get Rid of this method.
   */
  protected sessionInit(refApp: IApplicationContext) {
    this.instance = refApp;
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
  /**
   * Initializes break point observer
   */
  protected breakpointObserverInit(): void {
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
