import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserLoginComponent } from './user-create/user-login.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

import { UserService } from './data/user.service';
import { LogOutComponent } from './log-out/log-out.component';


@NgModule({
  declarations: [
    UserComponent,
    UserCreateComponent,
    UserLoginComponent,
    UserDetailComponent,
    LogOutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule
  ],
  providers: [
    UserService,
  ]
})
export class UserModule { }
