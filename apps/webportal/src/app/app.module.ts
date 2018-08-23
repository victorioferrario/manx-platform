import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import {
  OverlayContainer,
  FullscreenOverlayContainer,
  OverlayModule
} from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
///
import { NxModule } from '@nrwl/nx';
/**
 * hubx Modules
 */
import { FiberModule } from '@hubx/fiber';
import { FabricModule } from '@hubx/fabric';
import { ApplicationRoutingService } from './app-routing.service';
import { ApplicationContext, AuthService, ServicesModule } from '@hubx/services';
// @Collection : Components
/**
 * Local Components
 */
import {
  LoginComponent,
  LogoutComponent,
  //LoginFormComponent,  
  RouteErrorComponent,
  RouteNotFoundComponent
} from '@hubx/system';
//
import { LoaderComponent } from '@hubx/fabric';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './containers/app.component';
//
const COMPONENTS = 
[   AppComponent,
    LoginComponent,
    LogoutComponent,
   // LoginFormComponent,
    RouteErrorComponent,
    RouteNotFoundComponent  ];
//
const COMPONENTS_INTERNAL =
[   BrowserModule, 
    BrowserAnimationsModule ];
//
const COMPONENTS_SERVICES = 
[   FiberModule, 
    FabricModule, 
    ServicesModule,         
    AppRoutingModule,
    NxModule.forRoot(),
    ReactiveFormsModule     ];
//
const COMPONENTS_MATERIAL = 
[   LayoutModule, 
    PortalModule, 
    OverlayModule,
    FlexLayoutModule, 
    BrowserAnimationsModule  ];
//
/**
 * Ng module
 */
@NgModule({
  declarations: [
    COMPONENTS
  ],
  imports: [
    COMPONENTS_INTERNAL,  
    COMPONENTS_SERVICES,
    COMPONENTS_MATERIAL,
    COMPONENTS_SERVICES   
  ],
  entryComponents: [ ],
  providers: [
    AuthService,
    ApplicationContext, 
    ApplicationRoutingService,
    { provide: OverlayContainer, useClass: FullscreenOverlayContainer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
