import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
// @Collection : Modules
import { NxModule } from '@nrwl/nx';
import { FiberModule } from '@hubx/fiber';
import { FabricModule } from '@hubx/fabric';
import { ServicesModule } from '@hubx/services';
// @Collection : Components
import { LayoutModule } from '@angular/cdk/layout';
// @Collection Local Components
import { AppRoutingModule } from './app-routing.material';
import { AppComponent             } from './containers/app/app.component';
import { DashboardComponent       } from './components/dashboard/dashboard.component';
import { LayoutHybridComponent    } from './shared/layout/hybrid/layout-fabric-mat.component';
import { LOGGING_PROVIDERS} from './shared/util/logger.service';
// 
  const COMPONENTS = [
    AppComponent,    
    DashboardComponent,   
    LayoutHybridComponent];

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
    ServicesModule, 
    AppRoutingModule];
// Routing

@NgModule({
  declarations: [
    COMPONENTS],
  imports: [
    COMPONENTS_INTERNAL,
    COMPONENTS_SERVICES,
    COMPONENTS_MATERIAL,
    NxModule.forRoot()    
   ],
  providers: [LOGGING_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
