import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'buyer-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
