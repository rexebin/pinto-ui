import {Pipe} from '@angular/core';

@Pipe({
    name: 'humanize'
})

export class HumanizePipe {
    transform(value: string) {
        if ((typeof value) !== 'string') {
            return value;
        }
        if (value.match(/^[A-Z \d\W]+$/)) {
            return value;
        }
        value = value.split(/(?=[A-Z])/).join(' ');
        value = value.trim();
        value = value[0].toUpperCase() + value.slice(1);
        return value;
    }
}
