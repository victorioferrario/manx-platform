import { NgModule } from '@angular/core';
import {
  COMPONENTS_LOCAL              ,
  COMPONENTS_SERVICES           ,
  COMPONENTS_INTERNAL           ,
  COMPONENTS_MATERIAL           ,
  COLLECTION_PROVIDERS          ,
  COLLECTION_APP_DATA_CONTEXT   ,
  COLLECTION_SYSTEM_COMPONENTS  } from './app-data.constants';
/**
 * Ng module
 */
@NgModule({
  declarations: [
    COMPONENTS_LOCAL ,
    COLLECTION_SYSTEM_COMPONENTS ],
  imports: [
    COMPONENTS_INTERNAL,
    COMPONENTS_MATERIAL,
    COMPONENTS_SERVICES,
    ],
  entryComponents: [
    COMPONENTS_LOCAL],
  providers: [
    COLLECTION_PROVIDERS,
    COLLECTION_APP_DATA_CONTEXT  ],
  bootstrap: [
    COMPONENTS_LOCAL]
})
export class AppModule {}
