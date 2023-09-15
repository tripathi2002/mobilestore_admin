import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { AddCategoryComponent } from './add-category.component';
import { Main } from '../class/main';

@Component({
  selector: 'app-category',
  templateUrl: '../pages/main.component.html',
  styleUrls: ['../styles/main.component.scss'],
})
export class CategoryComponent extends Main {
  page = "category";
  constructor(
    private dialog: Dialog,
  ){
    super("Category Page", 'category');
  }

  onAdd(){
    this.dialog.open(AddCategoryComponent);
  }

}
