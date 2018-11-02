import { domain_environment as Config } from '../domain.configuration';
export class Configuration {
    public static RestApiBase = 'api/template/';
    public static RestApiGetItem = 'Item/';
    public static RestApiGetAllItems = 'Items/';  
    public static RestApiUpdateItem = 'ItemUpdate/';    
   
    public static Endpoint  = Config.genericBaseUrl + Configuration.RestApiBase;
    public static GetItemUrl = Configuration.Endpoint + Configuration.RestApiGetItem;
    public static GetAllItemsUrl = Configuration.Endpoint + Configuration.RestApiGetAllItems;
    public static UpdateItemUrl = Config.genericBaseUrl + Configuration.RestApiUpdateItem;
}