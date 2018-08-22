import { Component,ViewChild, OnInit, Inject , ViewContainerRef} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { LayoutService, ApplicationContext, UserIdentityRole, ModeEnum } from '@hubx/services';
import { RouterLink, Router } from '@angular/router';

import { ConfirmLogoutDialogComponent } from '../dialog/confirm-logout.dialog';

export interface IDialogActions {
  action: string;
}
export interface IMenuItem {
  label: string;
  path: string;
}
@Component({
  selector: 'fabric-sidemenu',
  styleUrls: ['./sidemenu.component.css'],
  template: `<mat-nav-list class="fabric-sidenav-list" #navlist>
    <a mat-list-item *ngFor="let nav of fillerNav" class="item-color" routerLink="nav.path" (click)="onNavigate(nav.path);">
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
      path: '/buyer'
    },
    {
      label: 'Shopping Cart',
      path: '/buyer/cart'
    },
    {
      label: 'My Profile',
      path: '/buyer/profile'
    },
    {
      label: 'My Orders',
      path: '/buyer/orders'
    },
    {
      label: 'Order Details',
      path: '/buyer/orderdetail'
    },
    {
      label: 'Logout',
      path: 'DIALOG'
    }
  ];
  menuVendorArray: IMenuItem[] = [
    {
      label: 'Dashboard',
      path: '/vendor'
    },
    {
      label: 'Products',
      path: '/vendor/products'
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
    public ctx: ApplicationContext) {   
    this.fillerNav =
      ctx.session.userIdentity.role === UserIdentityRole.Buyer
        ? this.menuBuyerArray
        : this.menuVendorArray;        
  }
  openDialog(): void {
    const self = this;
    const dialogRef = this.dialog.open(
      ConfirmLogoutDialogComponent, {
      width: '550px',
      disableClose:true
    });
    dialogRef.beforeClose().subscribe((result:any)=>{
      if(result===undefined){       
       self.router.navigate(['/logout']);       
      }     
    });
    dialogRef.afterClosed().subscribe((result: IDialogActions) => {
      switch (result.action) {
        case 'logout':
          //self.router.navigate(['/logout']);
          break;
        case 'continue':
          break;
      }
    });
  }
  ngOnInit() {}
  onNavigate(arg: string) {
    const self = this;
    if (arg !== 'DIALOG') {
      if(self.ctx.ux.props.mode 
        === ModeEnum.push || self.ctx.ux.props.mode === ModeEnum.over ){
        self.ctx.ux.props.opened = false;
      }
      self.router.navigate([arg]);
    } else {
      self.openDialog();
    }
  }
}
