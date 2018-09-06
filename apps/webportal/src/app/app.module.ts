import { NgModule } from '@angular/core';
import { PortalModule } from '@angular/cdk/portal';
import { LayoutModule } from '@angular/cdk/layout';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  OverlayModule,
  OverlayContainer,
  FullscreenOverlayContainer  
} from '@angular/cdk/overlay';
///
import { NxModule } from '@nrwl/nx';
/**
 * hubx Modules
 */
import { FiberModule } from '@hubx/fiber';
import { FabricModule } from '@hubx/fabric';

import {
  ServicesModule,
  ApplicationContext,
  ApplicationViewContext } from '@hubx/services';

import {  
  DomainModule,
  AuthDataContext,
  UserDataContext,
  VendorDataContext,
  HttpAuthTokenInterceptor } from '@hubx/domain';

import { 
  AuthenticationService
} from '@hubx/infrastructure';
import { ApplicationRoutingService } from './app-routing.service';
// @Collection : Components
/**
 * Local Components
 */
import {
  LoginComponent,
  RolesComponent,
  LogoutComponent,
  RouteErrorComponent,
  RouteNotFoundComponent
} from '@hubx/system';
//
// import { LoaderComponent } from '@hubx/fabric';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './containers/app.component';
//
const COMPONENTS = [
  AppComponent,
  RolesComponent,
  LoginComponent,
  LogoutComponent,
  RouteErrorComponent,
  RouteNotFoundComponent
];
const COMPONENTS_INTERNAL = [
  BrowserModule, 
  BrowserAnimationsModule];
  
const COMPONENTS_SERVICES = [
  FiberModule,
  FabricModule,
  ServicesModule,
  AppRoutingModule,
  NxModule.forRoot(),
  ReactiveFormsModule];
const COMPONENTS_MATERIAL = [
  LayoutModule,
  PortalModule,
  OverlayModule,
  FlexLayoutModule];
/**
 * Ng module
 */
@NgModule({
  declarations: [COMPONENTS],
  imports: [
    COMPONENTS_INTERNAL,
    COMPONENTS_SERVICES,
    COMPONENTS_MATERIAL,
    COMPONENTS_SERVICES,
    DomainModule
  ],
  entryComponents: [],
  providers: [
    AuthDataContext,
    UserDataContext,
    VendorDataContext,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
