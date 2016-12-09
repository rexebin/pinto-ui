import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { SharedModule } from '../shared/shared.module';
import { FormModule } from '../form/form.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormModule
  ],
  exports: [DataTableComponent],
  declarations: [DataTableComponent]
})
export class DataTableModule {
}
