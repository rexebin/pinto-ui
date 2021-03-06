/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataTableComponent } from './data-table.component';
import { SearchComponent } from '../../form/search/search.component';
import { TableFilterService } from '../table-filter.service';
import { PaginationComponent } from '../pagination/pagination.component';
import { PageSizeComponent } from '../page-size/page-size.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

describe('DataTableComponent', () => {
  let component: DataTableComponent;
  let fixture: ComponentFixture<DataTableComponent>;
  let tableService: TableFilterService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, NgbModule.forRoot()],
      declarations: [ DataTableComponent, SearchComponent, PaginationComponent, PageSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableComponent);
    component = fixture.componentInstance;
    component.entityName = 'entity';
    tableService = fixture.debugElement.injector.get(TableFilterService);
    spyOn(tableService, 'init');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should init TableFilterService on init.', () => {
    expect(tableService.init).toHaveBeenCalledWith('entity');
  });
  
});
