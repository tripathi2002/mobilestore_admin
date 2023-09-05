import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoupensComponent } from './coupens.component';
import { CoupenListComponent } from './coupen-list/coupen-list.component';
import { CoupenCreateComponent } from './coupen-create/coupen-create.component';

const routes: Routes = [
  { path:'create',
    component:CoupenCreateComponent
  },
  {
    path:'list',
    component:CoupenListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoupensRoutingModule { }
