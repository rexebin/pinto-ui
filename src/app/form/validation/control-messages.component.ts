import { Component, Host, Input } from '@angular/core';
import { ValidationService } from './validation.service';
import { FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'control-messages',
  template: `<div *ngIf="errorMessage !== null" class="alert-danger">{{errorMessage}}</div>`,
  providers: [ValidationService]
})
export class ControlMessagesComponent {
  @Input('control') controlName: string;
  
  constructor(@Host() private formGroup: FormGroupDirective, private validationService: ValidationService) {
    
  }
  
  get errorMessage() {
    // Find the control in the Host (Parent) form
    
    let c = this.formGroup.directives.find(dir => dir.name ===this.controlName);
    
    for (let propertyName in c.errors) {
      // If control has a error
      if (c.errors.hasOwnProperty(propertyName) && c.pristine === false) {
        // Return the appropriate error message from the Validation Service
        return this.validationService.getValidatorErrorMessage(propertyName, c.errors);
      }
    }
    return undefined;
  }
}
