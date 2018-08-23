import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  QueryList,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  Attribute
} from '@angular/core';

import {
  ComponentPortal,
  Portal,
  TemplatePortalDirective
} from '@angular/cdk/portal';

import {
  Overlay,
  OverlayConfig,
  CdkOverlayOrigin,
  OverlayRef
} from '@angular/cdk/overlay';

import { LoaderComponent } from '../../../components/loader/loader.component';
import {
  ApplicationContext,
  IActionEmitter,
  AuthAction,
  ActionEmitter,
  Actions_UI,
  MenuAction,
  ILayoutAction,
  SizeEnum
} from '@hubx/services';
import { MatSidenav } from '@angular/material';
@Component({
  selector: 'fabric-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  nextPosition = 0;
  isMenuOpen = false;
  @ViewChildren(TemplatePortalDirective)
  templatePortals: QueryList<Portal<any>>;
  @ViewChild(CdkOverlayOrigin) _overlayOrigin: CdkOverlayOrigin;
  isLoading: boolean;
  @ViewChild('container') private _container;
  @ViewChild('sideNav') private _sideNav: HTMLElement;
  fillerNav = Array.from({ length: 10 }, (_, i) => `Nav Item ${i + 1}`);
  showFiller = false; // cssClass = "experiment";
    constructor(
    public overlay: Overlay,
    public viewContainerRef: ViewContainerRef,
    public ctx: ApplicationContext
  ) {
    const self = this;
    self.ctx.ux.dispatch.subscribe((event: ILayoutAction) => {
      switch (event.type) {
        case Actions_UI.Auth:
          const temp2 = event.subType as AuthAction;
          switch (temp2) {
            case AuthAction.Logout:   
            this.ctx.session.isLogginOut = true;           
            this.ctx.session.isAuthenticated =false;
              break;
          }
          break;
      }
    });
  }
  ngAfterViewInit() {}
  ngOnInit() {}
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
      //
      setTimeout(() => {
        overlayRef.dispose();
      }, 1000);
    });
    overlayRef.attach(
      new ComponentPortal(LoaderComponent, this.viewContainerRef)
    );
  }
}
