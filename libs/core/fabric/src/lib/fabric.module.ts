import { MainComponent } from './layout/template/main/main.component';
import { NgModule        } from '@angular/core';
import { CommonModule    } from '@angular/common';
import { MaterialModules } from './material.module';
import { FlexLayoutModule } from "@angular/flex-layout";

// @Collection: Local Modules
import { 
  ApplicationContext,
  ServicesModule  
} from '@hubx/services';
// @Collection: Local Components
import { 
  LoaderComponent 
} from './components';
import {ConfirmLogoutDialogComponent} from "./layout/template/dialog/confirm-logout.dialog";
// @Collection: Local Directives
import { 
  BusyDirective   
} from './directives/busy.directive';
/**
 * layout components
 */
import {
  ItemComponent           ,
  ViewComponent           ,  
  TitleComponent          ,
  ChildComponent          ,  
  ContentComponent        ,
  ElementComponent        ,
  FragementComponent      ,
  PageTitleComponent      ,  
  SectionTitleComponent       
} from './layout';
/**
 * template components
 */
import {
    ShellComponent        ,
    HeaderComponent       ,
    SubHeaderComponent    ,
    MenuComponent         ,
    SideMenuComponent     ,
    DevToolbarComponent   } from './layout/template';

    import { slideAnimation} from './layout/util/slide.animation';
import { AnimationProvider } from './animations/animation.provider';
/**
 * COMPONENT_ELEMENTS
 * @description: elements reference array
 */
const COMPONENT_ELEMENTS = [ 
  ViewComponent       ,
  ItemComponent       ,
  ChildComponent      ,
  TitleComponent      ,
  ContentComponent    ,
  ElementComponent    ,
  FragementComponent  ,
  PageTitleComponent   ,  
  SectionTitleComponent       
];  
/**
 * COMPONENT_TEMPLATES
 * @description: layout templates reference array
 */  
const COMPONENT_TEMPLATES = [
  ConfirmLogoutDialogComponent,
  LoaderComponent     ,
  MainComponent       ,
  ShellComponent      ,
  HeaderComponent     ,
  MenuComponent       ,
  SideMenuComponent   ,
  SubHeaderComponent  ,
  DevToolbarComponent ,
];
/**
 * COMPONENTS_DIRECTIVES
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
    FlexLayoutModule,
    MaterialModules],    
  exports: [    
    MaterialModules,
    COMPONENT_ELEMENTS, 
    COMPONENT_TEMPLATES,
    COMPONENTS_DIRECTIVES],
  providers:[ApplicationContext , AnimationProvider ],
  declarations: [
    COMPONENT_ELEMENTS,   
    COMPONENT_TEMPLATES,
    COMPONENTS_DIRECTIVES]  ,
    entryComponents:[LoaderComponent, ConfirmLogoutDialogComponent]
})
export class FabricModule {   
}
