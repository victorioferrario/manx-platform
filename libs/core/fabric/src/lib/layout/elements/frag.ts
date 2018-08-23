import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'fabric-fragment',
  template: `<ng-content></ng-content>`
})
export class FragementComponent implements OnInit {
  constructor() {}
  ngOnInit() { }
}
