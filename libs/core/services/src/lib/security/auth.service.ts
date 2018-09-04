import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IAuthEvent, AuthenticationDataContext } from '@hubx/domain';

/**
 * Will act as a facade between @hubx/domain
 * @classdesc: It's a mess, don't hurt your eyes.
 */
@Injectable()
export class AuthService {
  dispatch: EventEmitter<IAuthEvent>;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor(private router: Router, 
    private authenticationContext: AuthenticationDataContext) {
    const self = this;
    self.dispatch = new EventEmitter();
    
    self.authenticationContext.dispatch.subscribe((event: IAuthEvent) => {
      self.loggedIn.next(true);
      self.dispatch.emit(event);
    });
  }
  loginCommand(username: string, password: string) {
    const self = this;
    if (username !== '' && password !== '') {
      self.authenticationContext.login(username, password);
    }
  } 
  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
