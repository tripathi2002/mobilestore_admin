import { Dialog } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { AddCategoryComponent } from './add-category/add-category.component';

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  title = "Category List Page"

  constructor(
    private dialog: Dialog,
  ){

  }

  onAdd(){
    this.dialog.open(AddCategoryComponent);
  }

}
