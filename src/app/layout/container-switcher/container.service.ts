import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ContainerService {
  private _isFluid: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public isFluid: Observable<boolean> = this._isFluid.asObservable();
  constructor() { }
  
  setToContainer(){
    this._isFluid.next(false);
  }
  
  setToContainerFluid(){
    this._isFluid.next(true);
  }

}
