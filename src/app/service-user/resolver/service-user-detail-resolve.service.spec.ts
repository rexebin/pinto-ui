/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceUserDetailResolveService } from './service-user-detail-resolve.service';
import { RouterStub } from '../../test/mocks/router-stubs';
import { Router } from '@angular/router';

describe('ServiceUserDetailResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ServiceUserDetailResolveService,
        {provide: Router, useClass: RouterStub}
      ]
    });
  });
  
  it('should ...', inject([ServiceUserDetailResolveService], (service: ServiceUserDetailResolveService) => {
    expect(service).toBeTruthy();
  }));
});
