import { IVendor } from './IVendor';
import { IPoStatus } from './IPoStatus';
export interface IPoFilter {
    status?: IPoStatus;
    vendor?: IVendor;
    searchString?: string;
}