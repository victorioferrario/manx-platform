import { UserDataContext } from '@hubx/domain';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ContentChild,
  HostListener,
  ViewChildren,
  ViewChild,
  ViewContainerRef,
  QueryList,
  AfterViewInit
} from '@angular/core';

import {
  ApplicationContext,
  ApplicationViewContext,
  BuyerViewSection
} from '@hubx/services';

@Component({
  selector: 'buyer-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, AfterViewInit {
  sectionText: string;
  sectionTitle: string;
  constructor(
    public dtx: UserDataContext,
    public ctx: ApplicationContext,
    public vtx: ApplicationViewContext
  ) {
    const self = this;
  }
  ngOnInit() {
    const self = this;
    self.sectionTitle = 'Dashboard';
    self.dtx.getUserProfile().subscribe((data:any)=>{
      console.log(data);
      
    });
    self.sectionText = `The ${this.sectionTitle} works!`;
    self.vtx.loading(false);
  }
  ngAfterViewInit() {}
}
