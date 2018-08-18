import { ChangeDetectorRef, Component, OnDestroy, OnInit, Input } from '@angular/core';
import { ApplicationContext } from '@hubx/services'
@Component({
    selector: 'fabric-subheader',
    templateUrl: './sub-header.component.html',        
    styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnDestroy, OnInit {
    @Input()
    SubHeaderTitle:string;
    constructor(public ctx:ApplicationContext){        
    }
    ngOnInit(): void { }
    ngOnDestroy(): void { }
}
