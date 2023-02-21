import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductTemplateComponent } from './product-template/product-template.component';


@NgModule({
  declarations: [
    FormComponent,
    ProductTemplateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ManagementRoutingModule,
  ],
  exports: [
    FormComponent
  ]
})
export class ManagementModule { }
