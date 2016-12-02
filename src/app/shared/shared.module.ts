import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MasterDetailComponent } from './master-detail/master-detail.component';
import { RouterModule } from '@angular/router';

/**
 * SharedModule should not have providers. Setup root providers in CoreModule.
 * SharedModule hold the common components, directive, pipes and share them with other modules.
 */

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule
  ],
  exports: [
    NgbModule,
    CommonModule,
    MasterDetailComponent
  ],
  declarations: [MasterDetailComponent]
})
export class SharedModule {
}


