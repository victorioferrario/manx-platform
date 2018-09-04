import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import  {ApplicationViewContext, VendorViewSection } from '@hubx/services';
@Component({
  selector: 'vendor-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  sectionText:string;
  sectionTitle:string;  
  constructor(public vtx: ApplicationViewContext) { }
  ngOnInit() {
    const self = this;
    self.sectionTitle = "Dashboard";
    self.sectionText = `The ${self.sectionTitle} works!`;       
    self.vtx.loading(false);
    setTimeout(() => {
      self.vtx.activateSection(
        VendorViewSection.Dashboard);
    }, 100);
  }
}
