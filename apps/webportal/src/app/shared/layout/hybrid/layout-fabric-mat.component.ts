import { Component } from '@angular/core';
import { LayoutService } from '@hubx/services';
@Component({
  selector: 'app-fab-material',
  templateUrl: './layout-fabric-mat.component.html',
  styleUrls: ['./layout-fabric-mat.component.css']
})
export class LayoutHybridComponent {
  constructor(public layoutService: LayoutService) { }
  onToggle() {
    const self = this;
    self.layoutService.layout.sideNavigation = self.layoutService.layout.sideNavigation ? false :  true;
  }
  onSwitchMode(){
    const self = this;
    self.layoutService.layout.sideNavigationMode 
    = self.layoutService.layout.sideNavigationMode === "side" ? "over": "side";
  }
}