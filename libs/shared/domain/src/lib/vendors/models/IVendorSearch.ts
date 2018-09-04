
export interface IFilters {    
    status?: number;    
    promoId?: string;
    vendorId?: string;
    dateRange?:IDateRange;    
    categoryIds?: string[];
    businessStatus?: number;
    manufacturerId?: string;    
}
export interface IDateRange{
    start: string;
    end: string;
}
export interface IPagination{
    pageSize: number;
    pageNumber: number;
}
export interface IVendorSearch {
    fields?: string;
    orderBy?: string;
    searchQuery?: string;
    filters: IFilters;
    pagination:IPagination; 
}

// export { IVendorSearch, IFilters, IPagination, IDateRange} from './IVendorSearch'