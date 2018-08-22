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
//
import {
  VendorMainComponent    
} from './vendor-components';
import {
  DashboardComponent   ,   
  OrdersComponent      ,   
  ProductsComponent    ,   
  ProfileComponent       } from '@hubx/areas/vendor';
/**
 * @var: COMPONENTS_BUYER
 * @description: Array of buyer components.
 */
export const COMPONENTS_VENDOR = [
  VendorMainComponent  ,
  DashboardComponent   ,
  OrdersComponent      ,
  ProductsComponent    ,
  ProfileComponent      
 ];
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
