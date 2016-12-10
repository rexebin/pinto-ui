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
  static SortingOrPaging = '[Sorting or paging] for data list';
  
  sortingOrPaging(payload: SortPayload | PagePayload): Action {
    return {
      type: DataTableActions.SortingOrPaging,
      payload: payload
    }
  }
}
