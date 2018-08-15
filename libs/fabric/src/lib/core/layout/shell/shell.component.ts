import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@hubx/services';
@Component({
  selector: 'fabric-mat-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellMaterialComponent implements OnInit {
  fillerNav = Array.from({ length: 10 }, (_, i) => `Nav Item ${i + 1}`);
  constructor(public layoutService: LayoutService) {
    
   }
  ngOnInit() {  }  
}
