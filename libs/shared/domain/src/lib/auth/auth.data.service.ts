import { Injectable, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '@hubx/infrastructure';
import { IAuthEvent, IAuthDataContext, UserIdentityRole } from './models';
/**
 * Injectable
 */
@Injectable({
  providedIn: 'root'
})
export class AuthDataContext implements IAuthDataContext {
  /**
   * Dispatch  of auth data context
   * @type: IAuthEvent
   */
  dispatch: EventEmitter<IAuthEvent>;  
  /**
   * Creates an instance of auth data context.
   * @param auth 
   */
  constructor(public auth: AuthenticationService) {
    const self = this;    
    this.dispatch = new EventEmitter<IAuthEvent>();
    self.auth.dispatch.subscribe((event: any) => {
      const role =
        event.role === 'ADMIN'
          ? UserIdentityRole.Vendor
          : UserIdentityRole.Buyer;
      const route = event.role === 'ADMIN' ? '/vendor' : '/buyer';            
      self.dispatch.emit({
        role: role,
        route: route
      });     
    });  
  }  
  /**
   * Logins auth data context
   * @param email 
   * @param password 
   * @returns  
   */
  public login(email: string, password: string) {
    const self = this;
    if (self.auth.clearSession()) {
      return self.auth.login(email, password); 
    }
    return false;
  }  
  /**
   * Calls underlying authservice
   * @returns true if authenticated 
   */
  public isAuthenticated(): boolean {
    const self = this;
    return self.auth.isAuthenticated();    
  }
  public getAccessToken(): string {
    const self = this;
    return self.auth.getAccessToken();
  }
}
