import { ChangeDetectorRef, Component, OnDestroy, OnInit, Input } from '@angular/core';
import { ApplicationContext } from '@hubx/services'
@Component({
    selector: 'fabric-mat-header',
    template: `
<mat-toolbar class="example-header">
    <mat-toolbar-row class="header-toolbar-row-1">
      <ng-content select="[headerLogo]"></ng-content>
    </mat-toolbar-row>
    <mat-toolbar-row class="header-toolbar-row-2">
        <aside class="sub-header-col-left">
            <span class="label">{{SubHeaderTitle}}</span></aside>
        <aside class="sub-header-col-right">
            <fabric-mat-toolbar class="fabric-mat-toolbar"></fabric-mat-toolbar></aside>
    </mat-toolbar-row>
</mat-toolbar>`,
    styleUrls: ['./header.component.css']
})
export class HeaderMaterialComponent implements OnDestroy, OnInit {
    @Input()
    SubHeaderTitle:string;
    constructor(public ctx:ApplicationContext){}
    ngOnInit(): void { }
    ngOnDestroy(): void { }
}
