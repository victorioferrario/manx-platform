/**
 * Under Heavy development @ApplicationViewContext.
 * @classdesc: It's a mess, don't hurt your eyes.
 */
/**
 * Angular Services
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Local Services
 */
import { ViewContext } from './models/view'
import { ApplicationContext } from './application-context.service';
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
  view: ViewContext;
  /**
   * @param ctx 
   * @param router    
   */
  constructor( public ctx: ApplicationContext, public router: Router) {
    this.view = new ViewContext();
  }
  /**
   * @method: activateView
   * @param newActive 
   * @param newSection 
   */
  public activateView(newActive: AreaView, newSection?: BuyerViewSection | VendorViewSection) {
    console.log("hello", newActive, newSection);
    this.view.update(newActive, newSection);    
  }
  /**
   * @method: activateSection
   * @param newSection 
   */
  public activateSection(newSection: BuyerViewSection | VendorViewSection) {    
    this.view.update(null, newSection);    
  }
  /**
   * @method:navigate
   * @param url 
   * @param newSection 
   */
  public navigate(url: string, newSection?: BuyerViewSection | VendorViewSection) {
    const self = this;
    if (newSection) {
      this.view.update(null, newSection);        
    }
    self.router.navigate([url]);
    self.ctx.ux.props.changeOpenedState();
  }
}