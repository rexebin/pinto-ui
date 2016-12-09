/**
 * Created by Rex on 09/12/2016.
 */

import { Injectable } from '@angular/core';
import { SortByPayload } from './data-table.reducer';
import { Action } from '@ngrx/store';
@Injectable()

export class SortByActions {
  static Sort = '[Sort] Sort data';
  
  sort(payload: SortByPayload): Action {
    return {
      type: SortByActions.Sort,
      payload: payload
    }
  }
}
