import { IVendorItemInformationRequest } from './IVendorItemInformationRequest';
import { IInventoryRequest } from './IInventoryRequest';
import { IPriceRequest } from './IPriceRequest';
import { IVendorStatusRequest } from './IVendorStatusRequest';
export interface IVendorItemRequest {
    id?: string;
    version?: string;
    itemInformation?: IVendorItemInformationRequest;
    inventory?: IInventoryRequest;
    pricing?: IPriceRequest;
    status?: IVendorStatusRequest;
}

// import { IVendorItemRequest} from './IVendorItemRequest';
// export { IVendorItemRequest} from './IVendorItemRequest';
