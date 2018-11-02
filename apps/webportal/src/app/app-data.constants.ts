import { LayoutModule } from '@angular/cdk/layout';
import { FullscreenOverlayContainer, OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthDataContext, DomainModule, HttpAuthTokenInterceptor, UserDataContext, VendorDataContext } from '@manx/domain';
import { FabricModule } from '@manx/fabric';
import { FiberModule } from '@manx/fiber';
import { AuthenticationService } from '@manx/infrastructure';
import { ApplicationContext, ApplicationInsightsErrorHandler, ApplicationInsightsService, ApplicationViewContext, ServicesModule } from '@manx/services';
import { LoginComponent, LogoutComponent, RolesComponent, RouteErrorComponent, RouteNotFoundComponent } from '@manx/system';
import { NxModule } from '@nrwl/nx';

import { AppRoutingModule } from './app-routing.module';
import { ApplicationRoutingService } from './app-routing.service';
import { AppComponent } from './containers/app.component';

export const COMPONENTS_LOCAL = [AppComponent];
/**
 * @desc: Export of const COLLECTION_PROVIDERS
 */
export const COLLECTION_PROVIDERS = [
  ApplicationContext,
  ApplicationViewContext,
  AuthenticationService,
  ApplicationRoutingService,
  {
    multi: true,
    provide: HTTP_INTERCEPTORS,
    useClass: HttpAuthTokenInterceptor
  },
  ApplicationInsightsService,
  {
    provide: ErrorHandler,
    useClass: ApplicationInsightsErrorHandler
  },
  {
    provide: OverlayContainer,
    useClass: FullscreenOverlayContainer
  }
];
/**
 * @desc: Export of const COMPONENTS_INTERNAL
 */
export const COMPONENTS_INTERNAL = [BrowserModule, BrowserAnimationsModule];
/**
 * @desc: Export of const COMPONENTS_MATERIAL:
 */
export const COMPONENTS_MATERIAL = [LayoutModule, PortalModule, OverlayModule, FlexLayoutModule];
/**
 * @desc: Export of const COMPONENTS_SERVICES:
 */
export const COMPONENTS_SERVICES = [
  FiberModule,
  FabricModule,
  DomainModule,
  ServicesModule,
  AppRoutingModule,
  NxModule.forRoot(),
  ReactiveFormsModule
];
/**
 * @desc: Export of const COLLECTION_APP_DATA_CONTEXT
 */
export const COLLECTION_APP_DATA_CONTEXT = [AuthDataContext, UserDataContext, VendorDataContext];
/**
 * @desc: Export of const COLLECTION_SYSTEM_COMPONENTS
 */
export const COLLECTION_SYSTEM_COMPONENTS = [LoginComponent, RolesComponent, LogoutComponent, RouteErrorComponent, RouteNotFoundComponent];
/**
 * @desc:  To import into module, use the following:
   @code:  import {
     COMPONENTS_INTERNAL,
     COMPONENTS_MATERIAL,
     COMPONENTS_SERVICES,
     COLLECTION_PROVIDERS,
     COLLECTION_APP_DATA_CONTEXT,
     COLLECTION_SYSTEM_COMPONENTS } from './app-data.constants.ts';
*/
