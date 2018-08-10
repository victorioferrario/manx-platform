import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModules } from './material.module';
import { ServicesModule } from '@hubx/services';
import { LoaderComponent } from './components'

import {
  ItemComponent,
  MainComponent,  
  ShellComponent,
  HeaderComponent,
  ContentComponent,  
  SidebarComponent,
  FragmentComponent,
  ContainerComponent,
  SubheaderComponent} from './layout';

const COMPONENTS = [
  LoaderComponent];

const LAYOUT_COMPONENTS = [
  ItemComponent,
  MainComponent,
  ShellComponent,
  HeaderComponent,
  ContentComponent,
  SidebarComponent,  
  FragmentComponent, 
  ContainerComponent,  
  SubheaderComponent];  

@NgModule({
  imports: [
    CommonModule, 
    ServicesModule,
    MaterialModules],    
  exports: [
    COMPONENTS, 
    LAYOUT_COMPONENTS,
    MaterialModules],
  declarations: [COMPONENTS, LAYOUT_COMPONENTS]  
})
export class FabricModule { }
