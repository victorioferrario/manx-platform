import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { DataEmitter, DataEvent, HttpRequestTracker } from '@manx/domain';

import { ApplicationBaseContext } from './application-base.context';
import { DataContextService } from './application-data.context';
import { IApplicationContext } from './interfaces/IApplicationContext';
import { Actions_UI, AuthAction, DataAction, IDataPayload, MenuAction, UserIdentityRole } from './models';
import { Session } from './models/session/session';
import { LayoutAction } from './models/ui/layout.actions';
import { ViewStateEnum } from './models/view';
import { AuthService } from './security/auth.service';

/**
 * ApplicationContext
 * @description: The Class has two parts.
 * Class Instances:
 * @class:ux,
 * @type: ILayoutProps, ILayoutProps contains all the definitions
 * for the sideNav behavior, subheader, and viewstate;
 * <code-example path="application-base.context.ts">
 * </code-example>
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
export class ApplicationContext extends ApplicationBaseContext implements IApplicationContext {
  child: ApplicationContext;
  constructor(
    public identity: AuthService,
    public dataContext: DataContextService,
    public trackerManager: HttpRequestTracker,
    breakpointObserver: BreakpointObserver
  ) {
    super(identity, dataContext, trackerManager, breakpointObserver);
    this.instance = this;
    this.session = new Session(this);
  }
  processDataAction(action: DataAction, data: IDataPayload) {
    const self = this;
    switch (action) {
      case DataAction.LoadItems:
        self.dataContext.items.dispatch.emit(new DataEmitter(DataEvent.Loading, true));
        self.dataContext.items.getPayload(data);
        break;
      case DataAction.PageItems:
        self.dataContext.items.dispatch.emit(new DataEmitter(DataEvent.Loading, true));
        self.dataContext.items.getPayloadPaged(data);
        break;
      case DataAction.LoadItemsByFilter:
        break;
    }
  }
  processAuthAction(action: AuthAction) {
    const self = this;
    switch (action) {
      case AuthAction.Login:
        self.session.isAuthenticated = true;
        self.ux.viewState.active = ViewStateEnum.portal;
        break;
      case AuthAction.Logout:
        self.ux.dispatch.emit(new LayoutAction(Actions_UI.Auth, AuthAction.Logout));
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
