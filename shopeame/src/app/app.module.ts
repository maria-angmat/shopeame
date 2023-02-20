import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './core/product/product.component';
import { core } from '@angular/compiler';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
