import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UserEffects } from './state/user.effects';
import { UserFacade } from './state/user.facade';
import { INITAL_STATE, userReducer } from './state/user.reducers';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('user', userReducer, {
      initialState: INITAL_STATE
    }),
    EffectsModule.forFeature([UserEffects])
  ],
  providers: [UserEffects, UserFacade]
})
export class UserStateModule {}
