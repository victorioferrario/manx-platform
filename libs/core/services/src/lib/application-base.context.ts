import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { EventEmitter } from '@angular/core';
import { HttpRequestTracker } from '@manx/domain';

import { DataContextService } from './application-data.context';
import { ActionEmitter, IActionEmitter } from './core/emitters';
import { IApplicationContext } from './interfaces/IApplicationContext';
import { Actions_UI, AuthAction, DataAction, IDataPayload, ILayoutProps, Layout, MenuAction } from './models';
import { ISession } from './models/session/session';
import { AuthService } from './security/auth.service';

export class ApplicationBaseContext {
  ux: ILayoutProps;
  session: ISession;
  instance: IApplicationContext;
  breakObserver: BreakpointObserver;
  dispatch: EventEmitter<IActionEmitter>;
  constructor(
    public identity: AuthService,
    public dataContext: DataContextService,
    public trackerManager: HttpRequestTracker,
    breakpointObserver: BreakpointObserver
  ) {
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
        case Actions_UI.Data:
          const state: IDataPayload = event.payload;
          self.instance.processDataAction(event.subType as DataAction, state);
          break;
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
    self.breakObserver.observe([Breakpoints.Web, Breakpoints.Medium]).subscribe(result => {
      if (result.matches) {
        self.ux.transformMode();
      }
      self.dispatch.emit(new ActionEmitter(Actions_UI.Mode, MenuAction.SwitchMode_Over));
    });
  }
}

// tsuml --glob ./libs/shared/domain/src/lib/**/*.ts
