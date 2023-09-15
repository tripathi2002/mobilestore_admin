import { Component } from '@angular/core';
import { Main } from '../class/main';
import { Dialog } from '@angular/cdk/dialog';
import { AddBrandComponent } from './add-brand.component';

@Component({
  selector: 'app-brand',
  templateUrl: '../pages/main.component.html',
  styleUrls: ['../styles/main.component.scss'], 
})
export class BrandComponent extends Main {

  constructor(
    private dialog: Dialog,
  ){
    super('Brand Page', 'brand');
  }

  onAdd(){
    this.dialog.open(AddBrandComponent);
  }
}
