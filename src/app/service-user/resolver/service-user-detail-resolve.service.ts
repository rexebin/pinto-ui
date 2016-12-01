import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { ServiceUser } from '../model/service-user';
import { Observable } from 'rxjs';

@Injectable()
export class ServiceUserDetailResolveService implements Resolve<ServiceUser> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return undefined;
  }
  
  constructor(private router: Router) {
  }
  
}
