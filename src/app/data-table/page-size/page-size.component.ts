import { Component, OnInit } from '@angular/core';
import { TableFilterService, PageSize } from '../table-filter.service';

@Component({
  selector: 'pt-page-size',
  templateUrl: './page-size.component.html',
  styleUrls: ['./page-size.component.scss']
})
export class PageSizeComponent implements OnInit {
  
  pageSize: PageSize;
  constructor(private tableFilterService: TableFilterService) { }

  ngOnInit() {
    this.pageSize = this.tableFilterService.currentFilter.pageSize;
  }
  
  setPageSize(pageSize: PageSize){
    this.tableFilterService.setFilter({ pageSize: pageSize });
  }

}
