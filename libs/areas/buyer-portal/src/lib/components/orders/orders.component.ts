import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'buyer-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrdersComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
