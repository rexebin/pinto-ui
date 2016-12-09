import { Component, OnDestroy } from '@angular/core';
import { MenuItem } from './common/apis/menu-item';
import { topNavMenuItems } from './layout/top-nav-menu-items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnDestroy {
  
  topMenuItems: MenuItem[] = topNavMenuItems;
  
  ngOnDestroy(): void {
    
  }
  
  title = 'app works!';
  
  constructor() {
    
  }
  
  search(searchText: string) {
    console.log(searchText);
  }
}
