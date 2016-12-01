/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceUserDetailResolveService } from './service-user-detail-resolve.service';

describe('ServiceUserDetailResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceUserDetailResolveService]
    });
  });

  it('should ...', inject([ServiceUserDetailResolveService], (service: ServiceUserDetailResolveService) => {
    expect(service).toBeTruthy();
  }));
});
