import {
  Component,
  ViewChild,
  OnInit,
  Inject,
  AfterViewInit,
  ViewContainerRef
} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import {
  LayoutService,
  ApplicationContext,
  UserIdentityRole,
  ModeEnum,
  ApplicationViewContext,
  BuyerViewSection,
  VendorViewSection,
  AreaView
} from '@hubx/services';

import { MenuComponent } from '../../../core';

import { RouterLink, Router } from '@angular/router';

import { ConfirmLogoutDialogComponent } from '../dialog/confirm-logout.dialog';

export interface IDialogActions {
  action: string;
}
export interface IMenuItem {
  label: string;
  path: string;
  section?: BuyerViewSection | VendorViewSection;
}
@Component({
  selector: 'fabric-sidemenu',
  styleUrls: ['./sidemenu.component.css'],
  template: `
  <fabric-menu></fabric-menu>
  `
})
export class SideMenuComponent implements OnInit, AfterViewInit {
  @ViewChild(MenuComponent) menu: MenuComponent;

  constructor(
    private router: Router,
    public dialog: MatDialog,
    public ctx: ApplicationContext,
    public vtx: ApplicationViewContext
  ) {}
  openDialog(): void {
    const self = this;
    const dialogRef = self.dialog.open(ConfirmLogoutDialogComponent, {
      width: '550px',
      disableClose: true
    });
    dialogRef.beforeClose().subscribe((result: any) => {
      if (result && result.action) {
        switch (result.action) {
          case 'continue':
            self.updateMenu();
            break;
        }
      }
      if (result === undefined) {
        self.router.navigate(['/logout']);
      }
    });
  }
  ngOnInit() {
    const self = this;
    self.vtx.activateView(
      self.ctx.session.userIdentity.role === UserIdentityRole.Buyer
        ? AreaView.Buyer
        : AreaView.Vendor
    );
  }
  onNavigate(arg: string, section?: BuyerViewSection | VendorViewSection) {
    const self = this;
    if (arg === 'DIALOG') {
      self.openDialog();
    } else {
      self.vtx.navigate(arg, section);
    }
  }
  protected updateMenu() {
    const self = this;
    self.ctx.ux.props.changeOpenedState();
  }
  ngAfterViewInit() {
    const self = this;
    self.menu.navigate.subscribe((event: IMenuItem) => {
      self.onNavigate(
        event.path, event.section);
    });
  }
}

// <mat-nav-list class="fabric-sidenav-list" #navlist>
//     <a mat-list-item *ngFor="let nav of fillerNav" class="item-color" (click)="onNavigate(nav.path, nav.section);">
//         <mat-icon mat-list-icon>folder</mat-icon>
//         <h4 mat-line *ngIf="nav.label">{{nav.label}}</h4>
//     </a>
//   </mat-nav-list>
