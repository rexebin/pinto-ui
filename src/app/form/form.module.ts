import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {SearchComponent} from "./search/search.component";

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
    ReactiveFormsModule, SearchComponent
  ],
  declarations: [SearchComponent]
})

export class FormModule {
}
