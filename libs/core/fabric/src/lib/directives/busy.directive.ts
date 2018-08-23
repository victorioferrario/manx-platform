import {
    Directive, Input, ViewContainerRef,
    OnInit, OnChanges, Renderer2, SimpleChanges
} from '@angular/core';
//  
@Directive({
    selector: '[fabricBusy]'
})
export class BusyDirective implements OnInit, OnChanges {
    @Input() appBusy: BusyOptions;
    set visible(visible: boolean) {
        const busyEl = (this.vcRef.element.nativeElement as HTMLElement).previousElementSibling;
        if (busyEl) {
            if (visible) {
                busyEl.classList.remove('hide');
            } else {
                busyEl.classList.add('hide');
            }
        }
    }

    constructor(private vcRef: ViewContainerRef, private renderer: Renderer2, ) { }

    public ngOnChanges(changes: SimpleChanges): void {
        for (const propName in changes) {
            if (changes.hasOwnProperty(propName)) {
                const chng = changes[propName];
                if (!chng.firstChange) {
                    const cur = chng.currentValue as BusyOptions;
                    this.visible = cur.show;
                }
            }
        }
    }
    public ngOnInit(): void {
        const busyIndEl = this.renderer.createElement('div') as HTMLElement;
        busyIndEl.classList.add('busy-indicator', 'hide');
        if (this.appBusy.fullPageBackdrop) {
            busyIndEl.classList.add('full-page');
        } else {
            const currEl = this.vcRef.element.nativeElement;
            const height = currEl.scrollHeight;
            const width = currEl.scrollWidth;
            busyIndEl.style.height = height + 'px';
            busyIndEl.style.width = width + 'px';
            busyIndEl.style.backgroundSize = Math.round(height < width ? (height * 0.2) : width * 0.2) + 'px';
        }
        if (this.appBusy.backdropColor) {
            busyIndEl.style.backgroundColor = this.appBusy.backdropColor;
        }
        const spinner = this.renderer.createElement('div') as HTMLElement;
        spinner.classList.add('spinner');
        if (this.appBusy.color) {
            spinner.style.backgroundColor = this.appBusy.color;
        }
        this.renderer.appendChild(busyIndEl, spinner);
        this.renderer.insertBefore(
            this.vcRef.element.nativeElement.parentElement, busyIndEl, this.vcRef.element.nativeElement
        );
        this.visible = this.appBusy.show || false;
    }
}
export interface BusyOptions {
    // busyObjects: Array<Promise<any> | Subscription>;
    color?: string;
    show: boolean;
    backdropColor?: string;
    fullPageBackdrop?: boolean;
}