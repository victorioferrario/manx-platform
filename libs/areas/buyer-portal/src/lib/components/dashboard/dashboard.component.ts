import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'buyer-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {
  sectionText:string;
  sectionTitle:string;  
  constructor() { }
  ngOnInit() {
    this.sectionTitle = "Dashboard";
    this.sectionText = `The ${this.sectionTitle} works!`;
  }
}
