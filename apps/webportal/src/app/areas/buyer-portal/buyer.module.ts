import { ApplicationContext } from '@hubx/services';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
//

import { FabricModule } from '@hubx/fabric';
import {OverlayContainer, FullscreenOverlayContainer, OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';
/**
 * Components
 */
import { 
  BuyerRoutingModule 
} from './buyer.routing.module';
//
import {
  BuyerMainComponent    
} from './components/main/main.component';
///
import {
  CartComponent       ,
  DashboardComponent  ,
  MyaccountComponent  ,
  MyprofileComponent  ,
  OrdersComponent     ,
  OrderDetailComponent  } from '@hubx/areas/buyers'; 
  
/**
 * @var: COMPONENTS_BUYER
 * @description: Array of buyer components.
 */
export const COMPONENTS_BUYER = [  
  BuyerMainComponent,
  CartComponent       ,
  DashboardComponent  ,
  MyprofileComponent  ,
  MyaccountComponent  ,
  OrdersComponent     ,
  OrderDetailComponent ];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FabricModule,
    OverlayModule,
    PortalModule,
    BuyerRoutingModule
  ],
  providers:[ ApplicationContext],
  declarations: [
    COMPONENTS_BUYER],
    entryComponents:[],
  exports: [
    COMPONENTS_BUYER]
})
export class BuyerModule { }
