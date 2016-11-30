
import {Route, RouterModule} from '@angular/router';
import {DashboardComponent} from "./core/dashboard/dashboard.component";
import {NgModule} from "@angular/core";
const routes: Route[] = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'service-user', loadChildren: './service-user/service-user-manager.module#ServiceUserManagerModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
