import { Injectable, Output, EventEmitter } from '@angular/core';
import {
  AuthenticationService,
  AUTH_CONFIG,
  IAuthenticationService
} from '@hubx/infrastructure';

export enum UserIdentityRole {
  Unknown = 0,
  Buyer = 100,
  Vendor = 200,
  Admin = 300,
  SuperAdmin = 400
}
export interface IAuthEvent {
  role: UserIdentityRole;
  route: string;
}
export interface IAuthenticationDataContext{
  login(email: string, password: string): boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationDataContext implements IAuthenticationDataContext {
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
