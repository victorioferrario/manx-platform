import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  OverlayContainer,
  FullscreenOverlayContainer,
  OverlayModule
} from '@angular/cdk/overlay';
import { PortalModule 
} from '@angular/cdk/portal';
/// 
import { NxModule } from '@nrwl/nx';
/**
 * hubx Modules
 */
import { FiberModule } from '@hubx/fiber';
import { FabricModule } from '@hubx/fabric';
import { ApplicationContext, ServicesModule } from '@hubx/services';
// @Collection : Components
/**
 * Local Components
 */
import {
  LoginComponent        ,
  LogoutComponent       ,
  RouteErrorComponent   ,
  RouteNotFoundComponent } from '@hubx/system';

//
import {
    LoaderComponent
} from '@hubx/fabric';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './containers/app.component';
//
const COMPONENTS = [  
  AppComponent,
  LoginComponent        ,
  LogoutComponent       ,
  RouteErrorComponent   ,
  RouteNotFoundComponent 
];
const COMPONENTS_INTERNAL = [
  BrowserModule, 
  BrowserAnimationsModule
];
const COMPONENTS_MATERIAL = [
  LayoutModule,   
  FlexLayoutModule,
  BrowserAnimationsModule];
const COMPONENTS_SERVICES = [
  FiberModule,  
  FabricModule,
  ServicesModule
];
/**
 * Ng module
 */
@NgModule({
  declarations: [
    COMPONENTS],
  imports: [
    COMPONENTS_INTERNAL,
    OverlayModule,    
    PortalModule,   
    COMPONENTS_SERVICES,
    COMPONENTS_MATERIAL,
    AppRoutingModule,   
    NxModule.forRoot()
  ],
  providers: [    
    ApplicationContext,
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
