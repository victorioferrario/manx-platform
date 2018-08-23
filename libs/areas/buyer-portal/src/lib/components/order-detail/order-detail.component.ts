import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'buyer-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrderDetailComponent implements OnInit {
  sectionText:string;
  sectionTitle:string;  
  constructor() { }
  ngOnInit() {
    this.sectionTitle = "Order Details";
    this.sectionText = `The ${this.sectionTitle} works!`;
  }
}
