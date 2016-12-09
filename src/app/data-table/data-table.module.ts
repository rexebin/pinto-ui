import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { SharedModule } from '../shared/shared.module';
import { FormModule } from '../form/form.module';
import { SortableDirective } from './sortable/sortable.directive';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormModule
  ],
  exports: [DataTableComponent],
  declarations: [DataTableComponent, SortableDirective]
})
export class DataTableModule {
}
