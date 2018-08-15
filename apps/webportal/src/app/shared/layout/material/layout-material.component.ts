import { Component } from '@angular/core';
import { LayoutService } from '@hubx/services';
@Component({
  selector: 'app-material',
  templateUrl: './layout-material.component.html',
  styleUrls: ['./layout-material.component.css']
})
export class LayoutMaterialComponent {
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