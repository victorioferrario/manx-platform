import { ErrorHandler, Injectable, Injector } from '@angular/core';

import { ApplicationInsightsService } from './application-insights.service';

@Injectable()
export class ApplicationInsightsErrorHandler extends ErrorHandler {
  constructor(private injector: Injector) {
    super();
  }
  handleError(error: any): void {
    const monitoringService = this.injector.get(ApplicationInsightsService);
    monitoringService.logError(error);
    super.handleError(error);
  }
}
