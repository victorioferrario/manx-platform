import { Injectable } from '@angular/core';
import { ILayout, Layout, Layout2, SideNavProps, SideNavEnum } from './models';
import { Observable, of } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';
import { MenuAction } from './models/LayoutActions';


@Injectable({
  providedIn: 'root'
})
export class ApplicationContext {
  ux: Layout2;
  constructor() {
    const self = this;
    self.ux = new Layout2();
    this.listeners();
  }
  initializeListeners() {
    const self = this;
    // self.lister
  }
  listeners() {
    const nums = of(1, 2, 3);
    // Create simple observable that emits three values
    const myObservable = new Observable()
    // Create observer object
    const myObserver = {
      next: x => console.log('Observer got a next value: ' + x),
      error: err => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
    // Execute with the observer object
    myObservable.subscribe(myObserver);
  }
  dispatch(event: MenuAction) {
    switch (event) {
      case MenuAction.Resize:
        
        break;
      case MenuAction.SwitchMode:
        this.ux.props.mode = this.ux.props.mode === SideNavEnum.over 
        ? SideNavEnum.side : SideNavEnum.over;
        break;
      case MenuAction.State_Toggle:
        this.ux.props.opened = this.ux.props.opened ? false : true;
        break;

    }
  }
}
// case MenuAction.SwitchMode_Over:
// this.ux.props.mode = SideNavEnum.over;
// break;
// case MenuAction.SwitchMode_Push:
// this.ux.props.mode = SideNavEnum.push;
// break;
// case MenuAction.SwitchMode_Side:
// this.ux.props.mode = SideNavEnum.side;
// break;
// case MenuAction.State_Open:
// this.ux.props.opened = false;
// break;
// case MenuAction.State_Close:
// this.ux.props.opened = false;
// break;