import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@hubx/services';
import * as logging from 'typescript-logging';
import { Observable } from 'rxjs';
@Component({
  selector: 'apworkspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'webportal';
  loggy: any;
  protected users$: Observable<any>;
  constructor() {
    const self = this;  
    self.loggy = (window as any).LOGGING = logging;
    self.loggy.help();
    const control = self.loggy.getLogControl();   
  }
  ngOnInit() {
     
  }


}
