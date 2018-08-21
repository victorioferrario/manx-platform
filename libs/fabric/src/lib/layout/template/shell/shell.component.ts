import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ApplicationContext, IActionEmitter, AuthAction, ActionEmitter, Actions_UI, MenuAction , SizeEnum} from '@hubx/services';
@Component({
  selector: 'fabric-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit, AfterViewInit {
  isLoading:boolean;
  @ViewChild('container') private _container;
  @ViewChild('sideNav') private _sideNav;
  fillerNav = Array.from({ length: 10 }, (_, i) => `Nav Item ${i + 1}`);
  showFiller = false;  // cssClass = "experiment";  
  constructor(public ctx: ApplicationContext) {
    const self = this;   
    
  } 
  ngAfterViewInit() {  
    
  }
  ngOnInit() {   
  }
}
