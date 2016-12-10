/**
 * Created by Rex on 09/12/2016.
 */

import { Injectable } from '@angular/core';
import { Order, PageSize } from './data-table.reducer';
import { Action } from '@ngrx/store';

export type SortPayload = {
  entity: string,
  sortBy: string,
  order: Order
}

export type PagePayload = {
  entity: string,
  currentPage: number,
  pageSize: PageSize
}

@Injectable()

export class DataTableActions {
  static Sort = '[Sort] Sort list';
  
  sort(payload: SortPayload): Action {
    return {
      type: DataTableActions.Sort,
      payload: payload
    }
  }
  
  static Page = '[Page] Change page and page size';
  
  page(payload: PagePayload): Action{
    return {
      type: DataTableActions.Page,
      payload: payload
    }
  }
}
