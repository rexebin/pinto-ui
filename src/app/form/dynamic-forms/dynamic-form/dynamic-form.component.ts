import {Input, Component} from '@angular/core';
import {Location} from '@angular/common';
import {FormControlService} from '../form-control.service';
import {Repository} from "../../../repository/repository";
import { FormGroup } from '@angular/forms';
@Component({
    selector: 'dynamic-form',
    template: require('./dynamic-form.component.html'),
    providers: [FormControlService]

})
export class DynamicFormComponent {
    @Input() item: Object;
    @Input() id: string;
    @Input() title: string;
    form: FormGroup;
    payLoad = '';
    errorMessage = '';

    get controls() {
        let result = [];
        for (let property in this.item) {
            if (this.item.hasOwnProperty(property)) {
                result.push(this.item[property]);
            }
        }
        return result;
    }

    constructor(private _fcs: FormControlService, private repo: Repository, private location: Location) {

    }

    ngOnInit() {
        this.form = this._fcs.toControlGroup(this.controls);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);

        this.repo.save(this.form.value, parseInt(this.id)).subscribe(item => {
          console.log(item);
          
        }, error => this.errorMessage = error);
    }

    discard(){

      this.location.back();

    }
}
