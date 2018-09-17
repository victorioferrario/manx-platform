import { Injectable } from '@angular/core';
import { appSettings } from './appsettings';
import { AppInsights } from 'applicationinsights-js';
@Injectable()
export class ApplicationInsightsService {
  private config: Microsoft.ApplicationInsights.IConfig = {
    instrumentationKey: appSettings.appInsights.instrumentationKey
  };
  constructor() {
    if (!AppInsights.config) {
      AppInsights.downloadAndSetup(this.config);
    }
  }
  public logPageView(
    name?: string,
    url?: string,
    properties?: any,
    measurements?: any,
    duration?: number) {
    AppInsights.trackPageView(name, url, properties, measurements, duration);
  }
  public logEvent(name: string, properties?: any, measurements?: any) {
    AppInsights.trackEvent(name, properties, measurements);
  }
}
