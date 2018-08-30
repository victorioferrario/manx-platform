
/**
 * Under Heavy development @ApplicationViewContext.
 * @classdesc: It's a mess, don't hurt your eyes.
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AreaView, BuyerViewSection, VendorViewSection } from './models/enums';
import { ApplicationContext } from './application-context.service';
import { Router } from '@angular/router';
export interface IViewContext {
  active: BehaviorSubject<AreaView>;
}

export class ViewContext implements IViewContext {
  active: BehaviorSubject<AreaView> = new BehaviorSubject<AreaView>(
    AreaView.Login
  );
}

export interface IApplicationViewContext {  
  active: Observable<string>;
  activeSection: Observable<BuyerViewSection | VendorViewSection>;
  activateView(
    newActive: AreaView,
    newSection?: BuyerViewSection | VendorViewSection
  ): void;
  activateSection(arg: BuyerViewSection | VendorViewSection): void;
  navigate(url:string, newSection?: BuyerViewSection | VendorViewSection):void;
}
/**
 * Injectable @class of @ApplicationViewContext.
 * @description:I believe i am going to extract all the route changing from the components, 
 * and handle it all here. That way we have full control over slow loading items, 
 * or need to change some global properties, we do it all here.
 */
@Injectable({
  providedIn: 'root'
})
export class ApplicationViewContext implements IApplicationViewContext {
  view: ViewContext;
  active: BehaviorSubject<AreaView> = new BehaviorSubject<AreaView>(
    AreaView.Login
  );
  activeSection: BehaviorSubject<
    BuyerViewSection | VendorViewSection
  > = new BehaviorSubject<BuyerViewSection>(BuyerViewSection.Dashboard);
  constructor(public router: Router, public ctx: ApplicationContext,) {
    this.view = new ViewContext();
    this.active.asObservable();
    this.activeSection.asObservable();
  }
  public activateView(
    newActive: AreaView,
    newSection?: BuyerViewSection | VendorViewSection
  ) {
    this.active.next(newActive);
    this.activeSection.next(newSection);
  }
  public activateSection(newSection: BuyerViewSection | VendorViewSection) {
    this.activeSection.next(newSection);
  }
  public navigate(url:string, newSection?: BuyerViewSection | VendorViewSection){
    this.router.navigate([url]);   
    if(newSection){
      this.activeSection.next(newSection);
    } 
    this.ctx.ux.props.changeOpenedState();
  }
}