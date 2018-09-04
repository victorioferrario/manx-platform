import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import {
  IUserIdentity,
  UserIdentitySessionObject
} from '../models/session/user';
import { AuthenticationService, AUTH_CONFIG } from '@hubx/infrastructure';
import { ApplicationViewContext } from '../application-viewmanager.service';
import { UserIdentityRole } from '../models/enums';
import { AreaView, BuyerViewSection, VendorViewSection } from '../models/enums';

export interface IAuthEvent {
  role: UserIdentityRole;
  route: string;
}
/**
 * Will act as a facade between @hubx/domain
 * @classdesc: It's a mess, don't hurt your eyes.
 */
@Injectable()
export class AuthService {
  dispatch: EventEmitter<IAuthEvent>;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor(private router: Router, private auth: AuthenticationService) {
    const self = this;
    self.dispatch = new EventEmitter();
    self.auth.dispatch.subscribe((event: any) => {
      const role =
        event.role === 'ADMIN'
          ? UserIdentityRole.Vendor
          : UserIdentityRole.Buyer;
      const route = event.role === 'ADMIN' ? '/vendor' : '/buyer';      
      this.loggedIn.next(true);
      self.dispatch.emit({
        role: role,
        route: route
      });     
    });
  }
  loginCommand(username: string, password: string) {
    const self = this;
    if (username !== '' && password !== '') {      
      self.auth.login(username, password);
    }
  }
  login(user: IUserIdentity, role: UserIdentityRole) {
    const self = this;   
      this.loggedIn.next(true);
      user.authenticate(true, role);  
  }
  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
