
import { domain_environment as Config } from '../domain.configuration';
export interface IUserConfiguration {
    AutoBindAll:string;
    RestApiVerb: string;
    RestApiCustomer:string;
    RestApiCustomerSelect:string;
    RestApiBusinessPartner:string;
}
export class UserConfiguration {
    public static AutoBindAll = '?showAll=true';
    public static RestApiVerb = "users";
    public static RestApiCustomer = "users/customers";
    public static RestApiCustomerSelect  = 'users/impersonate/';
    public static RestApiBusinessPartner = "businessPartners";
    public static CurrentCustomer = "";
    public static GetUserProfileUrl = Config.apiUrl + UserConfiguration.RestApiVerb;    
    public static GetCustomersUrl = Config.apiUrl + UserConfiguration.RestApiCustomer; 
    public static SelectCustomerUrl = Config.apiUrl + UserConfiguration.RestApiCustomerSelect
    public static GetBusinessProfileUrl = Config.baseUrl + UserConfiguration.RestApiBusinessPartner;     
}