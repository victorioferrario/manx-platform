

import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@hubx/services';
@Component({
  selector: 'fabric-mat-sidemenu',  
  styleUrls: ['./sidemenu.component.css'],
  template: `<mat-nav-list class="fabric-sidenav-list">
  <mat-list-item routerLink="." *ngFor="let nav of fillerNav" class="item-color" >
      <mat-icon mat-list-icon>folder</mat-icon>
      <h4 mat-line *ngIf="this.isFullText">{{nav}}</h4>
  </mat-list-item> 
  </mat-nav-list>`
})
export class SideMenuMaterialComponent implements OnInit {
  fillerNav = Array.from({ length: 10 }, (_, i) => `Nav Item ${i + 1}`);

  isFullText = true;
  constructor(public layoutService: LayoutService) {    
   }
   showInfo(link){

   }
   onToggle(){
     this.isFullText = !this.isFullText;
   }
  ngOnInit() {  }  
}


// <a mat-list-item routerLink="." *ngFor="let nav of fillerNav">{{nav}}</a>
//   <button mat-icon-button (click)="showInfo(link)">
//   <mat-icon>info</mat-icon>
// </button>