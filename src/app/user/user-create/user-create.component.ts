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
    role:['admin']
  }
  userDetails = this.fb.group(this.data) 

  onSubmit(): void {
    this.trueLoading();
    this.us.createUser(this.userDetails.value)
    .subscribe(
      (data)=>{
        this.trueSuccess("Created User");
        this.message='Congratulation!!';
        setTimeout(function () {
          this.router.navigateByUrl('user/login')
        }.bind(this), 3000);
      },(err)=>{
        this.trueError(err.error.message);
        this.timelate();
      },()=>{
        this.userDetails = this.fb.group(this.data);
    })

  }

  ngOnInit(): void {
    
  }

}
