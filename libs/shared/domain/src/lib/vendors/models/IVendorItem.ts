import { IPaginationResponse } from '../../shared/models';
import { IVendorItemInfo } from './IVendorItemInfo';
import { IVendorManufacturer } from './IVendorManufacturer';
import { IVendorPromo } from './IVendorPromo';

export interface IVendorItem {
  items?: IVendorItemInfo[];
  manufacturers?: IVendorManufacturer[];
  promos?: IVendorPromo[];
  pagination?: IPaginationResponse;
}
