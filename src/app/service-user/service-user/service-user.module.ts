import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormModule } from '../../form/form.module';
import { ServiceUserListComponent } from './service-user-list/service-user-list.component';
import { ServiceUserEditComponent } from './service-user-edit/service-user-edit.component';
import { ServiceUserDetailComponent } from './service-user-detail/service-user-detail.component';
import { ServiceUserRoutingModule } from './service-user-routing.module';

@NgModule({
  imports: [
    SharedModule, FormModule, ServiceUserRoutingModule
  ],
  declarations: [ServiceUserListComponent, ServiceUserEditComponent, ServiceUserDetailComponent]
})
export class ServiceUserModule { }
