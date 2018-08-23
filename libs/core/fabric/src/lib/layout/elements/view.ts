import { Component, OnInit , HostBinding } from '@angular/core';
@Component({
  selector: 'fabric-view',
  template: ` <ng-content></ng-content>`,
  styles: [`
   fabric-view { display:block;}
  `]
})
export class ViewComponent implements OnInit {
  
  constructor() { }
  ngOnInit() {
  }
}
