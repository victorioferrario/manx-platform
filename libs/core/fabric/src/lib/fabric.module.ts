import { NgModule         } from '@angular/core';
import { CommonModule     } from '@angular/common';
import { MaterialModules  } from './material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
/**
 * @desc: Collection of Local Componetes
 */
import { ContentComponent } from './layout/elements';
import {
  COLLECTION_CORE_ANIMATIONS,
  COLLECTION_CORE_COMPONENTS,
  COLLECTION_LAYOUT_ELEMENTS,
  COLLECTION_LAYOUT_TEMPLATES,
  COLLECTION_ENTRY_COMPONENTS, } from './fabric.constants';
import {
  ApplicationContext,
  ServicesModule
} from '@hubx/services';
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
    COLLECTION_CORE_COMPONENTS,
    COLLECTION_LAYOUT_ELEMENTS,
    COLLECTION_LAYOUT_TEMPLATES],
  providers:[ApplicationContext],
  declarations: [
    COLLECTION_CORE_COMPONENTS,
    COLLECTION_LAYOUT_ELEMENTS,
    COLLECTION_LAYOUT_TEMPLATES],
  entryComponents:[
    COLLECTION_ENTRY_COMPONENTS]
})
export class FabricModule {
}
