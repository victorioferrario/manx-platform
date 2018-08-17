import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@hubx/services';
@Component({
  selector: 'fabric-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {
  isLoading = false;
  // public layoutService: LayoutService
  constructor( ) {
  }
  ngOnInit() {
    const self = this;      
    // vself.layoutService.startLoad();
  }

  onClick(){
    const self = this;    
    // self.layoutService.startLoad();
  }

}
