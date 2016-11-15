import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PageWidthService {
    private announceWidthChangeSource = new Subject<boolean>();
    private _isFluid = false;
    public widthChanged = this.announceWidthChangeSource.asObservable();
    constructor() {
    }

    get isFluid(){
        return this._isFluid;
    }

    set isFluid(value: boolean){
        this._isFluid = value;
        this.announceWidthChangeSource.next(this.isFluid);
    }
}
