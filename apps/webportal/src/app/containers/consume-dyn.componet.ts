import {
    Component,
    ComponentFactoryResolver,
    OnInit,
    ViewContainerRef
  } from "@angular/core";

  import { DynamicComponent } from "../components/dynamic.component";
  
  @Component({
    selector: "app-consume-dynamic",
    template: `      
       <ng-content #vc></ng-content>     
    `,
    styles: []
  })
  export class ConsumeDynamicComponent implements OnInit {
   
    constructor(
      private resolver: ComponentFactoryResolver,
      private ref: ViewContainerRef
    ) {
        
    }  
    ngOnInit() {
      const factory = this.resolver.resolveComponentFactory(
        DynamicComponent);     
      const comp = this.ref.createComponent(factory);
    }
  }