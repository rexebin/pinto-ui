import { COL_WIDTH } from '../shared/COL_WIDTH.const';

export class FormControlBase<T> {
  value: T;
  key: string;
  label: string;
  order: number;
  controlType: string;
  validators: any[];
  width: string;
  
  constructor(options: FormControlOptions<T> = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.validators = options.validators || undefined;
    this.width = options.width || COL_WIDTH.col12;
  }
  
  updateValue(value: T) {
    this.value = value;
  }
}

export type FormControlOptions<T>  = {
  value?: T;
  key?: string;
  label?: string;
  required?: boolean;
  order?: number;
  controlType?: string;
  validators?: any[];
  width?: string;
}
