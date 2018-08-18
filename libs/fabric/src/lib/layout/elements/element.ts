import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'fabric-element',
  template: `<ng-content></ng-content>`
})
export class ElementComponent implements OnInit {
  constructor() {}
  ngOnInit() { }
}
