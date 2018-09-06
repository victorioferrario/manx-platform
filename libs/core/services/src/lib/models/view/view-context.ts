import { BehaviorSubject, Observable } from 'rxjs';
import { IViewContext} from '../../interfaces';
import { AreaView, BuyerViewSection, VendorViewSection } from '../../models/enums';
export class ViewContext implements IViewContext {
    loading: BehaviorSubject<boolean>;
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
      
      self.loading = new BehaviorSubject<boolean>(false);

      self.active = new BehaviorSubject<AreaView>(
        AreaView.Login);

      self.activeSection = new BehaviorSubject<VendorViewSection>(
        VendorViewSection.Dashboard);

        self.loading.asObservable();

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