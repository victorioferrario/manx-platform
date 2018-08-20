import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
// 
import { FabricModule } from '@hubx/fabric';
/**
 * Components
 */
import { VendorRoutingModule } from './vendor-routing.module';
import {
  VendorMainComponent   ,  
  DashboardComponent    ,
  ProductsComponent     ,
} from './vendor-components';
/**
 * @var: COMPONENTS_BUYER
 * @description: Array of buyer components.
 */
export const COMPONENTS_VENDOR = [
  VendorMainComponent   ,
  DashboardComponent    ,
  ProductsComponent     ];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FabricModule,
    VendorRoutingModule
  ],
  declarations: [
    COMPONENTS_VENDOR],
  exports: [
    COMPONENTS_VENDOR]
})
export class VendorModule { }
