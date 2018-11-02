import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BreadCrumbsComponent } from './bread-crumbs/bread-crumbs.component';
import { ItemListComponent } from './item-list.component';
import { QuickSortComponent } from './quick-sort/quick-sort.component';

@NgModule({
  imports: [CommonModule, BreadCrumbsComponent, ItemListComponent, QuickSortComponent],
  declarations: [BreadCrumbsComponent, ItemListComponent, QuickSortComponent],
  exports: [BreadCrumbsComponent, ItemListComponent, QuickSortComponent]
})
export class ItemsModule {}
