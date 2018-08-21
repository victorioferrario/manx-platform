import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ApplicationContext, IActionEmitter, AuthAction, ActionEmitter, Actions_UI, MenuAction , SizeEnum} from '@hubx/services';
@Component({
  selector: 'fabric-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit, AfterViewInit { 
  constructor(public ctx: ApplicationContext) {
    const self = this;   
    
  } 
  ngAfterViewInit() {  
    
  }
  ngOnInit() {   
  }
}
