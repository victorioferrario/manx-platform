import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@hubx/services';
@Component({
  selector: 'fabric-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  isLoading = false;
  constructor(public layoutService: LayoutService ) {
  }
  ngOnInit() {
    const self = this;      
    self.layoutService.startLoad();
  }

  onClick(){
    const self = this;    
    self.layoutService.startLoad();
  }

}
