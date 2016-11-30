import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceUserComponent } from './service-user.component';
import { SharedModule } from '../../shared/shared.module';
import { FormModule } from '../../form/form.module';

@NgModule({
  imports: [
    SharedModule, FormModule
  ],
  declarations: [ServiceUserComponent]
})
export class ServiceUserModule { }
