import { ChangeDetectorRef, Component, OnDestroy, OnInit, Input } from '@angular/core';
import { ApplicationContext , ApplicationViewContext, IApplicationViewContext } from '@hubx/services'

@Component({
    selector: 'fabric-header',
    template: `
<mat-toolbar>
    <mat-toolbar-row class="header-toolbar-row-1">
        <ng-content select="[headerLogo]"></ng-content>
        <aside class="header-row-output-console">{{ this.vtx.active | async }} {{ this.vtx.activeSection | async }}</aside>
    </mat-toolbar-row> 
    <mat-toolbar-row class="header-toolbar-row-2 fadeIn animated-800" *ngIf="this.ctx.session.isAuthenticated">   
        <fabric-subheader SubHeaderTitle="{{this.SubHeaderTitle}}" *ngIf="this.ctx.session.isAuthenticated"></fabric-subheader>
</mat-toolbar-row>
</mat-toolbar>`,
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy, OnInit {
    viewManagerOutputMessage:string;
    @Input()
    SubHeaderTitle:string;

    constructor(public ctx:ApplicationContext, public vtx:ApplicationViewContext){
        const self = this;
        self.SubHeaderTitle = "Trending Now..."
        self.viewManagerOutputMessage = vtx.active.value;
    }
    ngOnInit(): void { }
    ngOnDestroy(): void { }
}