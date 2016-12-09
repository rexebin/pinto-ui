import { Routes } from '@angular/router/src/config';
import { ServiceUserListComponent } from './service-user-list/service-user-list.component';
import { ServiceUserEditComponent } from './service-user-edit/service-user-edit.component';
import { ServiceUserDetailComponent } from './service-user-detail/service-user-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MasterDetailComponent } from '../../master-detail/master-detail/master-detail.component';
import { ServiceUserDetailResolveService } from '../resolver/service-user-detail-resolve.service';
import { ServiceUserListResolveService } from '../resolver/service-user-list-resolve.service';
import { ServiceUserEditResolveService } from '../resolver/service-user-edit-resolve.service';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'master-detail'},
  {
    path: 'master-detail',
    component: MasterDetailComponent,
    children: [
      {
        path: 'list',
        component: ServiceUserListComponent,
        resolve: [ServiceUserListResolveService],
        outlet: 'list'
      },
      {
        path: 'detail/:id',
        component: ServiceUserDetailComponent,
        resolve: [ServiceUserDetailResolveService],
        outlet: 'detail'
      },
      {
        path: 'edit/:id',
        component: ServiceUserEditComponent,
        resolve: [ServiceUserEditResolveService],
        outlet: 'detail'
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
