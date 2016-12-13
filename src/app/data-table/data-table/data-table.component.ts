import { Component, OnInit, Input } from '@angular/core';
import { TableFilterService } from '../table-filter.service';

@Component({
  selector: 'pt-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
  providers: [TableFilterService]
})
export class DataTableComponent implements OnInit {
  
  @Input() entityName: string;
  constructor(private tableFilter: TableFilterService) { }

  ngOnInit() {
    this.tableFilter.init(this.entityName);
  }

}
