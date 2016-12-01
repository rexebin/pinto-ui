/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceUserEditResolveService } from './service-user-edit-resolve.service';

describe('ServiceUserEditResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceUserEditResolveService]
    });
  });

  it('should ...', inject([ServiceUserEditResolveService], (service: ServiceUserEditResolveService) => {
    expect(service).toBeTruthy();
  }));
});
