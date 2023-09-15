import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { formBase } from '../../data/class';
import { error, loading, success } from '../../data/data';



@Component({
  selector: 'app-delete-category',
  templateUrl: '../pages/delete.component.html',
  styleUrls: ['../../data/styles/loadingMessage.scss', '../../data/styles/dialogBox.scss'],
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
