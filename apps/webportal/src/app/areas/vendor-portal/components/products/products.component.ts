import { Component, OnInit } from '@angular/core';
import { ApplicationContext } from '@hubx/services';
@Component({
  selector: 'app-vendor-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor(private ctx:ApplicationContext) { }
  ngOnInit() {}
}
