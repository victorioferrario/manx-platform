import { Observable } from 'rxjs';
import { UserConfiguration as Config } from './user.config';
import { IBusinessProfile, ICustomer, IUserProfile } from './models';
import { HttpBaseClient, HttpBaseOptions, IHttpBaseOptions } from './../core/HttpBaseClient';
export interface IUserDataContext {
    /**
     * Gets the jwt token
     * @returns token 
     */
    token(): string;
    /**
     * Gets current logged in user role.
     * @returns role 
     */
    getRole(): string;
    /**
     * @property: options
     * @type: IHttpBaseOption
     */
    options: IHttpBaseOptions;
    /**
     * UserProfile of user
     * @returns user profile 
     */
    getUserProfile(): Observable<IUserProfile>;

    /**     
     * @param autoBind 
     * @returns ICustomer [] | ICustomer
     */
    getCustomers(autoBind: boolean): Observable<ICustomer[] | ICustomer>
    /**
     * Select Customer
     * @returns Observable<ICustomer> 
     */
    selectCustomers(code: string): Observable<ICustomer>
    /**
     * Profile of business
     * @returns Observable<IProfile> 
     */
    getBusinessProfile(): Observable<IBusinessProfile>;
}
export class UserDataContext implements IUserDataContext {
    public options: IHttpBaseOptions
    constructor(private baseClient: HttpBaseClient) {
        this.options = new HttpBaseOptions();
    }
    public token() {
        return sessionStorage.getItem('access_token');
    }
    public getRole(): string {
        return sessionStorage.getItem('user_role');
    }
    public getUserProfile(): Observable<IUserProfile> {
        const self = this;
        self.options.url = Config.GetUserProfileUrl;
        return self.baseClient.get<IUserProfile>(self.options);
    }
    public getCustomers(autoBind: boolean): Observable<ICustomer[] | ICustomer> {
        const self = this;
        self.options.url = Config.GetCustomersUrl + ((autoBind) ? Config.AutoBindAll : '');
        return self.baseClient.get<ICustomer[] | ICustomer>(self.options);
    }
    public selectCustomers(code: string): Observable<ICustomer> {
        const self = this;
        self.options.url = Config.SelectCustomerUrl + code;
        return self.baseClient.get<ICustomer>(self.options);
    }
    public getBusinessProfile(): Observable<IBusinessProfile> {
        const self = this;
        self.options.url = Config.GetBusinessProfileUrl;
        return self.baseClient.get<IBusinessProfile>(self.options);
    }
}

