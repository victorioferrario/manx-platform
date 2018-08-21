import { Component, OnInit , HostBinding } from '@angular/core';
@Component({
  selector: 'fabric-page-title',
  template: ` <h4><ng-content></ng-content></h4>`
})
export class PageTitleComponent implements OnInit {  
  constructor() { }
  ngOnInit() {
  }
}
