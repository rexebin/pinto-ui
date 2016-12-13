/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SortableDirective } from './sortable.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TableFilterService, SortParams } from '../table-filter.service';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';

fdescribe('SortableDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let debugElement: DebugElement;
  let sortParam: SortParams;
  let sortable: SortableDirective;
  let tableFilterService: TableFilterService;
  let nativeElement: HTMLElement;
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
    nativeElement = debugElement.nativeElement;
    sortable = debugElement.injector.get(SortableDirective);
    tableFilterService = TestBed.get(TableFilterService);
    sortParam = {
      entity: 'entity',
      sortBy: 'property'
    };
    spyOn(sortable, 'onClick').and.callThrough();
    spyOn(tableFilterService, 'filter').and.callThrough();
    
  });
  
  it('should emit filter event with sortby and order when clicking the host element', () => {
    let expectedParams = sortParam;
    expectedParams.order = 'asc';
    nativeElement.click();
    expect(sortable.onClick).toHaveBeenCalled();
    expect(tableFilterService.filter).toHaveBeenCalledWith(expectedParams);
    expectedParams.order = 'desc';
    nativeElement.click();
    expect(sortable.onClick).toHaveBeenCalled();
    expect(tableFilterService.filter).toHaveBeenCalledWith(expectedParams);
  });
    
  it('should show an upper arrow indicate asc order after emit event with asc', () => {
    nativeElement.click();
    fixture.detectChanges();
    expect(nativeElement.querySelector('i.fa-caret-up')).toBeTruthy();
  });
  
  it('should show a downward arrow indicate desc order after emit event with desc', async(() => {
    nativeElement.click();
    fixture.detectChanges();
    nativeElement.click();
    expect(nativeElement.querySelector('i.fa-caret-down')).toBeTruthy();
  }));
  
  it('should hide arrow when not ordered by host element\'s property', async(() => {
    const sortByOtherPropertyParam: SortParams = {
      entity: 'entity',
      sortBy: 'otherProperty'
    };
    tableFilterService.filter(sortByOtherPropertyParam);
    expect(nativeElement.querySelector('i.pt-sort-icon')).toBeFalsy();
    nativeElement.click();
    fixture.detectChanges();
    expect(nativeElement.querySelector('i.pt-sort-icon')).toBeTruthy();
    tableFilterService.filter(sortByOtherPropertyParam);
    expect(nativeElement.querySelector('i.pt-sort-icon')).toBeFalsy();
  }));
  
  it('should read the order from service', () => {
    const sortByDesc: SortParams = {
      entity: 'entity',
      sortBy: 'property',
      order: 'asc'
    };
    tableFilterService.filter(sortByDesc);
    nativeElement.click();
    fixture.detectChanges();
    expect(nativeElement.querySelector('i.fa-caret-down')).toBeTruthy();
  });
  
  it('should not touch original inner content of the element', () => {
    nativeElement.click();
    fixture.detectChanges();
    expect(nativeElement.querySelector('strong')).toBeTruthy();
    const sortByOtherParam: SortParams = {
      entity: 'entity',
      sortBy: 'otherProperty',
      order: 'asc'
    };
    tableFilterService.filter(sortByOtherParam);
    expect(nativeElement.querySelector('strong')).toBeTruthy();
    nativeElement.click();
    fixture.detectChanges();
    expect(nativeElement.querySelector('strong')).toBeTruthy();
  });
  
});

@Component({
  selector: '',
  template: `<div ptSortable [sortBy]="'property'" [entityName]="'entity'"><strong>Property</strong></div>`
})
class TestComponent {
}
