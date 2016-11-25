/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavComponent } from './top-nav.component';
import { MenuItem } from '../../common/apis/menu-item';
import { TopNavSubComponent } from '../top-nav-sub/top-nav-sub.component';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

const items: MenuItem[] = [
  { label: 'item1' },
  {
    label: 'item2', items: [
    { label: 'sub-item1' }
  ]
  }
];

describe('TopNavComponent', () => {
  let component: TopNavComponent;
  let fixture: ComponentFixture<TopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TopNavComponent,
        TopNavSubComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
