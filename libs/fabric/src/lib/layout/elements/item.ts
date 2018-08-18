import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'fabric-item',
  template: ` <ng-content></ng-content>`
})
export class ItemComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
