/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceUserListResolveService } from './service-user-list-resolve.service';

describe('ServiceUserListResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceUserListResolveService]
    });
  });

  it('should ...', inject([ServiceUserListResolveService], (service: ServiceUserListResolveService) => {
    expect(service).toBeTruthy();
  }));
});
