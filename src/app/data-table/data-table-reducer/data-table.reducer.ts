/**
 * Created by Rex on 09/12/2016.
 */

import { ActionReducer, Action } from '@ngrx/store';
import { DataTableActions, SortPayload } from './data-table.actions';
import * as _ from "lodash";

export type Order = 'asc' | 'desc';
export type PageSize = 10 | 20 | 30 | 50 | 100;
export type ListParameters = {
  sortBy: string,
  order?: Order,
  currentPage: number,
  pageSize: PageSize
}

export type DataTableState = {
  [entity: string]: ListParameters
}
const initialState: DataTableState = {};

export const DataTableReducer: ActionReducer<DataTableState> =
  (state: DataTableState = initialState, action: Action) => {
    switch (action.type) {
      case DataTableActions.Sort:
        console.log(state);
        let clone = _.cloneDeep(state);
        console.log(clone);
        let payload: SortPayload = action.payload;
        _.extend(clone[payload.entity], payload.sortParameters);
        return clone;
      default:
        return state;
    }
  };
