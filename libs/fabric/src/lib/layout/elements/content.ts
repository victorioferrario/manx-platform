import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'fabric-content',
  template: `<ng-content></ng-content>`
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
