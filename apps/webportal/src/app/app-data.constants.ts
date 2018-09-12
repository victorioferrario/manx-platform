/**
 * @desc: Imports of all angular modules
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
/**
 * @desc: Imports of all angular material modules
 */
import {  PortalModule                 } from '@angular/cdk/portal';
import {  LayoutModule                 } from '@angular/cdk/layout';
import {
          OverlayModule,
          OverlayContainer,
          FullscreenOverlayContainer  } from '@angular/cdk/overlay';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NxModule } from '@nrwl/nx';

/**
 * @desc Import of domain
 */
import {
          DomainModule,
          HttpAuthTokenInterceptor    } from '@hubx/domain';
import { AppComponent } from './containers/app.component';
/**
 * @desc: Collection of Domain DataContext
*/
import {
  AuthDataContext,
  UserDataContext,
  VendorDataContext
} from '@hubx/domain';
/**
 * @desc: Collection of System Components
*/
import {
  LoginComponent,
  RolesComponent,
  LogoutComponent,
  RouteErrorComponent,
  RouteNotFoundComponent } from '@hubx/system';
/**
 * @desc: Import of @hubx classes
*/
import { FiberModule } from '@hubx/fiber';
import { FabricModule } from '@hubx/fabric';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationService } from '@hubx/infrastructure';
import { ApplicationRoutingService } from './app-routing.service';
import {
  ServicesModule,
  ApplicationContext,
  ApplicationViewContext } from '@hubx/services';
/**
 * @desc: export COMPONENTS_LOCAL
*/
export const COMPONENTS_LOCAL = [
  AppComponent
];
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
    {
      provide: OverlayContainer,
      useClass: FullscreenOverlayContainer
    }
];
/**
 * @desc: Export of const COMPONENTS_INTERNAL
 */
export const COMPONENTS_INTERNAL = [
  BrowserModule,
  BrowserAnimationsModule
];
/**
 * @desc: Export of const COMPONENTS_INTERNAL
 */
export const COMPONENTS_MATERIAL = [
  LayoutModule,
  PortalModule,
  OverlayModule,
  FlexLayoutModule
];
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
export const COLLECTION_APP_DATA_CONTEXT = [
  AuthDataContext,
  UserDataContext,
  VendorDataContext
];
/**
 * @desc: Export of const COLLECTION_SYSTEM_COMPONENTS
 */
export const COLLECTION_SYSTEM_COMPONENTS = [
  LoginComponent,
  RolesComponent,
  LogoutComponent,
  RouteErrorComponent,
  RouteNotFoundComponent
];
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

