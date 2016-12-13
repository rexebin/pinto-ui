/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PageSizeComponent } from './page-size.component';

describe('PageSizeComponent', () => {
  let component: PageSizeComponent;
  let fixture: ComponentFixture<PageSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should read current items per page from TableFilterService and if null use default value', () => {
    
  });
  
  it('should handle items per page settings and call filter action in TableFilterService', () => {
    
  });
});
