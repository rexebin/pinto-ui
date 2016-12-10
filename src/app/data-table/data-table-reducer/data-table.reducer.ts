/**
 * Created by Rex on 09/12/2016.
 */

import { ActionReducer, Action } from '@ngrx/store';
import { DataTableActions, SortPayload } from './data-table.actions';
import * as _ from "lodash";

export type Order = 'asc' | 'desc';
export type PageSize = 10 | 20 | 30 | 50 | 100;
export type DataTableParameter = {
  entity: string,
  sortBy?: string,
  order?: Order,
  currentPage?: number,
  pageSize?: PageSize
}

export type DataTableState = DataTableParameter[];
const initialState: DataTableState = [];

export const DataTableReducer: ActionReducer<DataTableState> =
  (state: DataTableState = initialState, action: Action) => {
    switch (action.type) {
      case DataTableActions.Sort:
        let clone: DataTableState = _.cloneDeep(state);
        let payload: SortPayload = action.payload;
        let exist = _.find(clone, (p) => p.entity === payload.entity);
        if (exist) {
          exist = _.extend(exist, payload);
        } else {
          let newEntity: DataTableParameter = _.extend({}, payload);
          clone = [
            ...clone,
            newEntity
          ];
        }
        return clone;
      default:
        return state;
    }
  };
