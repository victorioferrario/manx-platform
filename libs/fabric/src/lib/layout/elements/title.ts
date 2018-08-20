import { Component, OnInit , HostBinding } from '@angular/core';
@Component({
  selector: 'fabric-title',
  template: ` <h4><ng-content></ng-content></h4>`
})
export class TitleComponent implements OnInit {  
  constructor() { }
  ngOnInit() {
  }
}
