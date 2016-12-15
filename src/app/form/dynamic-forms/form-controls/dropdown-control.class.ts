import {FormControlBase} from './form-control-base.class';
import {CONTROL_TYPES} from '../shared/control-types.const';
import {IDisplayName} from '../../../repository/search-result.interface';
export class DropdownControl extends FormControlBase<string> {
    controlType = CONTROL_TYPES.dropdown;
    options: IDisplayName[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }

}
