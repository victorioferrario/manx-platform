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
  ItemComponent       ,
  ViewComponent       ,  
  ChildComponent      ,  
  ContentComponent    ,
  ElementComponent    ,
  FragementComponent  } from './layout';
import {
    ShellComponent        ,
    HeaderComponent       ,
    SubHeaderComponent    ,
    SideMenuComponent     ,
    DevToolbarComponent   } from './layout/template';
/**
 * @const: COMPONENT_ELEMENTS
 * @description: elements reference array
 */
const COMPONENT_ELEMENTS = [ 
  ViewComponent     ,
  ItemComponent     ,
  ChildComponent    ,
  ContentComponent  ,
  ElementComponent  ,
  FragementComponent];  
/**
 * @const: COMPONENT_TEMPLATES
 * @description: layout templates reference array
 */  
const COMPONENT_TEMPLATES = [
  LoaderComponent     ,
  ShellComponent      ,
  HeaderComponent     ,
  SideMenuComponent   ,
  SubHeaderComponent  ,
  DevToolbarComponent ,
];
/**
 * @const: COMPONENTS_DIRECTIVES
 * @description: directive reference array
 */
const COMPONENTS_DIRECTIVES = [
  BusyDirective
];
/**
 * Ng module
 */
@NgModule({
  imports: [
    CommonModule, 
    ServicesModule,
    MaterialModules],    
  exports: [
    MaterialModules,
    COMPONENT_ELEMENTS, 
    COMPONENT_TEMPLATES],
  declarations: [
    COMPONENT_ELEMENTS,   
    COMPONENT_TEMPLATES,
    COMPONENTS_DIRECTIVES]  
})
export class FabricModule { }
