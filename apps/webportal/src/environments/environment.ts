// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  name: "dev",
  production: false,
  buyerPortalBaseUrl: "https://buyer-dev.hubx.com/api/",
  vendorPortalBaseUrl: "https://vendor-dev.hubx.com/api/vendor/",
  adminUrl: "https://admin-dev.hubx.com/api/",
  adminBaseUrl: "https://admin-dev.hubx.com/",
  imageBaseUrl: "https://cdn.hubx.com",
  bulkuploadURL: "https://buyer-dev.hubx.com/api/",
  imageDefaultLogoUrl: "/assets/images/item-placeholder.svg",
  auth0_Domain: "hubx.auth0.com",
  auth0_ClientID: "rIeqroV4uPabecbaSNqm3OfH3ERaDK5e",
  auth0_realm: "Username-Password-Authentication",
  auth0_RedirectUrl: "http://localhost:4200/callback",
  auth0_RedirectUrl_LocalHost: "http://localhost:4200/callback",
  itemsInPage: 9999,
  globalSearchIndicator: "#"  ,
  hmr: false,
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
