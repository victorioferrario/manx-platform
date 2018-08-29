import { Component, OnDestroy, OnInit, Input, AfterViewInit,  ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ApplicationContext , ApplicationViewContext, IApplicationViewContext } from '@hubx/services'

@Component({
    selector: 'fabric-header',
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy, OnInit , AfterViewInit{
    viewManagerOutputMessage:string;
    @Input()
    SubHeaderTitle:string;  
    constructor(public ctx:ApplicationContext, public vtx:ApplicationViewContext,  private cdr: ChangeDetectorRef){
            
    }
    ngOnInit(): void { }
    ngOnDestroy(): void { }

    ngAfterViewInit(){
        const self = this;
        self.SubHeaderTitle = "Trending Now..."
        self.viewManagerOutputMessage = self.vtx.view.active.value;    
    }
}