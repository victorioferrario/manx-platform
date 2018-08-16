import { ChangeDetectorRef, Component, OnDestroy, OnInit, Input } from '@angular/core';
@Component({
    selector: 'fabric-mat-header',
    template: `
<mat-toolbar class="example-header">
    <mat-toolbar-row class="header-toolbar-row-1">
      <ng-content select="[headerLogo]"></ng-content>
    </mat-toolbar-row>
    <mat-toolbar-row class="header-toolbar-row-2">
      <div class="sub-header-col-left">
        <span class="label">Featured</span></div>
    </mat-toolbar-row>
</mat-toolbar>`,
    styleUrls: ['./header.component.css']
})
export class HeaderMaterialComponent implements OnDestroy, OnInit {
    @Input()
    SubHeaderTitle:string;
    constructor(){}
    ngOnInit(): void { }
    ngOnDestroy(): void { }
}
// <img src="../assets/images/logo.svg" class="hubx-logo" />