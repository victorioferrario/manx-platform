import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { AnimationSlideToLeft} from '@hubx/fabric';
import { ApplicationViewContext, VendorViewSection } from '@hubx/services';
import {UserDataContext, VendorDataContext, IVendor, IBusinessProfile } from '@hubx/domain';
@Component({
  selector: 'vendor-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  // animations: [routerTransition_SlideToLeft()],
  // host: {'[@routerTransition]': ''},
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  sectionText: string;
  sectionTitle: string;
  constructor(
    private cdr: ChangeDetectorRef,
    public vtx: ApplicationViewContext,
    public dbx: VendorDataContext,
  public ubx:UserDataContext) {

  }
  ngOnInit() {
    const self = this;
    self.sectionTitle = 'Dashboard';
    self.sectionText = `The ${self.sectionTitle} works!`;
    self.vtx.loading(false);
    self.vtx.activateSection(VendorViewSection.Dashboard);
    this.cdr.detectChanges();
    this.dbx.getVendors().subscribe((arg: IVendor[]) => {
      console.log(arg);
      console.log('DoneLoading');
    });
    this.ubx.getBusinessProfile().subscribe((arg: IBusinessProfile) => {
      console.log(arg);
      console.log('DoneLoading-Business Partners');
    });

  }
}
