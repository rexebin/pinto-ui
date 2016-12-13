import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import * as _ from "lodash";

export type Order = 'asc' | 'desc';

export type PageSize = 10 | 20 | 30 | 50 | 100;

export type TableFilter = {
  sortBy?: string,
  order?: Order,
  page?: number,
  pageSize?: PageSize
}

export type SortParams = {
  sortBy: string,
  order?: Order
}

export type PageParams = {
  page?: number,
  pageSize?: PageSize
}

@Injectable()
export class TableFilterService {
  
  private get _defaultFilter(): TableFilter {
    return {
      sortBy: 'created',
      order: 'desc',
      page: 1,
      pageSize: 10
    };
  }
  
  private _entityName: string;
  
  private _filter: BehaviorSubject<TableFilter> = new BehaviorSubject<TableFilter>(this._defaultFilter);
  
  public filter: Observable<TableFilter> = this._filter.asObservable();
  
  public get currentFilter(): TableFilter {
    return this._filter.getValue();
  }
  
  setFilter(param: SortParams | PageParams | TableFilter) {
    let f = _.cloneDeep(this.currentFilter);
    _.extend(f, param);
    this._setItem(f);
    this._filter.next(f);
  }
  
  init(entityName: string) {
    this._entityName = entityName;
    let savedFilter = this._getItem();
    if (!savedFilter) {
      this._setItem(this._defaultFilter);
      return;
    }
    this._filter = new BehaviorSubject<TableFilter>(savedFilter);
  }
  
  _setItem(f: TableFilter) {
    localStorage.setItem(this._entityName, JSON.stringify(f));
  }
  
  _getItem(): TableFilter {
    return JSON.parse(localStorage.getItem(this._entityName));
  }
  
}


