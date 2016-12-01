import { Routes } from '@angular/router/src/config';
import { ServiceUserListComponent } from './service-user-list/service-user-list.component';
import { ServiceUserEditComponent } from './service-user-edit/service-user-edit.component';
import { ServiceUserDetailComponent } from './service-user-detail/service-user-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MasterDetailComponent } from '../../shared/master-detail/master-detail.component';

const routes: Routes = [
  
  {
    path: '',
    component: MasterDetailComponent,
    children: [
      { path: '', component: ServiceUserListComponent },
      { path: '/:id', component: ServiceUserDetailComponent },
      { path: 'edit/:id', component: ServiceUserEditComponent }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ServiceUserRoutingModule {
}
