import { Component, OnDestroy, OnInit, Input, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ApplicationContext, ApplicationViewContext, IApplicationViewContext } from '@hubx/services'
import { BehaviorSubject, Observable } from 'rxjs';
import { IViewContext } from '@hubx/services';
import { AreaView, BuyerViewSection, VendorViewSection } from '@hubx/services';
@Component({
    selector: 'fabric-header',
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnDestroy, OnInit, AfterViewInit {
    areaInfo: BehaviorSubject<AreaView>;
    sectionInfo: BehaviorSubject<BuyerViewSection | VendorViewSection>; 
    @Input()
    SubHeaderTitle: string;
    constructor(public ctx: ApplicationContext, public vtx: ApplicationViewContext, private cdr: ChangeDetectorRef) {
        const self = this;
        self.areaInfo = new BehaviorSubject<AreaView>(AreaView.Login);
        self.areaInfo.asObservable();
        //
        self.sectionInfo = new BehaviorSubject<BuyerViewSection | VendorViewSection>(VendorViewSection.Dashboard);
        self.sectionInfo.asObservable();
        //
        self.vtx.view.active.subscribe((arg: any) => {            
            if (arg !== undefined) {
                self.areaInfo.next(arg);
            }
        });
        self.vtx.view.activeSection.subscribe((arg: any) => {
            if (arg !== undefined) {
                self.sectionInfo.next(arg);
            }            
        });
    }
    ngOnInit(): void {
        const self = this;
        this.cdr.detectChanges();
    }
    ngOnDestroy(): void { }

    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
}