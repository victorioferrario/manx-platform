import { IUserProfile } from '../models';
import { UserActionsUnion, UserActionTypes } from './user.actions';

// ***************************************************************
// State definition
// ***************************************************************
export interface IUserState {
  loaded: boolean;
  selectedUserId?: string | null;
  active?: IUserProfile;
}
export const INITAL_STATE: IUserState = {
  loaded: false,
  selectedUserId: null,
  active: null
};
// ***************************************************************
// Real Reducer
// ***************************************************************
export function userReducer(state: IUserState = INITAL_STATE, action: UserActionsUnion): IUserState {
  switch (action.type) {
    case UserActionTypes.PROFILE_LOADED:
      const loaded = true;
      const active = action.data;
      state = Object.assign({
        ...state,
        active,
        loaded
      });
      break;
    case UserActionTypes.LOAD_PROFILE:
      state = Object.assign({ ...state, active, loaded });
      break;
    case UserActionTypes.REMOVE_PROFILE:
      state = null;
      // state = Object.assign({ ...state, active: null, loaded: false });
      break;
  }
  return state;
}
export const getLoaded = (state: IUserState) => state.loaded !== null;
export const getActiveUser = (state: IUserState) => state.active;
export const getselectedUserId = (state: IUserState) => state.selectedUserId;
