import { Component } from '@angular/core';
@Component({
  selector: 'app-layoutfiber',
  templateUrl: './layout-fabric.component.html',
  styleUrls: ['./layout-fabric.component.css']
})
export class LayoutFiberComponent {
    constructor(){}
    fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`);

    onToggle(){}
}