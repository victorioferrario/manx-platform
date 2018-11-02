import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IUserProfile } from '../models';
import { UserDataContext } from '../user.data.service';
import { RemoveProfileUserAction, UserProfileLoadedAction } from './user.actions';
import { IUserState } from './user.reducers';
import { UserQuery } from './user.selectors';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {
  currentUser$ = this.store.select(UserQuery.getUser);
  constructor(private actions$: Actions, private store: Store<IUserState>, private backend: UserDataContext) {}
  // **************************************************
  //  Public Methods
  //  **************************************************
  public getUser(): Observable<IUserProfile> {
    return this.backend.getUserProfile().pipe(
      tap(users => {
        this.store.dispatch(new UserProfileLoadedAction(users));
      })
    );
  }
  public remove() {
    alert('user-facade-remove');
    console.log('about dispatch removeprofile');
    this.store.dispatch(new RemoveProfileUserAction());
  }
  /**
   *
   */
}
