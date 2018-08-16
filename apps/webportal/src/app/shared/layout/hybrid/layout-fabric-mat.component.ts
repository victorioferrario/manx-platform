import { Component } from '@angular/core';
import { ApplicationContext, MenuAction } from '@hubx/services';
@Component({
  selector: 'app-fab-material',
  templateUrl: './layout-fabric-mat.component.html',
  styleUrls: ['./layout-fabric-mat.component.css']
})
export class LayoutHybridComponent {

  local_SwitchAction:MenuAction;
  local_ToggleAction:MenuAction;
  constructor(public ctx: ApplicationContext) { 
    const self = this;
    self.local_SwitchAction = MenuAction.SwitchMode;
    self.local_ToggleAction = MenuAction.State_Toggle;    
  }
  onToggle() {
     
  }
  onSwitchMode(){
    const self = this;
    // self.layoutService.layout.sideNavigationMode 
    // = self.layoutService.layout.sideNavigationMode === "side" ? "over": "side";
  }
}