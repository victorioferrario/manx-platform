import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AreaView  , BuyerViewSection, VendorViewSection} from './models/enums';
export interface IApplicationViewContext {
  active: Observable<string>;
  activeSection: Observable<BuyerViewSection | VendorViewSection>;
}
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
    newSection?: BuyerViewSection | VendorViewSection) {
    this.active.next(newActive);
    this.activeSection.next(newSection);
  }
}
