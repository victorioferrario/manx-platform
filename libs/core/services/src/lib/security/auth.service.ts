import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthDataContext, IAuthEvent } from '@manx/domain';
import { BehaviorSubject } from 'rxjs';

export interface IAuthService {
  dispatch: EventEmitter<IAuthEvent>;
  logout(): void;
  login(username: string, password: string): void;
}
/**
 * Will act as a facade between @hubx/domain
 * @classdesc: It's a mess, don't hurt your eyes.
 */
@Injectable()
export class AuthService implements IAuthService {
  /**
   * Dispatch of auth service
   */
  public dispatch: EventEmitter<IAuthEvent>;
  /**
   * Logged in of auth service
   */
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  /**
   * Gets is logged in
   */
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  /**
   * Creates an instance of auth service.
   * @param router
   * @param authenticationContext
   */
  constructor(private router: Router, private authContext: AuthDataContext) {
    const self = this;
    self.dispatch = new EventEmitter();
    self.authContext.dispatch.subscribe((event: IAuthEvent) => {
      self.loggedIn.next(true);
      self.dispatch.emit(event);
    });
  }
  /**
   * Logins auth service
   * @param username
   * @param password
   */
  login(username: string, password: string) {
    const self = this;
    localStorage.clear();
    sessionStorage.clear();
    if (username !== '' && password !== '') {
      self.authContext.login(username, password);
    }
  }
  /**
   * Logouts auth service
   */
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
  public token() {
    return this.authContext.getAccessToken();
  }
}
