# AppPlatform

## To-Do:
- [x]  Auto-Switch - SideNav
- [X] Need to remove the fabric, and material UI shells.
- [X] Need to clean up hybrid UI, move it fully into fabric lib.
- [X] Automate or fix sub-header when collapsing.
- [X] Clean up fabric
- [X] Sunset alternative UIs
- [  ] State Store
- [  ] Create and build Fiber Lib.
- [ ] Bring in Authentication, and integrate with application Context.


## Angular Enterprise Application Architecture

| Project                         |    Description               | Type|
|---------------------------------|------------------------------|------|
|[Webportal](https://github.com/victorioferrario/hubx-platform/tree/master/apps/webportal)	|  main application |Application |
| Sub Applications |||
|[Buyer-Portal App ](https://github.com/victorioferrario/hubx-platform/tree/master/libs/areas/buyer-portal)	| library that runs the buyer-portal under the main app. |Library |
|[Vendor-Portal App](https://github.com/victorioferrario/hubx-platform/tree/master/libs/areas/vendor-portal)	| library that runs the vendor-portal under the main app. |Library |
| Data |||
| [ Domain-NA ] | To be created, then will be wired up inbetween Fiber & Services| |
| Infrastructure |||
|[Fabric](https://github.com/victorioferrario/hubx-platform/tree/master/libs/fabric)	| GUI Provider Management | Library |
| Shared  |||
|[Fiber](https://github.com/victorioferrario/hubx-platform/tree/master/libs/fiber)	| Application State Management | Library |
|[Services](https://github.com/victorioferrario/hubx-platform/tree/master/libs/services)| Application Context Provider	| Library |
|[System](https://github.com/victorioferrario/hubx-platform/tree/master/libs/system)| Application Components of common functionality	| Library |

## Lib Import Definitions
```json
      "@hubx/areas/buyers": [
        "libs/areas/buyer-portal/src/index.ts"
      ],
      "@hubx/areas/vendor": [
        "libs/areas/vendor-portal/src/index.ts"
      ]
      "@hubx/fabric": [
        "libs/fabric/src/index.ts"
      ],
       "@hubx/fiber": [
        "libs/fiber/src/index.ts"
      ],
      "@hubx/services": [
        "libs/services/src/index.ts"
      ],     
      "@hubx/system": [
        "libs/system/src/index.ts"
      ]     
```


ng generate @angular/material:material-nav --name toolbar
## @Angular DevKit
|              Package              |    Version    |     |
| --------------------------------- | ------------- | --- |
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
| @nrwl/nx                          | 6.2.0         |     |
| @ngrx/store                       | 6.0.1         |     |





