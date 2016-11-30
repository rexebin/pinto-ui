import { Routes } from '@angular/router/src/config';
import { ServiceUserListComponent } from './service-user-list/service-user-list.component';
import { ServiceUserEditComponent } from './service-user-edit/service-user-edit.component';
import { ServiceUserDetailComponent } from './service-user-detail/service-user-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'list',
    children: [
      { path: 'list', component: ServiceUserListComponent },
      { path: 'edit', component: ServiceUserEditComponent },
      { path: 'detail', component: ServiceUserDetailComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ServiceUserRoutingModule {
}
