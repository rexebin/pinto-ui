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
      {
        path: 'list',
        component: ServiceUserListComponent,
        resolve: [ServiceUserListResolveService],
        outlet: 'list'
      },
      {
        path: ':id',
        component: ServiceUserDetailComponent,
        resolve: [ServiceUserDetailResolveService],
        outlet: 'detail'
      },
      {
        path: ':id',
        component: ServiceUserEditComponent,
        resolve: [ServiceUserEditResolveService],
        outlet: 'edit'
      }
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
