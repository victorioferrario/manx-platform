import { BehaviorSubject, Observable } from 'rxjs';
import { IViewContext} from '../../interfaces';
import { AreaView, BuyerViewSection, VendorViewSection } from '../../models/enums';
export class ViewContext implements IViewContext {
    /**
    * @property: active;
    * @example: AreaView {
    *  Login = 'Login',
    *  Buyer = 'Buyer',
    *  Vendor = 'Vendor'
    * }
    */
    active: BehaviorSubject<AreaView>;
    /**
     * @property: activeSection;
     * @example: BuyerViewSection.Cart | VendorViewSection.Orders
     */
    activeSection: BehaviorSubject<BuyerViewSection | VendorViewSection>;
    /**
     * constructor
     */
    constructor() {
      const self = this;
      self.active = new BehaviorSubject<AreaView>(AreaView.Login);
      self.activeSection = new BehaviorSubject<BuyerViewSection>(BuyerViewSection.Dashboard);
      self.active.asObservable();
      self.activeSection.asObservable();
    }
    update(newActive?: AreaView | null, newSection?: BuyerViewSection | VendorViewSection) {
      const self = this;
      if(newActive!==null){
         self.active.next(newActive);}
      self.activeSection.next(newSection);
    }
  }