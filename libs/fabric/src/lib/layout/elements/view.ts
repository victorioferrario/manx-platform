import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'fabric-view',
  template: ` <ng-content></ng-content>`
})
export class ViewComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
