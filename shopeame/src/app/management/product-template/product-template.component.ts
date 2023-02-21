import { newProduct } from './../../models/productRegister.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-template',
  templateUrl: './product-template.component.html',
  styleUrls: ['./product-template.component.scss']
})
export class ProductTemplateComponent {
  @Input () product = {
    name: '',
    price: 0,
    description: '',
    image: '',
    stars: 0,
  }
}
