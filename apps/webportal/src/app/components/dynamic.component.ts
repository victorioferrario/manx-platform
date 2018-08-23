import { Component, OnInit } from "@angular/core";
@Component({
    selector: "portal-dynamic",
    template: `
    <p class="dynamic">
      {{this.output1}}
    </p>
  `,
    styles: []
})
export class DynamicComponent implements OnInit {
    output1: string = "Hello" + new Date().getDate();
    constructor() { }
    ngOnInit() { }
}