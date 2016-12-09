import { ActionReducer, Action } from '@ngrx/store';
import { ContainerActions } from './container.actions';

export const containerReducer: ActionReducer<boolean> = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case ContainerActions.SET_CONTAINER_FLUID:
      return true;
    case ContainerActions.SET_CONTAINER:
      return false;
    default:
      return state;
  }
};

