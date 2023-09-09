import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../data/user.service';
import { User } from '../data/user.interface';
import { Router } from '@angular/router';
import { loginData, loginFormate } from '../data/user.data';
import { SharedService } from '../data/shared.service';
import { formBase } from 'src/app/data/class';
import { error, loading, success } from 'src/app/data/data';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-create.component.html',
  styleUrls: [ '../../data/styles/form.scss'],
  animations:[ loading, success, error ]
})
export class UserLoginComponent extends formBase {
  userbase = loginFormate;

  constructor(private fb: FormBuilder,
     private us: UserService,
     private router: Router,
     private sharedService: SharedService,
    ){
      super('SignIn', false);
     }

  data = loginData;

  userDetails = this.fb.group(this.data);

  onSubmit(): void {
    this.trueLoading();
    this.us.LoginUser(this.userDetails.value)
    .subscribe(
      (data: User)=>{
        this.trueSuccess();
        this.message='Successfully login'
        this.timelate();
        if(data.token){
          for(const key in data){
            localStorage.setItem(key, data[key]);
          }
          this.sharedService.updateHeaderData();
        }
          setTimeout(function () {
            this.router.navigateByUrl('dashboard')
          }.bind(this), 3000);
          
          
      },(error)=>{
        this.trueError("Unknown Error");
        this.timelate();
      },()=>{
        console.log("success");
    })

    this.userDetails = this.fb.group(this.data);
  }

}
