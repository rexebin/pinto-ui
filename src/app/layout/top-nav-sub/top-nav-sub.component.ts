import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../common/apis/menu-item';
import { Router } from '@angular/router';

@Component({
  selector: 'pt-top-nav-sub',
  templateUrl: './top-nav-sub.component.html',
  styleUrls: ['./top-nav-sub.component.scss']
})
export class TopNavSubComponent implements OnInit {
  @Input() menuItem: MenuItem = {};
  constructor(private router: Router) { }

  ngOnInit() {
  }

  click(item: MenuItem){
    if(item.disabled){
      return;
    }
    if(item.url){
      this.router.navigateByUrl(item.url);
    } else if(item.routerLink){
      this.router.navigate(item.routerLink);
    }
  }

}
