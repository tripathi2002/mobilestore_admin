import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/main-category.component';
import { BrandComponent } from './brand/main-brand.component';
// import { BrandComponent } from './brand/brand.component';

const routes: Routes = [
  {
    path:'category',component:CategoryComponent
  },
  {
    path:'brand',component:BrandComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListsRoutingModule { }
