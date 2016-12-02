import { NgModule } from '@angular/core';
import { ServiceUserManagerComponent } from './service-user-manager.component';
import { SharedModule } from "../shared/shared.module";
import { CurrentOccupancyComponent } from './current-occupancy/current-occupancy.component';
import { ServiceUserManagerRoutingModule } from "./service-user-manager-routing.module";
import { ServiceUserModule } from './service-user/service-user.module';

@NgModule({
  imports: [
    SharedModule,
    ServiceUserManagerRoutingModule,
    ServiceUserModule
  ],
  declarations: [
    ServiceUserManagerComponent,
    CurrentOccupancyComponent
  ]
})
export class ServiceUserManagerModule {
}
