import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HumanizePipe } from './pipes/humanize.pipe';
import { MomentPipe } from './pipes/moment.pipe';

/**
 * SharedModule should not have providers. Setup root providers in CoreModule.
 * SharedModule hold the common components, directive, pipes and share them with other modules.
 */

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    NgbModule,
    CommonModule,
    HumanizePipe,
    MomentPipe
  ],
  declarations: [
    HumanizePipe,
    MomentPipe
  ]
})
export class SharedModule {
}


