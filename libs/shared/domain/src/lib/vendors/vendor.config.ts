import { domain_environment as Config } from '../domain.configuration';
export class Configuration {
    public static RestApiPo = 'po/';
    public static RestApiVendorId = 'VendorItem/';
    public static RestApiItems = 'VendorItem/Items';    
    public static RestApiGetAllVendors = 'VendorItem/sellers';
    public static RestApiVendorStaticInfo = 'VendorItem/staticInfo';    
    public static RestApiUpdateVendorItem = 'VendorItem/internalVendorItem';

    public static GetPoUrl = Config.vendorUrl + Configuration.RestApiPo;
    public static GetItemsUrl = Config.vendorUrl + Configuration.RestApiItems;
    public static GetItemsByIdUrl = Config.vendorUrl + Configuration.RestApiVendorId;
    public static SetTrackingToPurchaseOrder = Config.vendorUrl + Configuration.RestApiPo;
    public static GetAllVendorsUrl = Config.vendorUrl + Configuration.RestApiGetAllVendors;
    public static UpdateVendorItem = Config.vendorUrl + Configuration.RestApiUpdateVendorItem;
    public static GetVendorStaticInfo = Config.vendorUrl + Configuration.RestApiVendorStaticInfo;
}