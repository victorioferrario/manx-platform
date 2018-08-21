import { Component, OnInit , HostBinding } from '@angular/core';
@Component({
  selector: 'fabric-section-title',
  template: ` <h4><ng-content></ng-content></h4>`
})
export class SectionTitleComponent implements OnInit {  
  constructor() { }
  ngOnInit() {
  }
}
