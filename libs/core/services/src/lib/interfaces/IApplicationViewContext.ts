import { IViewContext } from './IViewContext';
import { AreaView, BuyerViewSection, VendorViewSection } from '../models/enums';
export interface IApplicationViewContext {
    viewContext:IViewContext;
    /**
     * @method: activateView
     * @param newActive
     * @param newSection
     */
    activateView(
      newActive: AreaView,
      newSection?: BuyerViewSection | VendorViewSection
    ): void;
    /**
     * @method: activateSection
     * @param arg
     */
    activateSection(arg: BuyerViewSection | VendorViewSection): void;
    /**
     * @method: navigate
     * @param url
     * @param newSection
     */
    navigate(url:string, newSection?: BuyerViewSection | VendorViewSection):void;
    navigateUpdateView(url: string, newActive: AreaView):void
  }
