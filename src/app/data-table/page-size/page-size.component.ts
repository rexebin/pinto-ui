import { Component, OnInit } from '@angular/core';
import { TableFilterService, PageSize } from '../table-filter.service';

@Component({
  selector: 'pt-page-size',
  templateUrl: './page-size.component.html',
  styleUrls: ['./page-size.component.scss']
})
export class PageSizeComponent implements OnInit {
  
  pageSize: PageSize = 20;
  options = [
    {pageSize: 10, description: '10 items per page'},
    {pageSize: 20, description: '20 items per page'},
    {pageSize: 30, description: '30 items per page'},
    {pageSize: 50, description: '50 items per page'},
    {pageSize: 100, description: '100 items per page'}
  ];
  constructor(private tableFilterService: TableFilterService) { }

  ngOnInit() {
    this.pageSize = this.tableFilterService.currentFilter.pageSize;
  }
  
  setPageSize(pageSize: PageSize){
    this.tableFilterService.setFilter({ pageSize: pageSize });
  }

}
