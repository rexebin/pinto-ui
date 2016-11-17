import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../common/apis/menu-item';

@Component({
  selector: 'pt-top-nav-sub',
  templateUrl: './top-nav-sub.component.html',
  styleUrls: ['./top-nav-sub.component.scss']
})
export class TopNavSubComponent implements OnInit {
  @Input() menuItem: MenuItem = {};
  constructor() { }

  ngOnInit() {
  }

}
