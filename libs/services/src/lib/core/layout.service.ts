import { Injectable } from '@angular/core';
import { ILayout, Layout } from '../models';
import { Observable } from 'rxjs';
import { Output, EventEmitter } from '@angular/core';
import { catService, catProd } from '../util/CatLogger';
@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  layout: ILayout;

  @Output()
  isLoadingEvent = new EventEmitter<boolean>();

  constructor() {
    const self = this;
    //
    self.layout = new Layout();
    self.layout.loading = true;
    // 
    self.isLoadingEvent.subscribe((event) => {
      self.layout.loading = event;
      console.log('self.layout.loading', self.layout.loading );
    });
  }
  startLoad() {
    const self = this;
    self.isLoadingEvent.emit(true);      
    console.log("THIS IS CALLED");
    self.layout.loading = true;
    setTimeout(() => {
      self.fakeService().then(() => {
        self.layout.loading = false;
        self.isLoadingEvent.emit(false);      
      });
    },5000);
    //self.isLoadingEvent.emit(true);
   
  }


  async fakeService() {
    setTimeout(() => {
      console.log("tmmmemae");
      return "hello";
    }, 7000);
  }

}
