import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'fabric-child',
  template: ` <ng-content></ng-content>`
})
export class ChildComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
