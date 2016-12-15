import {Component, Input, OnInit} from '@angular/core';
import {FormControlBase} from '../form-controls/form-control-base.class';
import {CONTROL_TYPES} from '../shared/control-types.const';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'pinto-dynamic-form-control',
    templateUrl: './dynamic-form-control.component.html',
    styleUrls: ['./dynamic-form-control.component.scss']
})
export class DynamicFormControlComponent {
    @Input() control: FormControlBase<any>;
    @Input() form: FormGroup;
    textBox = CONTROL_TYPES.textbox;
    dropDown = CONTROL_TYPES.dropdown;

    // get isValid() {
    //     return this.form.form-controls[this.control.key].valid;
    // }
}
