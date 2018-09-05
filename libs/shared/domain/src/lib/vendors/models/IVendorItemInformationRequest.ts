import { IVendorItemAttributeRequest } from './IVendorItemAttributeRequest';
export interface IVendorItemInformationRequest {
    id?: string;
    itemCode?: string;
    vendorId?: string;
    name?: string;
    description?: string;
    mpn?: string;
    categoryId?: string;
    manufacturerId?: string;
    brand?: string;
    specialInstruction?: string;
    comment?: string;
    vendorAttributes?: IVendorItemAttributeRequest[];
}
