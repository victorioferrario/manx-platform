import { environment } from "../../../../../../apps/webportal/src/environments/environment";

export interface IAuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  callbackURL_localHost: string;
  realm: string;
}

export const AUTH_CONFIG: IAuthConfig = {
  clientID: environment.auth0_ClientID,
  domain: environment.auth0_Domain,
  callbackURL: environment.auth0_RedirectUrl,
  callbackURL_localHost: environment.auth0_RedirectUrl_LocalHost,
  realm: environment.auth0_realm
};


// { IAuthConfig, AUTH_CONFIG }
