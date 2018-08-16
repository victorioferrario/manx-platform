import { Component, OnInit } from '@angular/core';
import { LayoutService, Layout } from '@hubx/services';
import { LocalStorageService } from '@hubx/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'webportal';  
  constructor() {
    const self = this;    
  }
  ngOnInit() {     
  }
}
