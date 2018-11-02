import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'buyer-items-breadcrumbs',
  templateUrl: './bread-crumbs.component.html',
  styleUrls: ['./bread-crumbs.component.scss']
})
export class BreadCrumbsComponent implements OnInit {
  @Output() changeView = new EventEmitter<string>();
  public listings = true;
  public excelGrid = false;
  public isManufacturerSelected: boolean;
  // public selectedTopAttribute = '';
  public selectedTopAttribute: string;
  sharedService: any;
  /**
   *
   *
   * @memberof BreadCrumbsComponent
   */
  constructor() {
    this.selectedTopAttribute = 'selected Top Attribute';
    this.isManufacturerSelected = false;
  }
  ngOnInit() {
    // titlechanged
    // pubsub
  }
  switchView(view: string) {
    if (view === 'listingView') {
      this.sharedService.catalogViewSwitch = 'E';
      this.excelGrid = false;
      this.listings = true;
    } else if (view === 'excelGridView') {
      this.sharedService.catalogViewSwitch = 'L';
      this.listings = false;
      this.excelGrid = true;
    }
  }
}
