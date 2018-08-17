import { Component } from '@angular/core';
import { ApplicationContext, MenuAction } from '@hubx/services';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css']
})
export class DashboardComponent {
    ctx:ApplicationContext;
    item: Observable<any>;
    constructor(context:ApplicationContext){
      this.ctx = context;      
      this.onHandleClick();   
    }

    onHandleClick(){
      // this.ctx.appObserver.next(MenuAction.Resize);
    }
}