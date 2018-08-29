import { Component, OnInit, ChangeDetectionStrategy,ContentChild,HostListener, ViewChildren, ViewChild, ViewContainerRef , QueryList, AfterViewInit} from '@angular/core';

import { AlertComponent} from './alert.component';

@Component({
  selector: 'buyer-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, AfterViewInit {
  sectionText:string;
  numClicks = 0;
  numClicksWindow = 0;
  sectionTitle:string;  
  @ContentChild("divElement") div2: any;
  @ViewChild("divElement") div: any;
  // This will return the component instance
  @ViewChild(AlertComponent) alert: AlertComponent;
  @ViewChildren(AlertComponent, { read: ViewContainerRef }) alerts: QueryList<AlertComponent>

  constructor() { }
  ngOnInit() {
    this.sectionTitle = "Dashboard";
    this.sectionText = `The ${this.sectionTitle} works!`;
  }
  ngAfterViewInit() {
    console.log(this.div);
    console.log(this.div2);
   
    console.log(this.alert);
    this.alerts.forEach(alertInstance => console.log(alertInstance));
  }
}
