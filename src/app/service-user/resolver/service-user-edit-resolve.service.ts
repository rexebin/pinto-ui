import { Injectable } from '@angular/core';
import { ServiceUser } from '../model/service-user';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceUserEditResolveService implements Resolve<ServiceUser> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return undefined;
  }

  constructor() { }

}
