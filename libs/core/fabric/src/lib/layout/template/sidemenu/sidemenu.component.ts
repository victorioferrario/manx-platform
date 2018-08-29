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

import { MenuComponent } from './menuitem.component';
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

  menuBuyerArray: IMenuItem[] = [
    {
      label: 'Dashboard',
      path: '/buyer',
      section: BuyerViewSection.Dashboard
    },
    {
      label: 'Shopping Cart',
      path: '/buyer/cart',
      section: BuyerViewSection.Cart
    },
    {
      label: 'My Account',
      path: '/buyer/account',
      section: BuyerViewSection.Account
    },
    {
      label: 'My Profile',
      path: '/buyer/profile',
      section: BuyerViewSection.Profile
    },
    {
      label: 'My Orders',
      path: '/buyer/orders',
      section: BuyerViewSection.Orders
    },
    {
      label: 'My Order Details',
      path: '/buyer/orderdetail',
      section: BuyerViewSection.OrderDetails
    },
    {
      label: 'Logout',
      path: 'DIALOG'
    }
  ];
  menuVendorArray: IMenuItem[] = [
    {
      label: 'Dashboard',
      path: '/vendor',
      section: VendorViewSection.Dashboard
    },
    {
      label: 'Products',
      path: '/vendor/products',
      section: VendorViewSection.Products
    },
    {
      label: 'Orders',
      path: '/vendor/orders',
      section: VendorViewSection.Orders
    },
    {
      label: 'My Profile',
      path: '/vendor/profile',
      section: VendorViewSection.Profile
    },
    {
      label: 'Logout',
      path: 'DIALOG'
    }
  ];
  fillerNav: IMenuItem[];

  constructor(
    public dialog: MatDialog,
    private router: Router,
    public viewContainerRef: ViewContainerRef,
    public ctx: ApplicationContext,
    public vtx: ApplicationViewContext
  ) {
    this.fillerNav =
      ctx.session.userIdentity.role === UserIdentityRole.Buyer
        ? this.menuBuyerArray
        : this.menuVendorArray;
  }
  openDialog(): void {
    const self = this;
    const dialogRef = this.dialog.open(ConfirmLogoutDialogComponent, {
      width: '550px',
      disableClose: true
    });
    dialogRef.beforeClose().subscribe((result: any) => {
      if (result === undefined) {
        self.router.navigate(['/logout']);
      }
    });
    dialogRef.afterClosed().subscribe((result: IDialogActions) => {
      switch (result.action) {
        case 'logout':
          break;
        case 'continue':
          break;
      }
    });
  }
  ngOnInit() {}
  onNavigate(arg: string, section?: BuyerViewSection | VendorViewSection) {
    const self = this;
    if (arg === 'DIALOG') {
      self.openDialog();
    } else {
      self.vtx.activateSection(section);
      self.router.navigate([arg]);
    }
    self.updateMenu();
  }
  protected updateMenu() {
    const self = this;
    self.ctx.ux.props.changeOpenedState();
  }
  ngAfterViewInit() {
    const self = this;
    self.menu.navigate.subscribe((event: IMenuItem) => {
      self.onNavigate(event.path, event.section);
    });
    self.vtx.activateView(
      this.ctx.session.userIdentity.role === UserIdentityRole.Buyer
        ? AreaView.Buyer
        : AreaView.Vendor
    );
  }
}

// <mat-nav-list class="fabric-sidenav-list" #navlist>
//     <a mat-list-item *ngFor="let nav of fillerNav" class="item-color" (click)="onNavigate(nav.path, nav.section);">
//         <mat-icon mat-list-icon>folder</mat-icon>
//         <h4 mat-line *ngIf="nav.label">{{nav.label}}</h4>
//     </a>
//   </mat-nav-list>
