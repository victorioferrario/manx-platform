import { NgModule        } from '@angular/core';
import { CommonModule    } from '@angular/common';
import { MaterialModules } from './material.module';
// @Collection: Local Modules
import { ServicesModule  } from '@hubx/services';
// @Collection: Local Components
import { LoaderComponent } from './components';
// @Collection: Local Directives
import { BusyDirective   } from './directives/busy.directive';

import {
  ShellMaterialComponent  ,
  HeaderMaterialComponent 
 } from './core/layout';

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

const COMPONENTS_LOCAL = [
  LoaderComponent,
  ShellMaterialComponent  ,
  HeaderMaterialComponent 
];

const COMPONENTS_DIRECTIVES = [
  BusyDirective
];

const COMPONENTS_LAYOUTS = [
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
    MaterialModules,
    COMPONENTS_LOCAL, 
    COMPONENTS_LAYOUTS],
  declarations: [
    COMPONENTS_LOCAL,     
    COMPONENTS_LAYOUTS,
    COMPONENTS_DIRECTIVES]  
})
export class FabricModule { }
