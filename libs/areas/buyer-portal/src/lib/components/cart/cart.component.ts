import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  ApplicationViewContext,
  BuyerViewSection,
  VendorViewSection,
  AreaView
} from '@hubx/services';
@Component({
  selector: 'buyer-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  sectionText: string;
  sectionTitle: string;
  constructor(public vtx: ApplicationViewContext) {
    const self = this;
    self.vtx.activateView(AreaView.Buyer, BuyerViewSection.Cart);
  }
  ngOnInit() {
    this.sectionTitle = 'Shopping Cart';
    this.sectionText = `The ${this.sectionTitle} works!`;
  }
}
