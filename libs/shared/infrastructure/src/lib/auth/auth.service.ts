import { Injectable, EventEmitter } from '@angular/core';
import { AUTH_CONFIG } from './auth.constants';
import { Router, NavigationStart } from '@angular/router';
import * as auth0 from 'auth0-js';

import { of, timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import * as JWT from 'jwt-decode';

export interface IAuthResponse {
  action: string;
  success: boolean;
  message?: string;
  isError?: boolean;
}

export interface IAuthenticationService {
  login(email: string, password: string): any;
  logout(): boolean;
  resetPassword(userEmail: string): boolean;
  setSession(authResult): void;
  clearSession(): boolean;
  isAuthenticated(): boolean;
  getAccessToken(): string;
  handleAuthentication(): IAuthResponse;
  scheduleRenewal(): void;
  unscheduleRenewal(): void;
}

export interface IAuthenticationResult {
  accessToken: string;
  idToken: string;
  expiresIn: number;
  expiresAt: Date;
}

export interface IUserIdentity {
  role: any;
  loggedIn: boolean;
}

@Injectable()
export class AuthenticationService implements IAuthenticationService {
  userRole = '';
  dispatch: EventEmitter<IUserIdentity>;
  refreshSubscription: any;
  roleChanged = new EventEmitter<string>();
  auth0 = new auth0.WebAuth({
    domain: AUTH_CONFIG.domain,
    clientID: AUTH_CONFIG.clientID,
    redirectUri: AUTH_CONFIG.callbackURL,
    audience: 'hubx_web_apis',
    responseType: 'token id_token',
    scope: 'openid profile offline_access'
  });
  constructor(private router: Router) {
    this.dispatch = new EventEmitter<IUserIdentity>();
  }

  public login(email: string, password: string) {
    var result = false;
    this.auth0.client.login(
      {
        realm: AUTH_CONFIG.realm,
        username: email,
        password: password
      },
      (err, authResult) => {
        this.setSession(authResult);
        const user_role = sessionStorage.getItem('user_role');
        this.dispatch.emit({
           role: user_role, loggedIn: true 
          });        
      });
    return result;
    }

  public logout(): boolean {
    this.clearSession();
    return true;
  }
  public handleAuthentication(): IAuthResponse {
    const self = this;
    self.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        self.setSession(authResult);
        return {
          success: true,
          action: 'home'
        };
      } else if (err) {
        self.router.navigate(['/login']);
        return {
          success: false,
          isError: true,
          message: err.error,
          action: 'login'
        };
      }
    });
    return {
      success: false,
      isError: true,
      message: 'nothing called',
      action: 'login'
    };
  }
  public setSession(authResult: IAuthenticationResult): boolean {
    const self = this;
    const expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    );
    sessionStorage.setItem('expires_at', expiresAt);
    sessionStorage.setItem('id_token', authResult.idToken);
    sessionStorage.setItem('access_token', authResult.accessToken);
    const access_token_decoded = JWT(authResult.accessToken);
    self.userRole =
      access_token_decoded['https://www.hubx.com/app_metadata']['Role'];
    sessionStorage.setItem('user_role', self.userRole);
    self.roleChanged.emit(self.userRole);
    return true;
  }
  public clearSession(): boolean {
    localStorage.clear();
    sessionStorage.clear();
    return true;
  }
  public renew() {
    console.log('renew');
  }
  public isAuthenticated(): boolean {
    if (sessionStorage.getItem('access_token')) {
      const expiresAt = JSON.parse(sessionStorage.getItem('expires_at'));
      return new Date().getTime() < expiresAt;
    }
    return false;
  }
  public getAccessToken(): string {
    return sessionStorage.getItem('access_token');
  }
  public scheduleRenewal() {
    const self = this;
    if (!self.isAuthenticated()) {
      return;
    }
    self.unscheduleRenewal();
    const expiresAt = JSON.parse(sessionStorage.getItem('expires_at'));
    const source = of(expiresAt).pipe(
      mergeMap(expiresAtTime => {
        const now = Date.now();
        return timer(Math.max(1, expiresAtTime - now));
      })
    );
    self.refreshSubscription = source.subscribe(() => {
      self.renew();
      self.scheduleRenewal();
    });
  }
  public unscheduleRenewal() {
    const self = this;
    if (!self.refreshSubscription) {
      return;
    }
    self.refreshSubscription.unsubscribe();
  }
  public resetPassword(userEmail: string): boolean {
    const self = this;
    self.auth0.changePassword(
      {
        connection: AUTH_CONFIG.realm,
        email: userEmail
      },
      (err: any, res: any) => {
        if (err) {
          console.log(err.message);
        }
        return false;
      }
    );
    return true;
  }
}

// { IAuthResponse, IAuthenticationResult , IAuthenticationService, AuthenticationService }