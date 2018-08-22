import { ApplicationContext } from '@hubx/services';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";
//

import { FabricModule } from '@hubx/fabric';
import {OverlayContainer, FullscreenOverlayContainer, OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';

import { LoaderComponent} from '../../shared/components/loader/loader.component';
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
  LoaderComponent,
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
