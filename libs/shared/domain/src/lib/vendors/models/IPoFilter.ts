import { IVendor } from './IVendor';
import { IPoStatus } from './IPoStatus';
export interface IPoFilter {
    status?: IPoStatus;
    vendor?: IVendor;
    searchString?: string;
}
// import { IPoFilter } from './IPoFilter';
// export { IPoFilter } from './IPoFilter';