import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IUserProfile, UserFacade } from '@manx/domain';
import { ApplicationContext, ApplicationViewContext, AreaView, BuyerViewSection, VendorViewSection } from '@manx/services';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'fabric-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy, OnInit, AfterViewInit {
  areaInfo: BehaviorSubject<AreaView>;
  sectionInfo: BehaviorSubject<BuyerViewSection | VendorViewSection>;
  refSubscription: any;
  userInfo: BehaviorSubject<string>;
  userInfoAvailable: BehaviorSubject<boolean>;
  @Input() SubHeaderTitle: string;
  constructor(private cdr: ChangeDetectorRef, public dtx: UserFacade, public ctx: ApplicationContext, public vtx: ApplicationViewContext) {
    const self = this;
    //  //  //
    self.areaInfo = new BehaviorSubject<AreaView>(AreaView.Login);
    self.areaInfo.asObservable();
    //  //  //
    self.sectionInfo = new BehaviorSubject<BuyerViewSection | VendorViewSection>(VendorViewSection.Dashboard);
    self.sectionInfo.asObservable();

    self.userInfo = new BehaviorSubject<string>('');
    self.userInfo.asObservable();

    self.userInfoAvailable = new BehaviorSubject<boolean>(false);
    self.userInfoAvailable.asObservable();
    //  //  //
  }
  ngOnInit(): void {
    const self = this;
    self.cdr.detectChanges();
    self.vtx.viewContext.active.subscribe((arg: any) => {
      if (arg !== undefined) {
        self.areaInfo.next(arg);
      }
    });
    self.vtx.viewContext.activeSection.subscribe((arg: any) => {
      if (arg !== undefined) {
        self.sectionInfo.next(arg);
      }
    });
    //
    self.ctx.session.IsLoggdedIn.subscribe((isloggedIn: boolean) => {
      if (isloggedIn) {
        if (self.refSubscription == null) {
          self.refSubscription = self.dtx.getUser().subscribe((data: IUserProfile) => {
            self.userInfo.next(data.firstName + ' ' + data.lastName);
            self.userInfoAvailable.next(true);
          });
        }
      } else {
        if (self.refSubscription != null) {
          self.userInfo.next('');
          self.refSubscription = null;
          self.userInfoAvailable.next(false);
        }
      }
    });
  }
  ngOnDestroy(): void {}

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
}
