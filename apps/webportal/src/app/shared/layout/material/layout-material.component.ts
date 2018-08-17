import { Component } from '@angular/core';
import { ApplicationContext, MenuAction, ActionEmitter, Actions_UI } from '@hubx/services';
@Component({
  selector: 'app-material',
  templateUrl: './layout-material.component.html',
  styleUrls: ['./layout-material.component.css']
})
export class LayoutMaterialComponent {
  constructor(public ctx: ApplicationContext) {
    console.log(this.ctx)

   }
   onToggle() {   
    const event = new ActionEmitter(
      Actions_UI.Menu, MenuAction.State_Toggle);    
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