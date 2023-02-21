import { ProductService } from './../../core/services/product.service';
import { newProduct } from './../../models/productRegister.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public createProduct: FormGroup;
  public submitted: boolean = false;

  parentValue = {
    name: '',
    price: 0,
    description: '',
    image: 'https://via.placeholder.com/150',
    stars: 0
 }

  constructor(private formBuilder: FormBuilder, public productService: ProductService) {
    this.createProduct = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: [0, [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      stars: [0, [Validators.required]]
    });
  }

  ngOnInit() {}

  public onSubmit() {
    this.submitted = true;

    if (this.createProduct.valid) {
      const newProduct: newProduct = {
        name: this.createProduct.get('name')?.value,
        price: this.createProduct.get('price')?.value,
        description: this.createProduct.get('description')?.value,
        image: this.createProduct.get('image')?.value,
        stars: this.createProduct.get('stars')?.value
      }
      this.productService.product.push(newProduct);
      this.createProduct.reset();
      this.submitted = false;
    }
  }
}

