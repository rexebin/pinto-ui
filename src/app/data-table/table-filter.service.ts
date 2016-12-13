import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as _ from "lodash";

export type Order = 'asc' | 'desc';

export type PageSize = 10 | 20 | 30 | 50 | 100;

export type TableFilter = {
  entity: string,
  sortBy?: string,
  order?: Order,
  page?: number,
  pageSize?: PageSize
}

export type SortParams = {
  entity: string,
  sortBy: string,
  order?: Order
}

export type PageParams = {
  entity: string,
  page?: number,
  pageSize?: PageSize
}

export type TableFilters = TableFilter[];

@Injectable()
export class TableFilterService {
  
  private _filters: BehaviorSubject<TableFilters> = new BehaviorSubject([]);
  
  public filters: Observable<TableFilters> = this._filters.asObservable();
  
  constructor() {
  }
  
  filter(param: SortParams | PageParams | TableFilter) {
    let tableFilters = this._filters.getValue();
    let f = _.find(tableFilters, (p) => p.entity === param.entity);
    if (f) {
      _.extend(f, param);
    } else {
      let newFilter: TableFilter = { entity: param.entity };
      _.extend(newFilter, param);
      tableFilters.push(newFilter);
    }
    this._filters.next(tableFilters);
    
  }
}


