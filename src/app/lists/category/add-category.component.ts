import { Component } from '@angular/core';
import { error, loading, success } from 'src/app/data/data';
import { categoryCreateFormate } from '../data/data';
import { formBase } from 'src/app/data/class';
import { FormBuilder } from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-add',
  templateUrl: '../pages/add.component.html',
  styleUrls: ['../styles/add.component.scss', '../../data/styles/form.scss'],
  animations: [error, success, loading],
})
export class AddCategoryComponent extends formBase {
  base = categoryCreateFormate;

  constructor(
    private fb:FormBuilder,
    private dialogRef: DialogRef,
    private categoryService: CategoryService
  ) {
    super('Add Category', );
  }

  data = {
    title: [''],
  }

  details = this.fb.group(this.data);

  onSubmit(){
    this.trueLoading();
    this.categoryService.add(this.details.value)
      .subscribe((res)=>{
        this.trueSuccess('Added Successfully');
        this.categoryService.pushList();
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
