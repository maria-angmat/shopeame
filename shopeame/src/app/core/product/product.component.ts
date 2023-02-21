import { Product } from '../product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  searchTerm: string = " ";
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit()  {
    this.productService.getProducts()
      .subscribe((data: any[]) => {
        this.products = data;
        this.filteredProducts = this.products;
      });
      this.productService.getProducts().subscribe(products => {
        this.products = products;
        this.filteredProducts = products;
      });
  }

  onSearch(searchTerm: string) {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
