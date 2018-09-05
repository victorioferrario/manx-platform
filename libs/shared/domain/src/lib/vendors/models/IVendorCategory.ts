export interface IVendorCategory {
    navId?: string;
    categoryId?: string;
    name?: string;
    children?: IVendorSubCategory[];
}
export interface IVendorSubCategory {
    navId?: string;
    categoryId?: string;
    name?: string;
}