import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatisticComponent } from './statistic/statistic.component';
import { SettingComponent } from './setting/setting.component';
import { OrdersComponent } from './orders/orders.component';
import { PagesComponent } from './pages/pages.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { HeaderComponent } from './header/header.component';

import { OverlayModule } from '@angular/cdk/overlay';
import { CdkMenuModule } from '@angular/cdk/menu';
import { LoginComponent } from './user/login/login.component';
import { CreateComponent } from './user/create/create.component';
import { ListComponent } from './user/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    DashboardComponent,
    SettingComponent,
    OrdersComponent,
    PagesComponent,
    SublevelMenuComponent,
    HeaderComponent,
    LoginComponent,
    CreateComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    OverlayModule,
    CdkMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
