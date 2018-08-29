import { Input, OnInit, Component } from '@angular/core';
import { IMenuItem, ApplicationContext } from '@hubx/services';
import { MenuComponent } from './menu.component';
@Component({
  selector: 'fabric-menu-item',
  styleUrls: ['./menu-item.component.css'],
  template: `
  <a mat-list-item  id="{{nav.id}}" *ngIf="this.isLocalSelected" class="item-selected" (click)="onNavigate(this,nav);">
  <mat-icon mat-list-icon>folder</mat-icon>
  <h4 mat-line *ngIf="nav.label">{{nav.label}}</h4>
</a>
<a mat-list-item  id="{{nav.id}}" *ngIf="!this.isLocalSelected"  class="item-color" (click)="onNavigate(this,nav);">
  <mat-icon mat-list-icon>folder</mat-icon>
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
    // self.isLocalSelected = self.nav.id ==="nav-item-01";
    // self.parent.state.subscribe((event: IMenuItem) => {
    //     self.isLocalSelected = self.nav === event;
    //  });
  }
  onNavigate(item: any, eventArg: IMenuItem) {
    const self = this;
    self.isLocalSelected = false;
    self.parent.onNavigate(item, eventArg);
  }
}
