import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { CategoryService } from './data/category.service';
import { formBase } from '../data/class';
import { error, loading, success } from '../data/data';



@Component({
  selector: 'app-delete-category',
  template: `
        <div class="head">
  <div class="title">
    Are you sure to delete  :
  </div>

  <div class="choice-box">
    <div class="choice-btn-left">
      <button (click)="onDelete()">Yes</button>
    </div>
    <div class="choice-btn-right">
      <button (click)="dialogRef.close()">No</button>
    </div>
  </div>
</div>

<div class="message" 
        [@error]="isError?'start':'end'" 
        [@success]="isSuccess?'start':'end'"  
    >
        <span>{{message}}</span>
    </div>
    <div class="loading-box"
    *ngIf="isLoading"
    >
    <img class="lodaing-box-img" src="../../../assets/images/loading.gif" alt="loading image">
    </div>
  `,
  styleUrls: ['../data/styles/loadingMessage.scss', '../data/styles/dialogBox.scss'],
  animations: [error, success, loading]
})
export class DeleteCategoryComponent extends formBase {

  constructor(
    public dialogRef: DialogRef,
    private cs: CategoryService,
    @Inject(DIALOG_DATA) public data: any
  ){
    super('Delete Category')
    this.message = '';
  }

  onDelete(){
    this.trueLoading();
    console.log(this.data.id)
    this.cs.delete(this.data.id)
      .subscribe((res)=>{
        this.cs.pushList();
        setTimeout(function(){
          this.trueSuccess('Deleted Successfully');
          this.dialogRef.close();
        }.bind(this), 2000)
      },(err)=>{
        this.trueError(err.error.message);
        console.log(err);
      }, ()=>{

      })
  }
}
