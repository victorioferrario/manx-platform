import { NgModule                            } from '@angular/core';
import { ReactiveFormsModule                 } from '@angular/forms';       
import { LayoutModule                        } from '@angular/cdk/layout';
import { FlexLayoutModule                    } from '@angular/flex-layout';
import { BrowserModule                       } from '@angular/platform-browser';
import { BrowserAnimationsModule             } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
//
import { PortalModule                 } from '@angular/cdk/portal';
import { OverlayModule,
         OverlayContainer,  
         FullscreenOverlayContainer   } from '@angular/cdk/overlay';
///
import { NxModule } from '@nrwl/nx';
/**
 * hubx Modules
 */
import { AuthenticationDataContext } from '@hubx/domain';
import { ApplicationRoutingService } from './app-routing.service';

// import { DomainModule                       } from '@hubx/domain';
import { FiberModule                        } from '@hubx/fiber';
import { FabricModule                       } from '@hubx/fabric';
import { ApplicationContext, ServicesModule } from '@hubx/services';
import { InfrastructureModule               } from '@hubx/infrastructure';
// 
import { TimingInterceptor} from '@hubx/services';
// @Collection : Components
/**
 * Local Components
 */
import {
  LoginComponent,
  LogoutComponent, 
  RouteErrorComponent,
  RouteNotFoundComponent } from '@hubx/system';
import { LoaderComponent } from '@hubx/fabric';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './containers/app.component';
const COMPONENTS = 
[   AppComponent,    
    LoginComponent,
    LogoutComponent,       
    RouteErrorComponent,
    RouteNotFoundComponent  ];
const COMPONENTS_INTERNAL =
[   BrowserModule, 
    BrowserAnimationsModule ];
const COMPONENTS_SERVICES = 
[   FiberModule, 
    FabricModule, 
    ServicesModule,         
    AppRoutingModule,
    HttpClientModule,
    NxModule.forRoot(),
    ReactiveFormsModule     ];
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
    COMPONENTS_SERVICES,    
    // DomainModule, 
    InfrastructureModule
  ],
  entryComponents: [ ],
  providers: [   
    ApplicationContext, 
    ApplicationRoutingService,
    AuthenticationDataContext,
    { 
      provide: OverlayContainer, 
      useClass: FullscreenOverlayContainer },{
      provide: HTTP_INTERCEPTORS,
      useClass: TimingInterceptor,
      multi: true
    }     
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
