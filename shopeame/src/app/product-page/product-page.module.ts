import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [
    SearchBarComponent,
    ProductsListComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class ProductPageModule { }
