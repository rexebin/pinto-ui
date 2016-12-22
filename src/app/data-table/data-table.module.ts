import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTableComponent } from './data-table/data-table.component';
import { SharedModule } from '../shared/shared.module';
import { FormModule } from '../form/form.module';
import { SortableDirective } from './sortable/sortable.directive';
import { TableFilterService } from './table-filter.service';
import { PaginationComponent } from './pagination/pagination.component';
import { SortIndicatorComponent } from './sort-indicator/sort-indicator.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormModule
  ],
  exports: [
    DataTableComponent,
    SortableDirective,
    PaginationComponent
  ],
  declarations: [
    DataTableComponent,
    SortableDirective,
    PaginationComponent,
    SortIndicatorComponent
  ],
  entryComponents: [SortIndicatorComponent]
})
export class DataTableModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DataTableModule,
      providers: [TableFilterService]
    }
  }
}
