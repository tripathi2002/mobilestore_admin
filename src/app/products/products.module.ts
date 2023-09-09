import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsCreateComponent } from './products-create/products-create.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductService } from './product.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsCreateComponent,
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
