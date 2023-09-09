import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms'
import { createData, createFormate,} from '../data/user.data';
import { UserService } from '../data/user.service';
import { Router } from '@angular/router';
import { formBase } from 'src/app/data/class';
import { error, loading, success } from 'src/app/data/data';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss', '../../data/styles/form.scss'],
  animations:[ error, success, loading]
})
export class UserCreateComponent extends formBase {
  userbase = createFormate;

  constructor(private fb: FormBuilder, 
    private us: UserService,
    private router: Router, 
  ){
    super('SignUp Page', true)
  }

  data = {
    firstName: [''],
    lastName:[''],
    email:[''],
    mobile:[''],
    password:[''],
    // confirmPassword:[''],
    // address:[''], 
    role:['user']
  }
  userDetails = this.fb.group(this.data) 

  onSubmit(): void {
    this.trueLoading();
    this.us.createUser(this.userDetails.value)
    .subscribe(
      (data)=>{
        this.trueSuccess();
        this.message='Congratulation!!';
        setTimeout(function () {
          this.router.navigateByUrl('login')
        }.bind(this), 3000);
      },(error)=>{
        this.trueError("Unknown Error");
        this.timelate();
      },()=>{
        console.log("success");
    })

    this.userDetails = this.fb.group(this.data);
  }

  ngOnInit(): void {
    
  }

}
