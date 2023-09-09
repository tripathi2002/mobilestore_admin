import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { formBase } from 'src/app/data/class';
import { error, success, loading } from 'src/app/data/data';
import { productCreateFormate } from '../data/product.data';

@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.scss', '../../data/styles/form.scss'],
  animations:[ error, success, loading]
})
export class ProductsCreateComponent extends formBase {
  productBase = productCreateFormate;

  constructor( 
    private fb: FormBuilder,
   ){
    super('Create Product', true)
  }

  data = {
    productName: [''],
    productDetails: ['']

  }

  productDetails = this.fb.group(this.data)

  onSubmit():void {
    this.trueLoading();
  }

}
