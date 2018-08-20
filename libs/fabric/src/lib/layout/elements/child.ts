import { Component, OnInit, HostBinding } from '@angular/core';
@Component({
  selector: 'fabric-child',
  template: ` <ng-content></ng-content>`
})
export class ChildComponent implements OnInit {
  @HostBinding('style.display') display = 'block;';
  constructor() {}
  ngOnInit() {}
}
