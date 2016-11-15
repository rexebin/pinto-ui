import { ActionReducer, Action } from '@ngrx/store';
export const setContainerFluid = 'set-container-fluid';
export const setContainer = 'set-container';

export const containerReducer: ActionReducer<boolean> = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case setContainerFluid:
      return true;
    case setContainer:
      return false;
    default:
      return false;
  }
};

