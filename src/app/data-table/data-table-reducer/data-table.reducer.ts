/**
 * Created by Rex on 09/12/2016.
 */

import { ActionReducer, Action } from '@ngrx/store';
import { DataTableActions, SortPayload, PagePayload } from './data-table.actions';
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
      case DataTableActions.SortingOrPaging:
        return getNewState(state, action);
      default:
        return state;
    }
  };

function getNewState(state: DataTableState, action: Action): DataTableState {
  let clonedState: DataTableState = _.cloneDeep(state);
  const payload: SortPayload | PagePayload = action.payload;
  let exist = _.find(clonedState, (p) => p.entity === payload.entity);
  if (exist) {
    _.extend(exist, payload);
  } else {
    let newEntity: DataTableParameter = { entity: payload.entity };
    _.extend(newEntity, payload);
    clonedState = [
      ...clonedState,
      newEntity
    ];
  }
  return clonedState;
}
