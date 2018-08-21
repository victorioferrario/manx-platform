import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } 
from '@angular/material';
// @Collection : Modules
import { NxModule } from '@nrwl/nx';
/**
 * hubx Modules
 */
import { FiberModule } from '@hubx/fiber';
import { FabricModule } from '@hubx/fabric';
import {ApplicationContext, ServicesModule } from '@hubx/services';
// @Collection : Components

/**
 * Local Components
 */
import { AppRoutingModule   } from './app-routing.module';
import { MasterComponent    } from './shared/layout/master.component';
import { AppComponent       } from './containers/app/app.component';
import { LoginComponent     } from './areas/system/login/login.component';
import { LogoutComponent    } from './areas/system/logout/logout.component';
import { NoRouteComponent   } from './areas/system/no-route/noroute.component';
import { LOGGING_PROVIDERS  } from './shared/util/logger.service';

// 
  const COMPONENTS = [
      AppComponent,    
      MasterComponent,
      LoginComponent,
      LogoutComponent ,
      NoRouteComponent];

  const COMPONENTS_INTERNAL = [
      BrowserModule, 
      BrowserAnimationsModule];

  const COMPONENTS_MATERIAL = [
      LayoutModule, 
      MatIconModule, 
      MatListModule,
      MatToolbarModule, 
      MatButtonModule, 
      MatSidenavModule,     
      FlexLayoutModule];

  const COMPONENTS_SERVICES = [    
      FiberModule,
      FabricModule,
      ServicesModule];
/**
 * Ng module
 */
@NgModule({
  declarations: [
    COMPONENTS],
  imports: [
    COMPONENTS_INTERNAL,
    COMPONENTS_SERVICES,
    COMPONENTS_MATERIAL,
    AppRoutingModule,
    NxModule.forRoot()
   ],
  providers: [LOGGING_PROVIDERS, ApplicationContext],
  bootstrap: [AppComponent]
})
export class AppModule {}
