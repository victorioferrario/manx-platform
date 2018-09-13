import { Observable } from 'rxjs';
import { IHttpBaseOptions } from '../../core';
import { IBusinessProfile, ICustomer, IUserProfile } from '../models';
export interface IUserDataContext {
    /**
     * @property: options
     * @type: IHttpBaseOption
     */
    options: IHttpBaseOptions;
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
