import { IKeyValue } from './IKeyValue';
import  { IVendorSalesInfo } from './IVendorSalesInfo';
import { IVendorItemPrice } from './IVendorItemPrice';
import { IVendorItemStatus } from './IVendorItemStatus';
import { IVendorItemAttributes } from './IVendorItemAttributes';
import { IVendorInventoryInfo} from './IVendorInventoryInfo';
import { ILoadValidationError } from './ILoadValidationError';
export interface IVendorItemInfo {
    id?: string;
    version?: string;
    vendorItemCode?: string;
    description?: string;
    manufacturer?: string;
    mpn?: string;
    cost?: number;
    unitPrice?: number;
    status?: IVendorItemStatus;
    statusCode?: number;
    inventoryInfo?: IVendorInventoryInfo;
    lastActivatedOn?: string;
    lastUpdatedOn?: string;
    updatedNow?: boolean;
    prices?: IVendorItemPrice[];
    attributes?: IVendorItemAttributes[];
    salesInfo?: IVendorSalesInfo;
    errors?: ILoadValidationError;
    errorIndex?: number;
    categories?: string[];
    selected?: boolean;
    showError?: boolean; // indicates whether to show the errors list on a single item
    seller?: IKeyValue;
    manufacturerLogoUrl?: string;
    moq?: number;
  }
//  import { IVendorItemInfo } from './IVendorItemInfo';
  // export { IVendorItemInfo } from './IVendorItemInfo';