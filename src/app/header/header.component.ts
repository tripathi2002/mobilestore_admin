import { Component, Input, HostListener, OnInit } from '@angular/core';
import { languages, userItems } from '../interfaces/header-data';

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
  userItems = userItems;

  @HostListener('window:resize', ['$event'])
    onResize(event: any) {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
    }

    ngOnInit(): void {
      this.checkCanShowSearchAsOverlay(window.innerWidth);
      this.selectedLanguage = this.languages[0];
    }

  getHeadClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'head-trimmed';
    } else {
      styleClass = 'head-md-screen';
    } 
    return styleClass;
  }

  checkCanShowSearchAsOverlay(innerWidth: number): void {
    if(innerWidth < 850){
      this.canShowSearchAsOverlay=true;
    } else {
      this.canShowSearchAsOverlay=false;
    }
  }

}
