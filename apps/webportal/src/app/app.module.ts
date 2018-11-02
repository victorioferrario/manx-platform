import { NgModule } from '@angular/core';
import { UserStateModule } from '@manx/domain';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import {
  COLLECTION_APP_DATA_CONTEXT,
  COLLECTION_PROVIDERS,
  COLLECTION_SYSTEM_COMPONENTS,
  COMPONENTS_INTERNAL,
  COMPONENTS_LOCAL,
  COMPONENTS_MATERIAL,
  COMPONENTS_SERVICES,
} from './app-data.constants';

/**
 * Ng module
 */
@NgModule({
  declarations: [COMPONENTS_LOCAL, COLLECTION_SYSTEM_COMPONENTS],
  imports: [
    COMPONENTS_INTERNAL,
    COMPONENTS_MATERIAL,
    COMPONENTS_SERVICES,

    UserStateModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument()
  ],
  entryComponents: [COMPONENTS_LOCAL],
  providers: [COLLECTION_PROVIDERS, COLLECTION_APP_DATA_CONTEXT],
  bootstrap: [COMPONENTS_LOCAL]
})
export class AppModule {}
