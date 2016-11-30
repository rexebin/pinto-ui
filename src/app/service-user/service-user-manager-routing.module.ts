import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentOccupancyComponent } from "./current-occupancy/current-occupancy.component";

const routes: Routes = [
  { path: '', component: CurrentOccupancyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceUserManagerRoutingModule { }
