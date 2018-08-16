import { Component } from '@angular/core';
import { ApplicationContext, MenuAction } from '@hubx/services';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css']
})
export class DashboardComponent {
    constructor(context:ApplicationContext){
      context.dispatch(MenuAction.State_Close);
    }
}