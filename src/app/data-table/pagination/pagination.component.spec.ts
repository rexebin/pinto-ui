/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaginationComponent } from './pagination.component';
import { TableFilterService, TableFilter } from '../table-filter.service';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let tableFilterService: TableFilterService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationComponent ],
      providers: [TableFilterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tableFilterService = fixture.debugElement.injector.get(TableFilterService);
    spyOn(tableFilterService, 'filter');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should handle page changing and call filter action in TableFilterService', () => {
    
  });
});
