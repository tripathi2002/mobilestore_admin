import { Component, Input, HostListener, OnInit } from '@angular/core';
import { languages, } from './data/header-data';
import { Router } from '@angular/router';
import { Dialog } from '@angular/cdk/dialog';
import { LogOutComponent } from '../user/log-out/log-out.component';
import { SharedService } from '../user/data/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() collapsed: boolean = false;
  @Input() screenWidth: number = 0;

  canShowSearchAsOverlay = false;
  selectedLanguage: any;

  languages = languages;
  userItems:any;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
  }

  constructor(
    public router: Router,
    public dialog: Dialog,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.checkCanShowSearchAsOverlay(window.innerWidth);
    this.selectedLanguage = this.languages[0];

    this.sharedService.headerData$.subscribe((data)=>{
      console.log(data);
      this.userItems = data;
    
    })
  }

  getHeadClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    }
    return styleClass;
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if (innerWidth < 850) {
      this.canShowSearchAsOverlay = true;
    } else {
      this.canShowSearchAsOverlay = false;
    }
  }

  openDialog() {
    this.dialog.open(LogOutComponent)
    
  }

}
