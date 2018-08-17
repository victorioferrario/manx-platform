import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ApplicationContext, ActionEmitter, Actions_UI, MenuAction , SizeEnum} from '@hubx/services';
@Component({
  selector: 'fabric-mat-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellMaterialComponent implements OnInit, AfterViewInit {
  @ViewChild('container') private _container;
  @ViewChild('sideNav') private _sideNav;
  fillerNav = Array.from({ length: 10 }, (_, i) => `Nav Item ${i + 1}`);
  showFiller = false;  // cssClass = "experiment";  
  constructor(public context: ApplicationContext) {
  }
  handleClick() {
    const event = new ActionEmitter(Actions_UI.Resize,
       (this.context.ux.props.size === SizeEnum.large ) 
       ? MenuAction.Resize_Small : MenuAction.Resize_Large);    
    this.context.dispatch.emit(event);
  }
  
  ngAfterViewInit() {  
  }
  ngOnInit() { }
}
