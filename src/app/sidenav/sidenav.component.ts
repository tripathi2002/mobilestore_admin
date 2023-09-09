import { Component, EventEmitter, Output, OnInit, HostListener } from '@angular/core';
import { fadeInOut, navbarData, rotate } from './data/sideNavbar.data';
import { Router } from '@angular/router';
import { ItemsNavbarData, SideNavToggle } from './data/interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [ fadeInOut, rotate ]
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed=false;
  screenWidth=0;
  navData=navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed=false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});

    }
  }

  constructor(public router: Router){}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});

  }

  handelClick(item: ItemsNavbarData): void {
    this.shrinkItems(item);
    item.expanded=!item.expanded;
  }

  getActiveClass(data: ItemsNavbarData): string {
    return this.router.url.includes(data.routeLink) ? 'active': '';
  }

  shrinkItems(item: ItemsNavbarData): void {
    if(!this.multiple) {
      for(let modelItem of this.navData) {
        if( item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }

}
