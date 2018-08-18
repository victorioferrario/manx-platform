
import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@hubx/services';
@Component({
  selector: 'fabric-sidemenu',  
  styleUrls: ['./sidemenu.component.css'],
  template: `<mat-nav-list class="fabric-sidenav-list">
    <mat-list-item routerLink="." *ngFor="let nav of fillerNav" class="item-color" >
        <mat-icon mat-list-icon>folder</mat-icon>      
        <h4 mat-line *ngIf="this.isFullText">{{nav}}</h4>
    </mat-list-item> 
  </mat-nav-list>`
})
export class SideMenuComponent implements OnInit {
  fillerNav = Array.from({ length: 10 }, (_, i) => `Nav Item ${i + 1}`);
  isFullText = true;
  constructor() {    
    //public layoutService: LayoutService
   }  
  ngOnInit() {  }  
}