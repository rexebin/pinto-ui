/**
 * Created by Rex on 09/12/2016.
 */

import { ActionReducer, Action } from '@ngrx/store';
import { SortByActions } from './sortby.actions';
import * as _ from "lodash";
export type Order = 'asc' | 'desc';
export type SortByPayload = {
  entity: string,
  property: string,
  order?: Order
}
export type SortByState = SortByPayload[];
const initialState: SortByState = [];

export const SortbyReducer: ActionReducer<SortByState> =
  (state: SortByState = initialState, action: Action) => {
    switch (action.type) {
      case SortByActions.Sort:
        const clone = _.cloneDeep(state);
        let existingPayload: SortByPayload = _.find(clone, (c) => c.entity === action.payload.entity);
        if(existingPayload){
          existingPayload = action.payload;
        }else{
          clone.push(action.payload);
        }
        return clone;
      default:
        return state;
    }
  };
