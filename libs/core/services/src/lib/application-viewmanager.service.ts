/**
 * Under Heavy development @ApplicationViewContext.
 * @classdesc: It's a mess, don't hurt your eyes.
 */
/**
 * Angular Services
 */
import { ReflectiveInjector } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
/**
 * Local Services
 */
import { ViewContext } from './models/view';
import { ApplicationContext } from './application-context.service';
import { ApplicationInsightsService } from './application-insights.service';
import { IViewContext, IApplicationViewContext } from './interfaces/index';
import { AreaView, BuyerViewSection, VendorViewSection } from './models/enums';
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
  constructor(
    public ctx: ApplicationContext,
    public itx: ApplicationInsightsService,
    public router: Router  ) {
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
  public activateView(
    newActive: AreaView,
    newSection?: BuyerViewSection | VendorViewSection
  ) {
    this.viewContext.update(newActive, newSection);
  }
  /**
   * @method: activateSection
   * @param newSection
   */
  public activateSection(newSection: BuyerViewSection | VendorViewSection) {
    this.viewContext.update(null, newSection);
  }
  /**
   * @method:navigate
   * @param url
   * @param newSection
   */
  public navigate(
    url: string,
    newSection?: BuyerViewSection | VendorViewSection
  ) {
    const self = this;

    if (newSection) {
      self.viewContext.update(
        self.viewContext.active.value, newSection);
    }

    self.router.navigate([url]);

    self.itx.logPageView(newSection, url,
      this.ctx.session.userIdentity.role);

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

    const areaView =  newActive === AreaView.Buyer
    ? BuyerViewSection.Dashboard
    : VendorViewSection.Dashboard;

    this.viewContext.update(
      newActive, areaView );
    self.itx.logPageView(areaView, url,
       this.ctx.session.userIdentity.role);

    self.router.navigate([url]);
    self.ctx.ux.props.changeOpenedState();

  }
  /**
   * Loading application view context
   * @param value
   */
  loading(value: boolean) {
    this.viewContext.loading.next(value);
  }
}
