import { ChangeDetectorRef, Component, OnDestroy, OnInit, Input } from '@angular/core';
import { ApplicationContext } from '@hubx/services'
@Component({
    selector: 'fabric-header',
    template: `
<mat-toolbar class="example-header">
    <mat-toolbar-row class="header-toolbar-row-1">
        <ng-content select="[headerLogo]"></ng-content>
    </mat-toolbar-row> 
    <mat-toolbar-row class="header-toolbar-row-2">   
        <fabric-subheader SubHeaderTitle="{{this.SubHeaderTitle}}"></fabric-subheader>
    </mat-toolbar-row>
</mat-toolbar>`,
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy, OnInit {
    @Input()
    SubHeaderTitle:string;
    constructor(public ctx:ApplicationContext){
        const self = this;
        self.SubHeaderTitle = "Trending Now..."
    }
    ngOnInit(): void { }
    ngOnDestroy(): void { }
}

// <mat-toolbar-row class="header-toolbar-row-2">
// <fabric-subheader></fabric-subheader>       
// </mat-toolbar-row>