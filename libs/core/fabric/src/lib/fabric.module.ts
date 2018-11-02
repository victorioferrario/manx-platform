import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { UserStateModule } from '@manx/domain';
import { ApplicationContext, ServicesModule } from '@manx/services';
import { PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { COLLECTION_CORE_COMPONENTS, COLLECTION_ENTRY_COMPONENTS, COLLECTION_LAYOUT_ELEMENTS, COLLECTION_LAYOUT_TEMPLATES } from './fabric.constants';
import { MaterialModules } from './material.module';

/**
 * @desc: Collection of Local Componetes
 */
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
/**
 * Ng module
 */
@NgModule({
  imports: [CommonModule, ServicesModule, UserStateModule, PerfectScrollbarModule, FlexLayoutModule, MaterialModules],
  exports: [MaterialModules, COLLECTION_CORE_COMPONENTS, COLLECTION_LAYOUT_ELEMENTS, COLLECTION_LAYOUT_TEMPLATES],
  providers: [
    ApplicationContext,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  declarations: [COLLECTION_CORE_COMPONENTS, COLLECTION_LAYOUT_ELEMENTS, COLLECTION_LAYOUT_TEMPLATES],
  entryComponents: [COLLECTION_ENTRY_COMPONENTS]
})
export class FabricModule {}
