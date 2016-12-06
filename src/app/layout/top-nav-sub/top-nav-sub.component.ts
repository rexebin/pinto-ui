import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';
import { MenuItem } from '../../common/apis/menu-item';

@Component({
  selector: 'pt-top-nav-sub',
  templateUrl: './top-nav-sub.component.html',
  styleUrls: ['./top-nav-sub.component.scss']
})
export class TopNavSubComponent implements OnInit {
  @Input() menuItem: MenuItem = {};
  
  constructor(private router: Router) {
  }
  
  ngOnInit() {
  }
  
  click(item: MenuItem) {
    if (item.disabled) {
      return;
    }
    if (item.url) {
      this.router.navigateByUrl(item.url);
    } else if (item.routerLink) {
      this.router.navigate(item.routerLink);
    }
    
    if (item.url && item.routerLink) {
      console.warn(`item ${item.label} has url and routerLink, only url will be navigated to.`);
    }
  }
  
}
