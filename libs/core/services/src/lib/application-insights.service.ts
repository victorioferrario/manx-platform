import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ResolveEnd, Router } from '@angular/router';
import { AppInsights } from 'applicationinsights-js';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { appSettings } from './appsettings';

@Injectable()
export class ApplicationInsightsService {
  private routerSubscription: Subscription;
  private config: Microsoft.ApplicationInsights.IConfig = {
    instrumentationKey: appSettings.appInsights.instrumentationKey
  };
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    if (!AppInsights.config) {
      AppInsights.downloadAndSetup(this.config);
    }
    const source = this.router.events.pipe(filter(event => event instanceof ResolveEnd));
    this.routerSubscription = source.subscribe((event: ResolveEnd) => {
      const activatedComponent = this.getActivatedComponent(event.state.root);
      if (activatedComponent) {
        this.logPageView(`${activatedComponent.name} ${this.getRouteTemplate(event.state.root)}`, event.urlAfterRedirects);
      }
    });
  }
  public logPageView(name?: string, url?: string, properties?: any, measurements?: any, duration?: number) {
    AppInsights.trackPageView(name, url, properties, measurements, duration);
  }
  public logEvent(name: string, properties?: any, measurements?: any) {
    AppInsights.trackEvent(name, properties, measurements);
  }
  public logError(error: Error, properties?: { [key: string]: string }, measurements?: { [key: string]: number }) {
    AppInsights.trackException(error, null, this.AddGlobalProperties(properties), measurements);
  }
  public setAuthenticatedUserId(userId: string): void {
    AppInsights.setAuthenticatedUserContext(userId);
  }
  private AddGlobalProperties(properties?: { [key: string]: string }): { [key: string]: string } {
    if (!properties) {
      properties = {};
    }
    //add your custom properties such as app version
    return properties;
  }
  private getActivatedComponent(snapshot: ActivatedRouteSnapshot): any {
    if (snapshot.firstChild) {
      return this.getActivatedComponent(snapshot.firstChild);
    }
    return snapshot.component;
  }
  private getRouteTemplate(snapshot: ActivatedRouteSnapshot): string {
    let path = '';
    if (snapshot.routeConfig) {
      path += snapshot.routeConfig.path;
    }

    if (snapshot.firstChild) {
      return path + this.getRouteTemplate(snapshot.firstChild);
    }

    return path;
  }
}
