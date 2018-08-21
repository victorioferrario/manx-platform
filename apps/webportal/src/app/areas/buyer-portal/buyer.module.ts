import { ApplicationContext } from '@hubx/services';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
//
import { FabricModule } from '@hubx/fabric';

/**
 * Components
 */
import { BuyerRoutingModule } from './buyer-routing.module';
///
import {
  BuyerMainComponent  , 
  CartComponent       ,  
  DashboardComponent  ,
  MyProfileComponent
} from './buyer-components';
/**
 * @var: COMPONENTS_BUYER
 * @description: Array of buyer components.
 */
export const COMPONENTS_BUYER = [
  BuyerMainComponent , 
  CartComponent      ,
  DashboardComponent ,
  MyProfileComponent ];
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FabricModule,
    BuyerRoutingModule
  ],
  providers:[ ApplicationContext],
  declarations: [
    COMPONENTS_BUYER],
  exports: [
    COMPONENTS_BUYER]
})
export class BuyerModule { }
