import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticComponent } from './statistic/statistic.component';
import { CoupensComponent } from './coupens/coupens.component';
import { SettingComponent } from './setting/setting.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'products', component:ProductsComponent, pathMatch:'full'},
  {path:'statistics', component:StatisticComponent, pathMatch:'full'},
  {path:'coupens', component:CoupensComponent, pathMatch:'full'},
  {path:'setting', component:SettingComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
