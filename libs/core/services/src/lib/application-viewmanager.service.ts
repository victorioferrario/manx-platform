import { Injectable, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { IApplicationContext } from './interfaces/IApplicationContext';
import { IActionEmitter, ActionEmitter } from './core/emitters';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
// import {
//   Actions_UI,
//   ModeEnum,
//   MenuAction,
//   Layout,
//   ILayoutProps,
//   AuthAction,
//   UserIdentityRole
// } from './models';  AreaView, BuyerViewSection
export enum AreaView {
  Login = 'Login',
  Buyer = 'Buyer',
  Vendor = 'Vendor'
}
export enum BuyerViewSection {
  Dashboard = 'Dashboard',
  Cart = 'Cart',
  Account = 'Acount',
  Profile = 'Profile',
  Orders = 'Orders',
  OrderDetails = 'OrderDetails'
}
export enum VendorViewSection {
  Dashboard = 'Dashboard',
  Products = 'Products',
  Account = 'Acount',
  Profile = 'Profile',
  Orders = 'Orders',
  OrderDetails = 'OrderDetails'
}

export interface IApplicationViewContext {
  active: Observable<string>;
  activeSection: Observable<BuyerViewSection | VendorViewSection>;
}

// import { ISession, Session } from './models/session/session';
// import { LayoutAction } from './models/ui/layout.actions';
// import { ViewStateEnum } from './models/view';

@Injectable({
  providedIn: 'root'
})
export class ApplicationViewContext implements IApplicationViewContext {
  active: BehaviorSubject<AreaView> = new BehaviorSubject<AreaView>(
    AreaView.Login
  );
  activeSection: BehaviorSubject<
    BuyerViewSection | VendorViewSection
  > = new BehaviorSubject<BuyerViewSection>(BuyerViewSection.Dashboard);
  constructor() {
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
}
