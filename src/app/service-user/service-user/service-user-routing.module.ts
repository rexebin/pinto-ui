import { Routes } from '@angular/router/src/config';
import { ServiceUserListComponent } from './service-user-list/service-user-list.component';
import { ServiceUserEditComponent } from './service-user-edit/service-user-edit.component';
import { ServiceUserDetailComponent } from './service-user-detail/service-user-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MasterDetailComponent } from '../../shared/master-detail/master-detail.component';
import { ServiceUserDetailResolveService } from '../resolver/service-user-detail-resolve.service';
import { ServiceUserListResolveService } from '../resolver/service-user-list-resolve.service';
import { ServiceUserEditResolveService } from '../resolver/service-user-edit-resolve.service';

const routes: Routes = [
  
  {
    path: '',
    component: MasterDetailComponent,
    children: [
      { path: '', component: ServiceUserListComponent, resolve: [ServiceUserListResolveService] },
      { path: ':id', component: ServiceUserDetailComponent, resolve: [ServiceUserDetailResolveService] },
      { path: 'edit/:id', component: ServiceUserEditComponent, resolve: [ServiceUserEditResolveService] }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    ServiceUserDetailResolveService,
    ServiceUserListResolveService,
    ServiceUserEditResolveService
  ]
})

export class ServiceUserRoutingModule {
}
