import { ActionReducer, Action } from '@ngrx/store';
import { ContainerActions } from './container.actions';

export type ContainerState = boolean;
const initialState: ContainerState = false;

export const containerReducer: ActionReducer<boolean> = (state: boolean = initialState, action: Action) => {
  switch (action.type) {
    case ContainerActions.SetContainerFluid:
      return true;
    case ContainerActions.SetContainer:
      return false;
    default:
      return state;
  }
};

