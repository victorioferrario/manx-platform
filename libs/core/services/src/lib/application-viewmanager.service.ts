import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AreaView, BuyerViewSection, VendorViewSection } from './models/enums';

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
}
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
  constructor() {
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
}

// IViewContext, ViewContext
