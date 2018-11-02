# AppPlatform

 <code-example path="libs/core/services/src/lib/application-base.context.ts">
 
 </code-example>


 ```

 typedoc --out documentation-typedoc/ apps/webportal

 ```


# Tools
 [AngularConsole](https://angularconsole.com/)    


# Workspace              


## Creating Reusable Http Communication
```ts
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpBaseOptions, IHttpBaseClient, IHttpBaseOptions } from './models';
/**
 * @class : HttpBaseClient
 * @desc  : HttpBaseClient that provides http service to all domain logic services.
 */
@Injectable({
  providedIn: 'root'
})
export abstract class HttpBaseClient implements IHttpBaseClient{
  constructor(private http: HttpClient) { }
  get<T>(options: HttpBaseOptions): Observable<T> {
    return this.http.get<T>(options.url).pipe(share());
  }
  post<T>(options: HttpBaseOptions): Observable<T> {
    return this.http.post<T>(options.url, options.body).pipe(share());
  }
  put<T>(options: HttpBaseOptions): Observable<T> {
    return this.http.put<T>(options.url, options.body).pipe(share());
  }
  delete<T>(options: HttpBaseOptions): Observable<T> {
    return this.http.delete<T>(options.url).pipe(share());
  }
}
```

## Example implementation of HttpBaseClient

```ts
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Configuration as Config } from './template.config';
import { HttpBaseClient, HttpBaseOptions, IHttpBaseOptions } from '../core';
import { ITemplateItem, ITemplateSearch, ITemplateUpdateItemRequest, ITemplateUpdateItemResponse} from './models';
export interface ITemplateDataContext {
  /**
   * @param id: number
   * @returns: Observable<IPo>;
   */
  getTemplateById(id: number): Observable<ITemplateItem>;
  /**
   * @param search
   * @returns: Observable<ITemplateItem[]>;
   */
  getTemplateItems(search: ITemplateSearch): Observable<ITemplateItem[]>;
  /**
   * @param templateItem: ITemplateUpdateItemRequest
   * @returns: Observable<boolean>;
   */
  updateTemplateItem(templateItem: ITemplateUpdateItemRequest): Observable<ITemplateUpdateItemResponse>;
}
@Injectable({
  providedIn: 'root'
})
export class TemplateDataContext implements ITemplateDataContext {
  public options: IHttpBaseOptions;
  constructor(private baseClient: HttpBaseClient) {
    this.options = new HttpBaseOptions();
  }
  public getTemplateById(id: number): Observable<ITemplateItem> {
    const self = this;
    self.options.url = Config.GetItemUrl + id;
    return self.baseClient.get<ITemplateItem>(self.options);
  }
  public getTemplateItems(search: ITemplateSearch): Observable<ITemplateItem[]> {
    const self = this;
    self.options.body = search;
    self.options.url = Config.GetAllItemsUrl;
    return self.baseClient.get<ITemplateItem[]>(self.options);
  }
  public updateTemplateItem(templateItem: ITemplateUpdateItemRequest): Observable<ITemplateUpdateItemResponse> {
    const self = this;
    self.options.url = Config.UpdateItemUrl;
    self.options.body = templateItem;
    return self.baseClient.post<ITemplateUpdateItemResponse>(self.options);
  }
}
```

## Routing & Navigation is controlled via ApplicationViewContext

```ts
/**
 * Injectable @class of @ApplicationViewContext.
 * @description:I believe i am going to extract all the route changing from the components,
 * and handle it all here. That way we have full control over slow loading items,
 * or need to change some global properties, we do it all here.
 */
@Injectable({
  providedIn: 'root'
})
export class ApplicationViewContext implements IApplicationViewContext {
  /**
   * @type: ViewContext
   */
  viewContext: IViewContext;
  /**
   * @param ctx
   * @param router
   */
  constructor(public ctx: ApplicationContext, public itx: ApplicationInsightsService, public router: Router) {
    this.viewContext = new ViewContext();
    // const injector = ReflectiveInjector.resolveAndCreate([
    // 	itx
    // ]);
    // this.myMonitoringService = injector.get(MyMonitoringService);
  }
  /**
   * @method: activateView
   * @param newActive
   * @param newSection
   */
  public activateView(newActive: AreaView, newSection?: BuyerViewSection | VendorViewSection) {
    this.viewContext.update(newActive, newSection);
  }
  /**
   * @method: activateSection
   * @param newSection
   */
  public activateSection(newSection: BuyerViewSection | VendorViewSection) {
    this.processJWT();
    this.viewContext.update(null, newSection);
  }
  /**
   * @method:navigate
   * @param url
   * @param newSection
   */
  public navigate(url: string, newSection?: BuyerViewSection | VendorViewSection) {
    const self = this;
    this.processJWT();
    if (newSection) {
      self.viewContext.update(self.viewContext.active.value, newSection);
    }
    self.router.navigate([url]);
    self.itx.logPageView(newSection, url, this.ctx.session.userIdentity.role);
    self.ctx.ux.props.changeOpenedState();
  }
  /**
   *
   * @param url
   * @param newActive
   * @param newSection
   */
  public navigateUpdateView(url: string, newActive: AreaView) {
    const self = this;
    const areaView = newActive === AreaView.Buyer ? BuyerViewSection.Dashboard : VendorViewSection.Dashboard;
    this.viewContext.update(newActive, areaView);

    self.router.navigate([url]);
    self.ctx.ux.props.changeOpenedState();
    self.itx.logPageView(areaView, url, this.ctx.session.userIdentity.role);
  }
  private processJWT() {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.ctx.identity.token());
    this.itx.setAuthenticatedUserId(decodedToken['https://www.manx.com/app_metadata'].UserId);
  }
  /**
   * Loading application view context
   * @param value
   */
  loading(value: boolean) {
    this.viewContext.loading.next(value);
  }
}
```

## Angular Enterprise Application Architecture

| Project Library                                                                                                                | Description                                                                                     | Type        |
|--------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|-------------|
| [Webportal](https://github.com/victorioferrario/manx-platform/tree/master/apps/webportal)                                      | main application                                                                                | Application |
| Areas                                                                                                                          |                                                                                                 |             |
| [Buyer-Portal](https://github.com/victorioferrario/manx-platform/tree/master/libs/areas/buyer-portal)                          | library that runs the buyer-portal under the main app.                                          | Library     |
| [System &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://github.com/victorioferrario/manx-platform/tree/master/libs/areas/system) | Application Components of common functionality                                                  | Library     |
| [Vendor-Portal](https://github.com/victorioferrario/manx-platform/tree/master/libs/areas/vendor-portal)                        | library that runs the vendor-portal under the main app.                                         | Library     |
| Core                                                                                                                           |                                                                                                 |             |
| [Fabric](https://github.com/victorioferrario/manx-platform/tree/master/libs/core/fabric)                                       | Application UI Management & Core Components                                                     | Library     |
| [Fiber](https://github.com/victorioferrario/manx-platform/tree/master/libs/core/fiber)                                         | Application State Management                                                                    | Library     |
| [Services](https://github.com/victorioferrario/manx-platform/tree/master/libs/core/services)                                   | Application Context Provider                                                                    | Library     |
| Shared                                                                                                                         |                                                                                                 | Library     |
| [Domain](https://github.com/victorioferrario/manx-platform/tree/master/libs/shared/domain)                                     | To be created, then will be wired up inbetween Fiber & Services                                 | Library     |
| [Infrastructure](https://github.com/victorioferrario/manx-platform/tree/master/libs/shared/infrastructure)                     | Ideally these are low-level services, not consumed by ui components, but more over for services | Library     |

# Angular Enterprise Application Symbols

## Lib Import Definitions
```json
      "@manx/areas/buyers": [
        "libs/areas/buyer-portal/src/index.ts"
      ],
      "@manx/areas/vendor": [
        "libs/areas/vendor-portal/src/index.ts"
      ]
      "@manx/fabric": [
        "libs/fabric/src/index.ts"
      ],
       "@manx/fiber": [
        "libs/fiber/src/index.ts"
      ],
      "@manx/services": [
        "libs/services/src/index.ts"
      ],     
      "@manx/system": [
        "libs/system/src/index.ts"
      ] ,        
      "@manx/domain": [
        "libs/shared/domain/src/index.ts"
      ],
      "@manx/infrastructure": [
        "libs/shared/infrastructure/src/index.ts"
      ] 
```

ng generate @angular/material:material-nav --name toolbar
## @Angular DevKit
| Package                           | Version       |     |
|-----------------------------------|---------------|-----|
| @angular-devkit/architect         | 0.7.4         |     |
| @angular-devkit/build-angular     | 0.7.4         |     |
| @angular-devkit/build-ng-packager | 0.7.4         |     |
| @angular-devkit/build-optimizer   | 0.7.4         |     |
| @angular-devkit/build-webpack     | 0.7.4         |     |
| @angular-devkit/core              | 0.7.4         |     |
| @angular-devkit/schematics        | 0.7.4         |     |
| @angular/cdk                      | 6.4.6         |     |
| @angular/cli                      | 6.1.4         |     |
| @angular/flex-layout              | 6.0.0-beta.17 |     |
| @angular/material                 | 6.4.6         |     |
| @ngtools/json-schema              | 1.1.0         |     |
| @ngtools/webpack                  | 6.1.4         |     |
| @schematics/update                | .7.4          |     |
| @schematics/angular               | .7.4          |     |
| ng-packager                       | 3.0.6         |     |
| rxjs                              | 6.2.2         |     |
| webpack                           | 4.9.2         |     |
-----------------------------------------------------------
| @nrwl/nx    | 6.2.0 | |
| @ngrx/store | 6.0.1 | |





