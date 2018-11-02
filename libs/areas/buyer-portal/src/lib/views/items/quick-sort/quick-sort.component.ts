import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'buyer-quick-sort',
  templateUrl: './quick-sort.component.html',
  styleUrls: ['./quick-sort.component.scss']
})
export class QuickSortComponent implements OnInit {
  qtySort = false;
  priceSort = false;
  manufacturer = null;
  shouldStick = false;
  showMobileFilter = false;
  conditionWidth = 111;
  manufacturerWidth = 134;
  conditionSelected = 'All Conditions';
  manufacturerSelected = 'All Manufacturers';
  allManufacturersOption: any = {
    id: '',
    name: 'All Manufacturers',
    count: 0,
    logoUrl: '',
    selected: true
  };

  ngOnInit() {}
}
