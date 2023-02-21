import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: any[] = [];
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe((data: any[]) => {
        this.products = data;
      });
  }
}
