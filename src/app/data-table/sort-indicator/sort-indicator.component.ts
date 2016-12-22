import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pt-sort-indicator',
  templateUrl: './sort-indicator.component.html',
  styleUrls: ['./sort-indicator.component.scss']
})
export class SortIndicatorComponent implements OnInit {
  @Input() isSorted: boolean = false;
  @Input() order: boolean = true;
  constructor() { }

  ngOnInit() {
  }

}
