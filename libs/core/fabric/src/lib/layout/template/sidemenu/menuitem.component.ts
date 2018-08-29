import { Component, OnInit , EventEmitter } from '@angular/core';
import {
  IMenuItem,
  MenuFactory,
  UserIdentityRole,
  ApplicationContext,
  BuyerViewSection,
  VendorViewSection,
  AreaView
} from '@hubx/services';
@Component({
  selector: 'fabric-menu',
  styleUrls: ['./sidemenu.component.css'],
  template: `<mat-nav-list class="fabric-sidenav-list" #navlist>
    <a mat-list-item *ngFor="let nav of fillerNav" class="item-color" (click)="onNavigate(nav);">
    <mat-icon mat-list-icon>folder</mat-icon>      
    <h4 mat-line *ngIf="nav.label">{{nav.label}}</h4>
    </a> 
    </mat-nav-list>`
})
export class MenuComponent implements OnInit {
  fillerNav: IMenuItem[];
  navigate:EventEmitter<IMenuItem>;
  constructor(public ctx: ApplicationContext) {
    this.fillerNav =
      ctx.session.userIdentity.role === UserIdentityRole.Buyer
        ? MenuFactory.BuyerMenuItems
        : MenuFactory.VendorMenuItems;
        this.navigate = new EventEmitter<IMenuItem>();
  }
  ngOnInit() {}
  onNavigate(eventArg:IMenuItem) {
    this.navigate.emit(eventArg);
  }
}
