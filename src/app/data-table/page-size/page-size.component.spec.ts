/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSizeComponent } from './page-size.component';
import { TableFilterService } from '../table-filter.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

fdescribe('PageSizeComponent', () => {
  let component: PageSizeComponent;
  let fixture: ComponentFixture<PageSizeComponent>;
  let tableFilterService: TableFilterService;
  let selectEl: DebugElement, selectNativeEl: HTMLSelectElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PageSizeComponent],
      providers: [TableFilterService],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(PageSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    tableFilterService = fixture.debugElement.injector.get(TableFilterService);
    spyOn(tableFilterService, 'setFilter');
    selectEl = fixture.debugElement.query(By.css('select'));
    selectNativeEl = selectEl.nativeElement;
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should read current items per page from TableFilterService and if null use default value', () => {
    expect(selectNativeEl.value).toEqual('20');
  });
  
  it('should handle items per page settings and call filter action in TableFilterService', () => {
    component.selectControl.setValue(30);
    selectEl.triggerEventHandler('change', {target: selectNativeEl});
    fixture.detectChanges();
    
    expect(tableFilterService.setFilter).toHaveBeenCalledWith({ pageSize: 30 });
  });
});
