import { NgModule } from '@angular/core';
import { ServiceUserComponent } from './service-user.component';
import { SharedModule } from "../shared/shared.module";
import { CurrentOccupancyComponent } from './current-occupancy/current-occupancy.component';
import { ServiceUserRoutingModule } from "./service-user-routing.module";

@NgModule({
  imports: [
    SharedModule,
    ServiceUserRoutingModule
  ],
  declarations: [
    ServiceUserComponent,
    CurrentOccupancyComponent
  ]
})
export class ServiceUserModule {
}
