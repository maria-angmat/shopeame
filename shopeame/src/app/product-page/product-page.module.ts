import { ProductComponent } from './../core/product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [
    SearchBarComponent,
    ProductsListComponent,
    ProductComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductPageRoutingModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class ProductPageModule { }
