import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { UserService } from '../data/user.service';
import { SharedService } from '../data/shared.service';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent {
  constructor(
    public dialogRef: DialogRef, 
    // private us: UserService,
    private sharedService: SharedService,
  ){ }
  // animal: 'panda' | 'unicorn' | 'lion';

  sessionEnd(){
    localStorage.clear();
    this.sharedService.updateHeaderData()
    this.dialogRef.close();

  }

  // data any= { animal: 'panda' | 'unicorn' | 'lion' }
}
