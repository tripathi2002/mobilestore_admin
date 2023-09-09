import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticComponent } from './statistic/statistic.component';
import { CoupensComponent } from './coupens/coupens.component';
import { SettingComponent } from './setting/setting.component';
import { PagesComponent } from './pages/pages.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'dashboard', component:DashboardComponent},

  {
    path:'products', 
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path:'coupens', 
    loadChildren: () => import('./coupens/coupens.module').then(m => m.CoupensModule)
  },
  {
    path:'user', 
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  { 
    path: 'category',
    loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)
  },
  {path:'statistics', component:StatisticComponent, pathMatch:'full'},
  {path:'setting', component:SettingComponent, pathMatch:'full'},
  {path:'pages', component:PagesComponent, pathMatch:'full'},
  {path:'orders', component:OrdersComponent, pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
