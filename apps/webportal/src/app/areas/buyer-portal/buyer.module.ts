import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import {
  BreadCrumbsComponent,
  CartComponent,
  DashboardComponent,
  DescriptionComponent,
  ItemListComponent,
  MyaccountComponent,
  MyprofileComponent,
  OrderDetailComponent,
  OrdersComponent,
  PaginationComponent,
  QuickSortComponent,
} from '@manx/areas/buyers';
import { FabricModule } from '@manx/fabric';
import { ApplicationContext } from '@manx/services';

import { BuyerRoutingModule } from './buyer.routing.module';
import { BuyerMainComponent } from './components/main/main.component';

/**
 * @var: COMPONENTS_BUYER
 * @description: Array of buyer components.
 */
export const COMPONENTS_BUYER = [
  ItemListComponent,
  DescriptionComponent,
  QuickSortComponent,
  BreadCrumbsComponent,
  PaginationComponent,
  CartComponent,
  OrdersComponent,
  DashboardComponent,
  MyprofileComponent,
  MyaccountComponent,
  BuyerMainComponent,
  OrderDetailComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, FlexLayoutModule, FabricModule, OverlayModule, PortalModule, BuyerRoutingModule],
  providers: [ApplicationContext],
  declarations: [COMPONENTS_BUYER],
  entryComponents: [],
  exports: [COMPONENTS_BUYER]
})
export class BuyerModule {}
