import { Component, OnInit } from '@angular/core';
import { TableFilterService, PageSize } from '../table-filter.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'pt-page-size',
  templateUrl: './page-size.component.html',
  styleUrls: ['./page-size.component.scss']
})
export class PageSizeComponent implements OnInit {
  
  selectControl:FormControl = new FormControl();
  options = [
    {value: 10, description: '10 items per page'},
    {value: 20, description: '20 items per page'},
    {value: 30, description: '30 items per page'},
    {value: 50, description: '50 items per page'},
    {value: 100, description: '100 items per page'}
  ];
  constructor(private tableFilterService: TableFilterService) { }

  ngOnInit() {
    this.selectControl.setValue(this.tableFilterService.currentFilter.pageSize);
  }
  
  setPageSize(pageSize: string){
    this.tableFilterService.setFilter({ pageSize: parseInt(pageSize) as PageSize });
  }

}
