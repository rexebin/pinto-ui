/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SortableDirective } from './sortable.directive';
import { Component, DebugElement, NgModule } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TableFilterService, SortParams } from '../table-filter.service';
import { BrowserDomAdapter } from '@angular/platform-browser/src/browser/browser_adapter';
import { SortIndicatorComponent } from '../sort-indicator/sort-indicator.component';
import { CommonModule } from '@angular/common';

describe('SortableDirective', () => {
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        SortableDirective
      ],
      imports: [TestModule],
      providers: [TableFilterService]
    })
      .compileComponents();
  }));
  
  describe('With Test Component', () => {
    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let debugElement: DebugElement;
    let sortParam: SortParams;
    let sortable: SortableDirective;
    let tableFilterService: TableFilterService;
    let nativeElement: HTMLElement;
    beforeEach(() => {
      fixture = TestBed.createComponent(TestComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      debugElement = fixture.debugElement.query(By.directive(SortableDirective));
      nativeElement = debugElement.nativeElement;
      sortable = debugElement.injector.get(SortableDirective);
      tableFilterService = TestBed.get(TableFilterService);
      sortParam = {
        sortBy: 'property'
      };
      spyOn(sortable, 'onClick').and.callThrough();
      spyOn(tableFilterService, 'setFilter').and.callThrough();
      
    });
    
    it('should emit filter event with sortby and order when clicking the host element', () => {
      sortParam.order = 'asc';
      nativeElement.click();
      expect(sortable.onClick).toHaveBeenCalled();
      expect(tableFilterService.setFilter).toHaveBeenCalledWith(sortParam);
      sortParam.order = 'desc';
      nativeElement.click();
      expect(sortable.onClick).toHaveBeenCalled();
      expect(tableFilterService.setFilter).toHaveBeenCalledWith(sortParam);
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
        sortBy: 'otherProperty'
      };
      nativeElement.click();
      fixture.detectChanges();
      expect(nativeElement.querySelector('i.pt-sort-icon')).toBeTruthy();
      tableFilterService.setFilter(sortByOtherPropertyParam);
      expect(nativeElement.querySelector('i.pt-sort-icon')).toBeFalsy();
    }));
    
    it('should read the order from service', () => {
      sortParam.order = 'asc';
      tableFilterService.setFilter(sortParam);
      fixture.detectChanges();
      expect(nativeElement.querySelector('i.fa-caret-up')).toBeTruthy();
    });
    
    it('should not touch original inner content of the element', () => {
      nativeElement.click();
      fixture.detectChanges();
      expect(nativeElement.querySelector('strong')).toBeTruthy();
      const sortByOtherParam: SortParams = {
        sortBy: 'otherProperty',
        order: 'asc'
      };
      tableFilterService.setFilter(sortByOtherParam);
      expect(nativeElement.querySelector('strong')).toBeTruthy();
      nativeElement.click();
      fixture.detectChanges();
      expect(nativeElement.querySelector('strong')).toBeTruthy();
    });
    
  });
  
  describe('Directive initialisation', () => {
    it('should get default order', () => {
      let tableFilterService = TestBed.get(TableFilterService);
      tableFilterService.setFilter({
        sortBy: 'property',
        order: 'asc'
      });
      let fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      let debugElement = fixture.debugElement.query(By.directive(SortableDirective));
      let sortable = debugElement.injector.get(SortableDirective);
      expect(sortable._order).toEqual('asc');
    });
  });
});
@Component({
  selector: '',
  template: `<div ptSortable [sortBy]="'property'"><strong>Property</strong></div>`
})
class TestComponent {
}

@NgModule({
  imports:[CommonModule],
  entryComponents: [SortIndicatorComponent],
  declarations:[SortIndicatorComponent]
})
class TestModule{}
