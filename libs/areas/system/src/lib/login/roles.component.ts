import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
    selector: 'hubxsystem-roles',
    templateUrl: 'roles.component.html',
    styleUrls: ['roles.component.css'],
})
export class RolesComponent {
    @Output()
    dispatch: EventEmitter<string>;
    isRowSelectd: boolean;
    @Input()
    public selectedRole: string;
    roles: string[] = ['Buyer', 'Seller', 'Admin', 'SuperAdmin'];
    constructor() {
        this.dispatch = new EventEmitter<string>();
    }
    onChange() {
        this.dispatch.emit(
            this.selectedRole
        );
    }
}
