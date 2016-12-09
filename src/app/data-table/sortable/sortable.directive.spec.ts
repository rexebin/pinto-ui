/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SortableDirective } from './sortable.directive';
import { Component } from '@angular/core';

describe('SortableDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, SortableDirective],
      imports: []
    })
      .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should emit sort event with payload when clicking the host element', async(() => {
    
  }));
  
  it('should emit sort event with payload and toggle sort order when clicking the host element repeatedly', async(() => {
    
  }));
  
  it('should show an upper arrow indicate asc sort order after emit sort event with asc', async(() => {
    
  }));
  
  it('should show a downward arrow indicate desc sort order after emit sort event with desc', async(() => {
    
  }));
  
  it('should hide arrow when not ordered by host element\'s property', async(() => {
    
  }));
  
});

@Component({
  selector: '',
  template: '<div ptSortable="propertyName"></div>'
})
class TestComponent{}
