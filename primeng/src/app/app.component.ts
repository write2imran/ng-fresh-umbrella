import { Component, OnInit } from '@angular/core';
import { Product } from './domain/product';
import { ProductService } from './service/productservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'primeng';

  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsMini().then((data) => {
        this.products = data;
    });
  }

}
