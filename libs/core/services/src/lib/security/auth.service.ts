import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { IUserIdentity, UserIdentity } from '../models/session/user';
import { UserIdentityRole } from '../models/enums';
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
      // this.router.navigate([
      //   role === UserIdentityRole.Buyer ? '/buyer' : '/vendor'
      // ]);
    }
  }
  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
