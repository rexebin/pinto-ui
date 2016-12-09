/**
 * Created by Rex on 09/12/2016.
 */

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
@Injectable()

export class ContainerActions {
  static SET_CONTAINER_FLUID = '[Container] Set to container-fluid';
  
  setContainerFluid(): Action {
    return { type: ContainerActions.SET_CONTAINER_FLUID }
  }
  
  static SET_CONTAINER = '[Container] Set to container';
  setContainer(): Action{
    return {type: ContainerActions.SET_CONTAINER}
  }
}
