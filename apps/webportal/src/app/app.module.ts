import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
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
import { DomainModule         } from '@hubx/domain';
//
 import { AuthenticationTokenInterceptor,  AuthenticationService  } from '@hubx/infrastructure';
import { ApplicationContext, ServicesModule } from '@hubx/services';

// providers: [
//   {
//     multi: true,
//     provide: HTTP_INTERCEPTORS,
//     useClass: AuthenticationTokenInterceptor      
//   },
//   AuthenticationService]
// @Collection : Components
/**
 * Local Components
 */
import {
  LoginComponent,
  LogoutComponent,  
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

   // import { AuthenticationDataContext } from '@hubx/domain';
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
    COMPONENTS_SERVICES,    
  ],
  entryComponents: [ ],
  providers: [       
    { 
      provide: OverlayContainer, 
      useClass: FullscreenOverlayContainer 
    },
    {
          multi: true,
          provide: HTTP_INTERCEPTORS,
          useClass: AuthenticationTokenInterceptor      
    },
    ApplicationContext, 
    AuthenticationService,
    ApplicationRoutingService      
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
