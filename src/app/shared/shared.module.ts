import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/**
 * SharedModule should not have providers. Setup root providers in CoreModule.
 * SharedModule hold the common components, directive, pipes and share them with other modules.
 */

@NgModule({
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[
    NgbModule, CommonModule
  ],
  declarations: []
})
export class SharedModule { }


