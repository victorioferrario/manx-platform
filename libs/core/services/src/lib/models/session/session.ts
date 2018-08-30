import { IActionEmitter, ActionEmitter } from '../../core/emitters';
import { IApplicationContext } from '../../interfaces/IApplicationContext';
import { Actions_UI, AuthAction, UserIdentityRole } from '../enums';
import { UserIdentitySessionObject, IUserIdentity } from './user';
export interface ISession {
  isAuthenticated: boolean;
  isLoading: boolean;
  isLogginOut : boolean;
  container: IApplicationContext;
  userIdentity: IUserIdentity;  
  authenticate(userRole: UserIdentityRole, isloggedIn: boolean): void;
}

export class Session implements ISession {
  isLoading = false;
  isAuthenticated = false;
  isLogginOut = false;
  container: IApplicationContext;
  userIdentity: IUserIdentity;
  constructor(parent: IApplicationContext) {
    const self = this;
    self.container = parent;
    self.userIdentity = new UserIdentitySessionObject();
  }
  authenticate(userRole: UserIdentityRole, isloggedIn: boolean) {
    const self = this;
    self.isAuthenticated = self.userIdentity.authenticate(true, userRole);
  }
}

// {Session, ISession} from './session'
