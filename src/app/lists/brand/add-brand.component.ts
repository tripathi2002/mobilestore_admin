import { Component } from '@angular/core';
import { formBase } from 'src/app/data/class';
import { error, loading, success } from 'src/app/data/data';
import { brandCreateFormate } from '../data/data';
import { FormBuilder } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { BrandService } from '../services/brand.service';

@Component({
  selector: 'app-add-brand',
  templateUrl: '../pages/add.component.html',
  styleUrls: ['../styles/add.component.scss', '../../data/styles/form.scss'],
  animations: [error, success, loading],
})
export class AddBrandComponent extends formBase{
  base = brandCreateFormate;

  constructor(
    private fb:FormBuilder,
    private dialogRef: DialogRef,
    private bs:BrandService 
  ){
    super('Add Brand');
  }

  data = {
    title: [''],
  }

  details = this.fb.group(this.data);

  onSubmit(){
    console.log("1");
    this.trueLoading();
    this.bs.add(this.details.value)
      .subscribe((res)=>{
        console.log(res);
        this.trueSuccess('Added Successfully');
        this.bs.pushList();
        setTimeout(function(){
          this.dialogRef.close();
        }.bind(this), 2000)
      },(err)=>{
        this.trueError(err.error.message);
        console.log(err);
      }, ()=>{
        this.details =  this.fb.group(this.data);
      })
    }
    
  onClose(){
    this.dialogRef.close();
  }
}
