import { Component, Input, OnInit } from '@angular/core';
import { ApplicationContext, IMenuItem } from '@manx/services';

import { MenuComponent } from './menu.component';

@Component({
  selector: 'fabric-menu-item',
  styleUrls: ['./menu-item.component.css'],
  template: `
  <a mat-list-item  id="{{nav.id}}" *ngIf="this.isLocalSelected" class="item-selected" (click)="onNavigate(this,nav);">
  <mat-icon mat-list-icon>{{nav.icon}}</mat-icon>
  <h4 mat-line *ngIf="nav.label">{{nav.label}}</h4>
</a>
<a mat-list-item  id="{{nav.id}}" *ngIf="!this.isLocalSelected"  class="item-color" (click)="onNavigate(this,nav);">
  <mat-icon mat-list-icon>{{nav.icon}}</mat-icon>
  <h4 mat-line *ngIf="nav.label">{{nav.label}}</h4>
</a>
`
})
export class MenuItemComponent implements OnInit {
  isLocalSelected = false;
  @Input() nav: IMenuItem;
  @Input() parent: MenuComponent;
  constructor(public ctx: ApplicationContext) {}
  ngOnInit() {
    const self = this;
  }
  onNavigate(item: any, eventArg: IMenuItem) {
    const self = this;
    self.isLocalSelected = false;
    self.parent.onNavigate(item, eventArg);
  }
}
