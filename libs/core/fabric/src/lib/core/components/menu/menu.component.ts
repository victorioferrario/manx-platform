import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { INavChild, INavItem, MenuService } from '@manx/domain';
import { ActionEmitter, Actions_UI, ApplicationContext, BuyerViewSection, DataAction, DataPayload, IMenuItem, MenuFactory, UserIdentityRole, VendorViewSection } from '@manx/services';
import { PerfectScrollbarComponent, PerfectScrollbarConfigInterface, PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'fabric-menu',
  styleUrls: ['./menu.component.css'],
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('showSubcats', [
      state(
        'hide',
        style({
          display: 'none',
          height: '0px',
          overflow: 'hidden'
        })
      ),
      state(
        'show',
        style({
          display: 'block',
          height: '*'
        })
      ),
      transition('show => hide', animate('300ms cubic-bezier(.45, .8, .25, 1)')),
      transition('hide => show', animate('400ms cubic-bezier(.45, .8, .25, 1)'))
    ]),
    trigger('showAdditionalCats', [
      state(
        'hide',
        style({
          display: 'none',
          height: '0px',
          overflow: 'hidden'
        })
      ),
      state(
        'show',
        style({
          display: 'block',
          height: '*'
        })
      ),
      transition('show => hide', animate('300ms cubic-bezier(.25, .8, .25, 1)')),
      transition('hide => show', animate('400ms cubic-bezier(.25, .8, .25, 1)'))
    ])
  ]
})
export class MenuComponent implements OnInit, AfterViewInit {
  public type = 'component';
  @ViewChild(PerfectScrollbarDirective) directiveScroll: PerfectScrollbarDirective;
  @ViewChild(PerfectScrollbarComponent) componentScroll: PerfectScrollbarComponent;
  public config: PerfectScrollbarConfigInterface = {};
  isMenuReady: BehaviorSubject<boolean>;
  isVendorMenuReady: BehaviorSubject<boolean>;
  NavigationTree: INavItem[];
  results: Observable<INavItem>;
  fillerNav: IMenuItem[];
  navigate: EventEmitter<IMenuItem>;
  state: EventEmitter<IMenuItem>;
  public selectedParentNavId = '';
  public selectedChildNavId = '';

  constructor(public ctx: ApplicationContext, public dtx: MenuService) {
    this.config.suppressScrollY = false;
    //
    this.isMenuReady = new BehaviorSubject<boolean>(false);
    this.isMenuReady.asObservable();
    //
    this.isVendorMenuReady = new BehaviorSubject<boolean>(false);
    this.isVendorMenuReady.asObservable();
    //
    this.fillerNav = ctx.session.userIdentity.role === UserIdentityRole.Buyer ? MenuFactory.BuyerMenuItems : MenuFactory.VendorMenuItems;
  }
  ngOnInit() {
    const self = this;
    self.state = new EventEmitter<IMenuItem>();
    self.navigate = new EventEmitter<IMenuItem>();
    if (self.ctx.session.userIdentity.role === UserIdentityRole.Buyer) {
      self.dtx.getMenu().subscribe(data => {
        self.NavigationTree = data.left.filter(n => n.count > 0 && (!n.navChilds || (n.navChilds && n.navChilds.some(c => c.count > 0))));
        for (const parent of self.NavigationTree.filter(n => n.count > 0)) {
          if (parent.navChilds !== null) {
            parent.navChilds = parent.navChilds.filter(c => c.count > 0);
          }
        }
        this.isMenuReady.next(true);
      });
    } else {
      this.isVendorMenuReady.next(true);
    }
  }
  ngAfterViewInit() {
    const self = this;
  }
  onNavigate(item: any, eventArg: IMenuItem) {
    if (eventArg.section !== BuyerViewSection.Logout && eventArg.section !== VendorViewSection.Logout) {
      this.state.emit(eventArg);
    }
    this.navigate.emit(eventArg);
  }
  public onParentNavClick(parent: INavItem, eventArgs: any) {
    if (this.selectedParentNavId === parent.navId) {
      this.selectedChildNavId = '';
      this.selectedParentNavId = '';
    } else {
      this.selectedParentNavId = parent.navId;
    }
    if (parent.navChilds === null) {
      this.onParentBroadcast(parent.filterId);
    } else {
      this.onChangeCategories(parent.navId, 'parent', parent.navName);
    }
  }
  public onChildNavClick(child: INavItem, eventArgs: any) {
    const self = this;
    const action = new ActionEmitter(Actions_UI.Data, DataAction.LoadItems);
    action.payload = new DataPayload(child.filterId);
    self.ctx.dispatch.emit(action);
    self.selectedChildNavId = child.navId;
  }
  public onParentBroadcast(eventArgs: any) {
    const self = this;
    const action = new ActionEmitter(Actions_UI.Data, DataAction.LoadItems);
    action.payload = eventArgs;
    self.ctx.dispatch.emit(action);
  }
  onChangeCategories(navigationId: string, level: string, navName?: string) {
    let selectedNavigation: INavChild;
    if (level === 'parent') {
      selectedNavigation = this.NavigationTree.find(n => n.navId === navigationId);
      if (!selectedNavigation || selectedNavigation.navChilds) {
        return;
      }
      this.selectedChildNavId = '';
      this.selectedParentNavId = navigationId;
    } else {
      selectedNavigation = this.NavigationTree.find(p => p.navChilds && p.navChilds.some(c => c.navId === navigationId)).navChilds.find(
        c => c.navId === navigationId
      );
      this.selectedChildNavId = navigationId;
    }
  }
  public isParentNavActive(parent: INavItem): string {
    return this.selectedParentNavId === parent.navId ? 'active' : '';
  }
  public isChildNavActive(child: INavItem): string {
    console.log(this.selectedChildNavId, child);
    return this.selectedChildNavId === child.navId ? 'active' : '';
  }
  public scrollToTop(): void {
    if (this.type === 'directive') {
      this.directiveScroll.scrollToTop();
    } else {
      this.componentScroll.directiveRef.scrollToTop();
    }
  }
}
