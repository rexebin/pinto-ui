/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SortableDirective } from './sortable.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TableFilterService, SortParams } from '../table-filter.service';

fdescribe('SortableDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let debugElement: DebugElement;
  let sortParam: SortParams;
  let sortable: SortableDirective;
  let tableFilterService: TableFilterService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        SortableDirective
      ],
      imports: [],
      providers: [TableFilterService]
    })
      .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.directive(SortableDirective));
    sortable = debugElement.injector.get(SortableDirective);
    tableFilterService = TestBed.get(TableFilterService);
    sortParam = {
      entity: 'entity',
      sortBy: 'property'
    };
    spyOn(sortable, 'onClick').and.callThrough();
    spyOn(tableFilterService, 'filter');
    
  });
  
  it('should emit filter event with sortby and order when clicking the host element', () => {
    let expectedParams = sortParam;
    expectedParams.order = 'asc';
    debugElement.nativeElement.click();
    expect(sortable.onClick).toHaveBeenCalled();
    expect(tableFilterService.filter).toHaveBeenCalledWith(expectedParams);
    expectedParams.order = 'desc';
    debugElement.nativeElement.click();
    expect(sortable.onClick).toHaveBeenCalled();
    expect(tableFilterService.filter).toHaveBeenCalledWith(expectedParams);
  });
    
  it('should show an upper arrow indicate asc order after emit event with asc', async(() => {
    debugElement.nativeElement.click();
    fixture.detectChanges();
    expect(debugElement.query(By.css('i.caret-up'))).toBeTruthy();
  }));
  
  it('should show a downward arrow indicate desc order after emit event with desc', async(() => {
    debugElement.nativeElement.click();
    fixture.detectChanges();
    debugElement.nativeElement.click();
    expect(debugElement.query(By.css('i.caret-down'))).toBeTruthy();
  }));
  
  it('should hide arrow when not ordered by host element\'s property', async(() => {
    debugElement.nativeElement.click();
    fixture.detectChanges();
    const sortByOtherPropertyParam: SortParams = {
      entity: 'entity',
      sortBy: 'otherProperty'
    };
    tableFilterService.filter(sortByOtherPropertyParam);
    expect(debugElement.query(By.css('i'))).toBeFalsy();
  }));
  
});

@Component({
  selector: '',
  template: `<div ptSortable [sortBy]="'property'" [entityName]="'entity'"></div>`
})
class TestComponent {
}
