import { Observable } from 'rxjs';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { UserConfiguration as Config } from '../user.config';
import { IBusinessProfile, ICustomer, IUserProfile } from '../models';
import { HttpBaseClient, HttpBaseOptions, IHttpBaseOptions } from '../../core/HttpBaseClient';
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