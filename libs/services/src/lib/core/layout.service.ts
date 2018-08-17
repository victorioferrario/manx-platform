import { Injectable } from '@angular/core';
// import { ILayout, Layout } from '../models';
import { Observable } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';
import { catService, catProd } from '../util/CatLogger';
@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  //layout: ILayout;
  @Output()
  isLoadingEvent = new EventEmitter<boolean>();
  constructor() {
    const self = this;
    // //
    // self.layout = new Layout();
    // self.layout.loading = true;
    // self.layout.sideNavigation = true;
    // self.layout.sideNavigationMode = "side";    
    // // 
    // self.isLoadingEvent.subscribe((event) => {
    //   self.layout.loading = event;
    // });
  }
  startLoad() {
    // const self = this;
    // self.isLoadingEvent.emit(true);          
    // self.layout.loading = true;
    // setTimeout(() => {
    //   self.fakeService().then(() => {
    //     self.layout.loading = false;
    //     self.isLoadingEvent.emit(false);      
    //   });
    // },1000);
    //self.isLoadingEvent.emit(true);
  }


  async fakeService() {
    setTimeout(() => {
      console.log("tmmmemae");
      return "hello";
    }, 2000);
  }

}
