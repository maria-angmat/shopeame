import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ProductComponent,
    FooterComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    ProductComponent,
    FooterComponent
  ]
})
export class CoreModule { }
