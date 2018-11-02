// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  name: 'dev',
  production: false,
  buyerPortalBaseUrl: 'https://manx.com/api/',
  vendorPortalBaseUrl: 'https://manx.com/api/vendor/',
  adminUrl: 'https://manx.com/api/',
  adminBaseUrl: 'https://manx.com/',
  imageBaseUrl: 'https://cdn.manx.com',
  bulkuploadURL: 'https://manx.com/api/',
  imageDefaultLogoUrl: '/assets/images/item-placeholder.svg',
  auth0_Domain: 'manx.auth2.com',
  auth0_ClientID: '23rsdf234D#fds2344324wsef',
  auth0_realm: 'Username-Password-Authentication',
  auth0_RedirectUrl: 'http://localhost:4200/callback',
  auth0_RedirectUrl_LocalHost: 'http://localhost:4200/callback',
  itemsInPage: 9999,
  globalSearchIndicator: '#',
  hmr: false
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
