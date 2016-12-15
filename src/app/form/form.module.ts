import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from "./search/search.component";
import { DynamicFormComponent } from './dynamic-forms/dynamic-form/dynamic-form.component';
import { DynamicFormControlComponent } from './dynamic-forms/dynamic-form-control/dynamic-form-control.component';
import { ControlMessagesComponent } from './validation/control-messages.component';
import { EmailValidator } from './validation/validate-email.class';
import { ValidationService } from './validation/validation.service';
import { FormControlService } from './dynamic-forms/form-control.service';

/**
 * FormModule is to hold all common form related components, directive and pipes.
 * Define list of components, directives and pipes separately, then use spread operators to make module more readable.
 */

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule,
    SearchComponent
  ],
  declarations: [
    SearchComponent,
    DynamicFormComponent,
    DynamicFormControlComponent,
    ControlMessagesComponent,
    EmailValidator
  ]
})

export class FormModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FormModule,
      providers: [
        ValidationService,
        FormControlService
      ]
    }
  }
}
