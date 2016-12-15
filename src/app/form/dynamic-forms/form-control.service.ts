import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class FormControlService {
  constructor(private _fb: FormBuilder) {
  }
  
  toControlGroup(controls: Array<any>) {
    let group = {};
    controls.forEach(control => {
      group[control.key] = control.validators ? [
          control.value || '',
          Validators.compose(control.validators)
        ] : [control.value || ''];
      
    });
    return this._fb.group(group);
  }
}
