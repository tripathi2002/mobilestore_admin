import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { SharedService } from '../../data/services/shared.service';
import { error, success, loading } from 'src/app/data/data';
import { formBase } from 'src/app/data/class';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss', '../../data/styles/dialogBox.scss'],
  animations: [error, success, loading]
})
export class LogOutComponent extends formBase {
  constructor(
    public dialogRef: DialogRef, 
    // private us: UserService,
    private sharedService: SharedService,
  ){
    super("Log Out Page",)
   }
  // animal: 'panda' | 'unicorn' | 'lion';

  sessionEnd(){
    this.trueLoading();
    localStorage.clear();
    this.sharedService.updateHeaderData()
    this.trueSuccess("Log Out Succesfully");
    setTimeout(function(){
      this.dialogRef.close();
    }.bind(this),1000);
  }

  // data any= { animal: 'panda' | 'unicorn' | 'lion' }
}
