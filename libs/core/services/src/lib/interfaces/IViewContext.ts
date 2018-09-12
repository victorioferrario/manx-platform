import { BehaviorSubject, Observable } from 'rxjs';
import { AreaView, BuyerViewSection, VendorViewSection } from '../models/enums';
export interface IViewContext {
    loading: BehaviorSubject<boolean>;
    active: BehaviorSubject<AreaView>;
    activeSection: Observable<BuyerViewSection | VendorViewSection>;
    update(newActive: AreaView, newSection?: BuyerViewSection | VendorViewSection): void;
}
