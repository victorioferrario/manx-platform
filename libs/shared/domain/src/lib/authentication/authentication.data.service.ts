import { Injectable, Output, EventEmitter } from '@angular/core';
import {
  AuthenticationService,
  AUTH_CONFIG,
  IAuthenticationService
} from '@hubx/infrastructure';
export interface IAuthenticationDataContext{
  login(email: string, password: string): boolean;
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationDataContext implements IAuthenticationDataContext {
  constructor(public auth: AuthenticationService) {}
  login(email: string, password: string) {
    const self = this;
    if (self.auth.clearSession()) {
      return self.auth.login(email, password); 
    }
    return false;
  }
}
