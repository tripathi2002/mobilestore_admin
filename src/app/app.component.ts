import { Component } from '@angular/core';
import { SideNavToggle } from './sidenav/data/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mobilestore-admin';
  isSideNavCollapsed = false;
  screenWidth=0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth=data.screenWidth;
    this.isSideNavCollapsed=data.collapsed;
  }
}
