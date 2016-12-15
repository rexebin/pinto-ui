import {Pipe, PipeTransform} from '@angular/core';

import * as moment from 'moment';

/*
 * Time helper using momentjs
 * Usage:
 *   timestamp | moment:'DD.MM.YYYY'
 * Defaults to 'L' - locale ie. '01/24/2016'
 */
@Pipe({name: 'moment'})
export class MomentPipe implements PipeTransform {
  transform(value:number, format:string) : any {

    let date = moment(value);
    if (date.isValid()) {
      return date.format(format || 'DD/MM/YYYY');
    } else {
      return value;
    }
  }
}
