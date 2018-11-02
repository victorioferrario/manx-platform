/**
 * Major clean up required
 */
import { CdkOverlayOrigin, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, Portal, TemplatePortalDirective } from '@angular/cdk/portal';
import { AfterViewInit, Component, OnInit, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { Actions_UI, ApplicationContext, AuthAction, ILayoutAction } from '@manx/services';

import { LoaderComponent } from '../../../core';

@Component({
  selector: 'fabric-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  nextPosition = 0;
  cssWidth = ' small';
  isMenuOpen = false;
  @ViewChildren(TemplatePortalDirective) templatePortals: QueryList<Portal<any>>;
  @ViewChild(CdkOverlayOrigin) _overlayOrigin: CdkOverlayOrigin;
  isLoading: boolean;
  @ViewChild('container') private _container;
  @ViewChild('sideNav') private _sideNav: HTMLElement;
  constructor(public overlay: Overlay, public ctx: ApplicationContext, public viewContainerRef: ViewContainerRef) {
    const self = this;
    self.ctx.ux.dispatch.subscribe((event: ILayoutAction) => {
      switch (event.type) {
        case Actions_UI.Auth:
          const temp2 = event.subType as AuthAction;
          switch (temp2) {
            case AuthAction.Logout:
              this.ctx.session.isLogginOut = true;
              this.ctx.session.isAuthenticated = false;
              break;
          }
          break;
      }
    });
  }
  onShowCart() {
    const temp = this.cssWidth;
    this.cssWidth = temp === ' big' ? ' small' : ' big';
  }
  ngOnInit() {}
  ngAfterViewInit() {}
  openLoadingPanel() {
    const config = new OverlayConfig();
    config.positionStrategy = this.overlay
      .position()
      .global()
      .left(`${this.nextPosition}px`)
      .top(`${this.nextPosition}px`);
    this.nextPosition += 30;
    config.hasBackdrop = true;
    const overlayRef = this.overlay.create(config);
    overlayRef.backdropClick().subscribe(() => {
      setTimeout(() => {
        overlayRef.dispose();
      }, 300);
    });
    overlayRef.attach(new ComponentPortal(LoaderComponent, this.viewContainerRef));
  }
}
