import { Injectable, Output, EventEmitter } from '@angular/core';
import {
  AuthenticationService
} from '@hubx/infrastructure';
import {IAuthEvent, IAuthDataContext, UserIdentityRole } from './models';

@Injectable({
  providedIn: 'root'
})
export class AuthDataContext implements IAuthDataContext {
  dispatch: EventEmitter<IAuthEvent>;
  constructor(public auth: AuthenticationService) {
    const self = this;    
    this.dispatch = new EventEmitter<IAuthEvent>();
    self.auth.dispatch.subscribe((event: any) => {
      const role =
        event.role === 'ADMIN'
          ? UserIdentityRole.Vendor
          : UserIdentityRole.Buyer;
      const route = event.role === 'ADMIN' ? '/vendor' : '/buyer';            
      self.dispatch.emit({
        role: role,
        route: route
      });     
    });  
  }
  login(email: string, password: string) {
    const self = this;
    if (self.auth.clearSession()) {
      return self.auth.login(email, password); 
    }
    return false;
  }
}