import { ChangeDetectorRef, Component, OnDestroy, OnInit, Input } from '@angular/core';
import { ApplicationContext, Actions_UI, MenuAction, ActionEmitter, SizeEnum } from '@hubx/services'
@Component({
    selector: 'fabric-dev-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class DevToolbarComponent implements OnDestroy, OnInit {
    @Input()
    SubHeaderTitle: string;   
    constructor(public ctx: ApplicationContext) { }
    ngOnInit(): void { }
    ngOnDestroy(): void { }
    onChangeMode(value: any) {
        this.onSwitchMode();
    }
    onChangeSize(value: any) {
        this.onSwitchSize();
    }
    onToggleMenu() {
        const self = this;
        const event = new ActionEmitter(
            Actions_UI.Menu,
            MenuAction.State_Toggle);
        self.ctx.dispatch.emit(event);
    }
    onSwitchMode() {
        const self = this;
        const event = new ActionEmitter(
            Actions_UI.Mode,
            MenuAction.SwitchMode);
        this.ctx.dispatch.emit(event);
    }
     onSwitchSize() {
        const self = this;
        const event = new ActionEmitter(Actions_UI.Resize,
            (self.ctx.ux.props.size === SizeEnum.large)
                ? MenuAction.Resize_Small : MenuAction.Resize_Large);
        self.ctx.dispatch.emit(event);
    }
}
