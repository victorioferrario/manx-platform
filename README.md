# AppPlatform

## To-Do:
- [x]  Auto-Switch - SideNav
- [X] Need to remove the fabric, and material UI shells.
- [x] Need to clean up hybrid UI, move it fully into fabric lib.
- [X] Automate or fix sub-header when collapsing.
- [X] Clean up fabric
- [X] Sunset alternative UIs
- [x] Bring in Authentication
- [ ] Clean Up module imports. Very messy at moment
- [ ] Integrate Authentication with `services/models/session` with application Context.
- [ ] State Store Integration of session or augmentation
- [ ] Create and build Fiber Lib.
- [ ] Bring in the rest of hubx-angular data services


# Tools
 [AngularConsole](https://angularconsole.com/)    


# Workspace                                              

## Angular Enterprise Application Architecture

|                                                   Project Library                                                   |                                           Description                                           |    Type     |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------- |
| [Webportal](https://github.com/victorioferrario/hubx-platform/tree/master/apps/webportal)                   | main application                                                                                | Application |
| Areas                                                                                                       |                                                                                                 |             |
| [Buyer-Portal](https://github.com/victorioferrario/hubx-platform/tree/master/libs/areas/buyer-portal)  | library that runs the buyer-portal under the main app.                                          | Library     |
| [System &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;](https://github.com/victorioferrario/hubx-platform/tree/master/libs/areas/system)                   | Application Components of common functionality                                                  | Library     |
| [Vendor-Portal](https://github.com/victorioferrario/hubx-platform/tree/master/libs/areas/vendor-portal) | library that runs the vendor-portal under the main app.                                         | Library     |
| Core                                                                                                        |                                                                                                 |             |
| [Fabric](https://github.com/victorioferrario/hubx-platform/tree/master/libs/core/fabric)                    | Application UI Management & Core Components                                                     | Library     |
| [Fiber](https://github.com/victorioferrario/hubx-platform/tree/master/libs/core/fiber)                      | Application State Management                                                                    | Library     |
| [Services](https://github.com/victorioferrario/hubx-platform/tree/master/libs/core/services)                | Application Context Provider                                                                    | Library     |
| Shared                                                                                                      |                                                                                                 | Library     |
| [Domain](https://github.com/victorioferrario/hubx-platform/tree/master/libs/shared/domain)                  | To be created, then will be wired up inbetween Fiber & Services                                 | Library     |
| [Infrastructure](https://github.com/victorioferrario/hubx-platform/tree/master/libs/shared/infrastructure)  | Ideally these are low-level services, not consumed by ui components, but more over for services | Library     |

# Angular Enterprise Application Symbols

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
      ] ,        
      "@hubx/domain": [
        "libs/shared/domain/src/index.ts"
      ],
      "@hubx/infrastructure": [
        "libs/shared/infrastructure/src/index.ts"
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
| @nrwl/nx    | 6.2.0 | |
| @ngrx/store | 6.0.1 | |





