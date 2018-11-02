import { Action } from '@ngrx/store';

import { IUserProfile } from '../models';

export enum UserActionTypes {
  LOAD_PROFILE = '[users] LOAD PROFILE',
  REMOVE_PROFILE = '[users] REMOVE PROFILE',
  PROFILE_LOADED = '[users] PROFILE LOADED',
  LOAD_CUSTOMERS = '[users] LOAD CUSTOMERS',
  BUSINESS_PROFILE = '[users] LOAD BUSINESS PROFILE',
  SELECT_CUSTOMER = '[users] SELECT CUSTOMER'
}
// ***************************************************************
// Request 'Actions'
// ***************************************************************
export class LoadProfileUserAction implements Action {
  readonly type = UserActionTypes.LOAD_PROFILE;
}
export class RemoveProfileUserAction implements Action {
  readonly type = UserActionTypes.REMOVE_PROFILE;
  readonly data: null;
}
// ***************************************************************
// Document 'Action'
// ***************************************************************
export class UserProfileLoadedAction implements Action {
  readonly type = UserActionTypes.PROFILE_LOADED;
  constructor(public data: IUserProfile) {}
}
export type UserActionsUnion = LoadProfileUserAction | RemoveProfileUserAction | UserProfileLoadedAction;
