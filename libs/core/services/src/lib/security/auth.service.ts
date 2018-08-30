import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IUserIdentity, UserIdentitySessionObject } from '../models/session/user';
import { UserIdentityRole } from '../models/enums';
/**
 * Will act as a facade between @hubx/domain
 * @classdesc: It's a mess, don't hurt your eyes.
 */
@Injectable()
export class AuthService {
  private loggedIn: 
  BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor(private router: Router) {}
  testLogin() {
    this.loggedIn.next(true);
  }
  login(user: IUserIdentity, role: UserIdentityRole) {
    if (user.userName !== '' && user.password !== '') {
      this.loggedIn.next(true);
      user.authenticate(true, role);    
    }
  }
  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
