/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ContainerService } from './container.service';
import { Subscription } from 'rxjs';

fdescribe('ContainerService', () => {
  let service: ContainerService;
  let isFluid: boolean;
  let subscription: Subscription;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContainerService]
    });
  });
  
  beforeEach(() => {
    service = TestBed.get(ContainerService);
    subscription = service.isFluid.subscribe((value) => {
      isFluid = value;
    });
  });
  
  it('should return false on subscription to isFluid', () => {
    expect(service).toBeTruthy();
    expect(isFluid).toBe(false);
  });
  
  it('should return true after setContainerFluid is called', () => {
    service.setToContainerFluid();
    expect(isFluid).toBe(true);
  });
  
  it('should return false after setContainer is called', () => {
    service.setToContainer();
    expect(isFluid).toBe(false);
  });
  
});
