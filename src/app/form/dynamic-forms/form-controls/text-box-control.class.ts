import {FormControlBase} from './form-control-base.class';
import {CONTROL_TYPES} from '../shared/control-types.const';
export class TextBoxControl extends FormControlBase<string> {
    controlType = CONTROL_TYPES.textbox;
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}
