import { IVendorPromo} from './IVendorPromo';
import { IVendorItemInfo } from './IVendorItemInfo';
import { IVendorManufacturer } from './IVendorManufacturer';
import { IPaginationResponse } from './IPaginationResponse';
export interface IVendorItem {
    items?: IVendorItemInfo[];
    manufacturers?: IVendorManufacturer[];
    promos?: IVendorPromo[];
    pagination?: IPaginationResponse;
  }
