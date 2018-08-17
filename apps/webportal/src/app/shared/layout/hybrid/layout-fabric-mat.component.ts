import { Component } from '@angular/core';
import { ApplicationContext, MenuAction, ActionEmitter, Actions_UI } from '@hubx/services';
@Component({
  selector: 'app-fab-material',
  templateUrl: './layout-fabric-mat.component.html',
  styleUrls: ['./layout-fabric-mat.component.css']
})
export class LayoutHybridComponent {
  constructor(public ctx: ApplicationContext) { 
    const self = this;     
  }
  onToggle() {  
    const event = new ActionEmitter(
      Actions_UI.Menu, 
      MenuAction.State_Toggle);    
    this.ctx.dispatch.emit(event);     
  }
  onSwitchMode(){
    const self = this;    
    const event = new ActionEmitter(
      Actions_UI.Mode, 
      MenuAction.SwitchMode);    
    this.ctx.dispatch.emit(event);         
   }
}