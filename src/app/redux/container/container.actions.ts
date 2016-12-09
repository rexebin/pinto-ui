/**
 * Created by Rex on 09/12/2016.
 */

import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
@Injectable()

export class ContainerActions {
  static SetContainerFluid = '[Container] Set to container-fluid';
  static SetContainer = '[Container] Set to container';
  
  setContainerFluid(): Action {
    return { type: ContainerActions.SetContainerFluid }
  }
  
  setContainer(): Action {
    return { type: ContainerActions.SetContainer }
  }
}
