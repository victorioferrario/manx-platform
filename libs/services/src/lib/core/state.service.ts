import { Injectable, OnDestroy } from '@angular/core';
import { of as observableOf,  Observable,  BehaviorSubject } from 'rxjs';
// import { ILayout, Layout } from '../models';

import { Output, EventEmitter } from '@angular/core';
import { catService, catProd } from '../util/CatLogger';
@Injectable({
  providedIn: 'root'
})
export class StateService implements OnDestroy {

  alive:boolean;
  protected layouts: any = [
    {
      name: 'One Column',
      icon: 'nb-layout-default',
      id: 'one-column',
      selected: true,
    },
    {
      name: 'Two Column',
      icon: 'nb-layout-two-column',
      id: 'two-column',
    },
    {
      name: 'Center Column',
      icon: 'nb-layout-centre',
      id: 'center-column',
    },
  ];
  protected sidebars: any = [
    {
      name: 'Sidebar at layout start',
      icon: 'nb-layout-sidebar-left',
      id: 'start',
      selected: true,
    },
    {
      name: 'Sidebar at layout end',
      icon: 'nb-layout-sidebar-right',
      id: 'end',
    },
  ];
  protected layoutState$ = new BehaviorSubject(this.layouts[0]);
  protected sidebarState$ = new BehaviorSubject(this.sidebars[0]);
  setLayoutState(state: any): any {
    this.layoutState$.next(state);
  }
  getLayoutStates(): Observable<any[]> {
    return observableOf(this.layouts);
  }
  onLayoutState(): Observable<any> {
    return this.layoutState$.asObservable();
  }
  setSidebarState(state: any): any {
    this.sidebarState$.next(state);
  }
  getSidebarStates(): Observable<any[]> {
    return observableOf(this.sidebars);
  }
  onSidebarState(): Observable<any> {
    return this.sidebarState$.asObservable();
  }
  constructor() {
    const self = this;    
    self.alive = true;
  }
  startLoad() { }
  async fakeService() {
    setTimeout(() => {
      console.log("tmmmemae");
      return "hello";
    }, 2000);
  }
  ngOnDestroy() {
    this.alive = false;
  }
}
