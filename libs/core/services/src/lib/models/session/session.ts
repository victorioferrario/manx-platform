import { BehaviorSubject, Observable } from 'rxjs';
import { IActionEmitter, ActionEmitter } from '../../core/emitters';
import { IApplicationContext } from '../../interfaces/IApplicationContext';
import { Actions_UI, AuthAction, UserIdentityRole } from '../enums';
import { UserIdentitySessionObject, IUserIdentity } from './user';

export interface ISession {
  isAuthenticated: boolean;
  isLoading: boolean;
  isLogginOut: boolean;
  container: IApplicationContext;
  userIdentity: IUserIdentity;
  IsLoggdedIn: BehaviorSubject<boolean>;
  IsAuthenticatedObservable: Observable<boolean>;
  authenticate(userRole: UserIdentityRole, isloggedIn: boolean): void;
  logout():void;
}

export class Session implements ISession {
  isLoading = false;
  isAuthenticated = false;
  isLogginOut = false;
  container: IApplicationContext;
  userIdentity: IUserIdentity;
  IsLoggdedIn: BehaviorSubject<boolean>;
  IsAuthenticatedObservable: Observable<boolean>;
  constructor(parent: IApplicationContext) {
    const self = this;
    self.container = parent;
    self.userIdentity = new UserIdentitySessionObject();
    self.IsLoggdedIn = new BehaviorSubject<boolean>(false);
    self.IsAuthenticatedObservable = self.IsLoggdedIn.asObservable();
  }
  authenticate(userRole: UserIdentityRole, isloggedIn: boolean) {
    const self = this;
    self.IsLoggdedIn.next(true);
    self.isAuthenticated = self.userIdentity.authenticate(true, userRole);
    self.IsLoggdedIn.subscribe(val => {
      console.log(val);
    });
  }
  logout(){
    const self = this;
    self.IsLoggdedIn.next(false);
  }
}

// {Session, ISession} from './session'
