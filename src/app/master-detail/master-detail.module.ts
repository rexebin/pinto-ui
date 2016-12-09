import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterDetailComponent } from './master-detail/master-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [MasterDetailComponent],
  exports: [MasterDetailComponent]
})
export class MasterDetailModule {
}
