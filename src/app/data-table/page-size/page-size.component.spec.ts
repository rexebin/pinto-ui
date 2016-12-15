/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSizeComponent } from './page-size.component';
import { TableFilterService } from '../table-filter.service';

fdescribe('PageSizeComponent', () => {
  let component: PageSizeComponent;
  let fixture: ComponentFixture<PageSizeComponent>;
  let tableFilterService: TableFilterService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSizeComponent ],
      providers: [TableFilterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tableFilterService = fixture.debugElement.injector.get(TableFilterService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should read current items per page from TableFilterService and if null use default value', () => {
    expect(component.pageSize).toBe(20);
  });
  
  it('should handle items per page settings and call filter action in TableFilterService', () => {
    
  });
});
