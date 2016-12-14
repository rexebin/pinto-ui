import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TableFilterService } from '../table-filter.service';

@Component({
  selector: 'pt-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  
  @Input() collectionSize: number;
  page: number = 0;
  
  constructor(private tableFilterService: TableFilterService) {
  }
  
  ngOnInit() {
  }
  
  pageChange(p: number){
    this.page = p;
    this.tableFilterService.setFilter({page: p});
  }
  
}
