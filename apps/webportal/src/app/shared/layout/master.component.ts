import { Component, OnDestroy } from '@angular/core';
import { ApplicationContext, MenuAction, ActionEmitter, Actions_UI, SizeEnum } from '@hubx/services';
@Component({
    selector: 'app-master',
    templateUrl: './master.component.html',
    styleUrls: ['./master.component.css']
  })
  export class MasterComponent implements OnDestroy {  
    constructor(public ctx: ApplicationContext) {        
      const self = this;   
    }      
    ngOnDestroy(): void {}
  }