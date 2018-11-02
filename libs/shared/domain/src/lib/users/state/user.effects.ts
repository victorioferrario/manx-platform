import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, withLatestFrom } from 'rxjs/operators';

import { UserActionTypes } from './user.actions';
import { UserFacade } from './user.facade';
import { IUserState } from './user.reducers';
import { UserQuery } from './user.selectors';

@Injectable()
export class UserEffects {
  loaded$ = this.store.select(UserQuery.getLoaded);
  /**
   * @type: getUser
   * @memberof UserEffects
   */
  @Effect({ dispatch: false })
  getUser = this.actions$.ofType(UserActionTypes.LOAD_PROFILE).pipe(
    withLatestFrom(this.loaded$),
    switchMap(([_, loaded]) => {
      return loaded ? of(null) : this.service.getUser();
    })
  );
  /**
   * @effect: removeUser
   * @memberof UserEffects
   */
  @Effect({ dispatch: true })
  removeUser = this.actions$.ofType(UserActionTypes.REMOVE_PROFILE);
  constructor(private actions$: Actions, private store: Store<IUserState>, private service: UserFacade) {}
}
