import { Component, Inject } from '@angular/core';
import { error, loading, success } from '../../data/data';
import { formBase } from 'src/app/data/class';
import { BrandService } from '../services/brand.service';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-delete-brand',
  templateUrl:'../pages/delete.component.html',
  styleUrls: ['../../data/styles/loadingMessage.scss', '../../data/styles/dialogBox.scss'], 
  animations: [error, success, loading],
})
export class DeleteBrandComponent extends formBase {
  constructor(
    public dialogRef: DialogRef,
    private bs: BrandService,
    @Inject(DIALOG_DATA) public data: any
  ){
    super('Delete Category')
    this.message = '';
  }

  onDelete(){
    this.trueLoading();
    console.log(this.data.id)
    this.bs.delete(this.data.id)
      .subscribe((res)=>{
        this.bs.pushList();
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
