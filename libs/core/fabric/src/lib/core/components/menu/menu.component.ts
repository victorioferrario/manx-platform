import {
  Component,
  OnInit,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  IMenuItem,
  MenuFactory,
  UserIdentityRole,
  ApplicationContext,
  BuyerViewSection,
  VendorViewSection
} from '@hubx/services';
@Component({
  selector: 'fabric-menu',
  styleUrls: ['./menu.component.css'],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit {
  fillerNav: IMenuItem[];
  navigate: EventEmitter<IMenuItem>;
  state: EventEmitter<IMenuItem>;
  constructor(public ctx: ApplicationContext) {
    this.fillerNav =
      ctx.session.userIdentity.role === UserIdentityRole.Buyer
        ? MenuFactory.BuyerMenuItems
        : MenuFactory.VendorMenuItems;
  }
  ngOnInit() {
    const self = this;
    self.state = new EventEmitter<IMenuItem>();
    self.navigate = new EventEmitter<IMenuItem>();
  }
  onNavigate(item: any, eventArg: IMenuItem) {
    if (
      eventArg.section !== BuyerViewSection.Logout &&
      eventArg.section !== VendorViewSection.Logout
    ) {
      this.state.emit(eventArg);
    }
    this.navigate.emit(eventArg);
  }
}
