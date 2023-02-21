import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomepageModule } from './homepage/homepage.module';
import { ManagementModule } from './management/management.module';
import { ProductPageModule } from './product-page/product-page.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomepageModule,
    ManagementModule,
    HttpClientModule,
    ProductPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
