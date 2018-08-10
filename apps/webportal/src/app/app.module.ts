import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
// @Collection : Modules
import { NxModule } from '@nrwl/nx';
import { FabricModule } from '@hubx/fabric';
import { ServicesModule } from '@hubx/services';
// @Collection : Components
import { AppComponent } from './containers/app/app.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    FabricModule,
    ServicesModule, 
    NxModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
