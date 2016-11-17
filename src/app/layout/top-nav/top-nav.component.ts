import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../common/apis/menu-item';

@Component({
  selector: 'pt-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Input() menuItems: MenuItem[] = [];
  constructor() { }

  ngOnInit() {
  }

}
