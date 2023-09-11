import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CategoryRoutingModule } from './category-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { CategoryComponent } from './category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { CategoryService } from './data/category.service';
import { DialogModule } from '@angular/cdk/dialog';
import { DeleteCategoryComponent } from './delete-category.component';

@NgModule({
  declarations: [
    CategoryComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    DeleteCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule,
  ],
  providers: [
    CategoryService,
  ]

})
export class CategoryModule { }
