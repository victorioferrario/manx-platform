import {
  Component,
  ViewChild,
  OnInit,
  Inject,
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
  template: `<mat-nav-list class="fabric-sidenav-list" #navlist>
    <a mat-list-item *ngFor="let nav of fillerNav" class="item-color" routerLink="nav.path" (click)="onNavigate(nav.path, nav.section);">
        <mat-icon mat-list-icon>folder</mat-icon>      
        <h4 mat-line *ngIf="nav.label">{{nav.label}}</h4>
    </a> 
  </mat-nav-list>`
})
export class SideMenuComponent implements OnInit {
  @ViewChild('navlist') private navlistInstance;
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
    if (arg !== 'DIALOG') {
      if (
        self.ctx.ux.props.mode === ModeEnum.push ||
        self.ctx.ux.props.mode === ModeEnum.over
      ) {
        self.ctx.ux.props.opened = false;
      }
      self.vtx.activateView(
        this.ctx.session.userIdentity.role === UserIdentityRole.Buyer
          ? AreaView.Buyer
          : AreaView.Vendor,
        section
      );
      self.router.navigate([arg]);
    } else {
      if (
        self.ctx.ux.props.mode === ModeEnum.push ||
        self.ctx.ux.props.mode === ModeEnum.over
      ) {
        self.ctx.ux.props.opened = false;
      }
      self.openDialog();
    }
  }
}
