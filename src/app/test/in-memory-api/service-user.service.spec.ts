/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceUserService } from './service-user.service';

fdescribe('ServiceUserService', () => {
  let service: ServiceUserService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceUserService]
    });
  });
  
  beforeEach(() => {
    service = TestBed.get(ServiceUserService);
  });

  it('should ...', () => {
    expect(service).toBeTruthy();
  });
  
  it('should return service user collection', () => {
    const expectedCollection = service._serviceUsers;
    expect(service.createDb()).toEqual(expectedCollection);
  });
});
