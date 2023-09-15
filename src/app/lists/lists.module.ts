import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListCategoryComponent } from './category/list-category.component';
import { CategoryComponent } from './category/main-category.component';
import { AddCategoryComponent } from './category/add-category.component';
import { CategoryService } from './services/category.service';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from '@angular/cdk/dialog';
import { BrandComponent } from './brand/main-brand.component';
import { ListBrandComponent } from './brand/list-brand.component';
import { DeleteBrandComponent } from './brand/delete-brand.component';
import { AddBrandComponent } from './brand/add-brand.component';
import { UpdateBrandComponent } from './brand/update-brand.component';
import { BrandService } from './services/brand.service';


@NgModule({
  declarations: [
    CategoryComponent,
    ListCategoryComponent,
    AddCategoryComponent,
    BrandComponent,
    ListBrandComponent,
    DeleteBrandComponent,
    AddBrandComponent,
    UpdateBrandComponent,
  ],
  imports: [
    CommonModule,
    ListsRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    DialogModule
  ],
  providers: [
    CategoryService,
    BrandService
  ]
})
export class ListsModule { }
