import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { DashboardComponent, OrdersComponent, ProductsComponent, ProfileComponent } from '@manx/areas/vendor';
import { FabricModule } from '@manx/fabric';

import { VendorMainComponent } from './components/main/main.component';
import { VendorRoutingModule } from './vendor.routing.module';

//
/**
 * Components
 */
//
/**
 * @var: COMPONENTS_BUYER
 * @description: Array of buyer components.
 */
export const COMPONENTS_VENDOR = [VendorMainComponent, DashboardComponent, OrdersComponent, ProductsComponent, ProfileComponent];
@NgModule({
  imports: [CommonModule, RouterModule, FlexLayoutModule, FabricModule, VendorRoutingModule],
  declarations: [COMPONENTS_VENDOR],
  exports: [COMPONENTS_VENDOR]
})
export class VendorModule {}
