import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { routerTransition_SlideToLeft} from '@hubx/fabric';
import { ApplicationViewContext, VendorViewSection } from '@hubx/services';
import { VendorDataContext, IVendor } from '@hubx/domain';
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
    public dbx: VendorDataContext) {
   
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
   
  }
}
