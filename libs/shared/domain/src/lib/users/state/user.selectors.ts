import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IUserState } from './user.reducers';

// ***************************************************************
//    Feature 'user' state definition (see users.reducer.ts):
//    This is the client-side, in-memory data structure used to manage state for
//    all user-related data.
//    export interface UsersState {
//     loaded         : boolean;
//     list           : Array<User>;
//     selectedUserId : string | null;
//    }
// ***************************************************************
/**
 * Get the feature 'store slice' state
 */
const getUserState = createFeatureSelector<IUserState>('user');
// ***************************************************************
// Queries used by @ngrx Store
// ***************************************************************
const getUser = createSelector(getUserState, state => state.active);
const getLoaded = createSelector(getUserState, state => {
  return state.loaded ? Object.assign({}, state) : undefined;
});
const getSelectedUserId = createSelector(getUserState, state => state.selectedUserId);
const getSelectedUser = createSelector(getUser, getSelectedUserId, users => {
  const user = users;
  return user ? Object.assign({}, user) : undefined;
});
export const UserQuery = {
  getUser,
  getLoaded,
  getSelectedUserId,
  getSelectedUser
};
