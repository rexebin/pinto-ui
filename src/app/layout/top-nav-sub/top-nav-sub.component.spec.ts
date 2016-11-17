/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopNavSubComponent } from './top-nav-sub.component';
import { MenuItem } from '../../common/apis/menu-item';

const menuItemWithChildren: MenuItem = {
  label: 'item1',
  items: [
    {
      label: 'sub-item1'
    },
    { label: 'sub-item2' }
  ]
};

const menuItemWithoutChildren:MenuItem  = {
  label: 'item1'
};

describe('TopNavSubComponent', () => {
  let component: TopNavSubComponent;
  let fixture: ComponentFixture<TopNavSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopNavSubComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.menuItem).toEqual({});
  });

  it('render a single link with menuItem\'s label when menuItem has no items', async(()=>{
    component.menuItem = menuItemWithoutChildren;
    fixture.detectChanges();

    const el = fixture.nativeElement.querySelectorAll('a');

    expect(el.length).toBe(1);

    expect(el[0].textContent).toBe(menuItemWithoutChildren.label);

  }));

  it('render a dropdown when menuItem has items and display labels correctly', async(()=>{
    component.menuItem = menuItemWithChildren;
    fixture.detectChanges();
    const el = fixture.nativeElement.querySelector('div[ngbDropdown');
    //dropdown is rendered.
    expect(el).toBeTruthy();
    // top level nav label.
    const toggleEl = fixture.nativeElement.querySelector('a[ngbdropdowntoggle]');
    expect(toggleEl.textContent).toBe(menuItemWithChildren.label);
    // dropdown items's labels.
    const dropDownMenuEl = fixture.nativeElement.querySelector('div.dropdown-menu');
    const subMenuEls = dropDownMenuEl.querySelectorAll('a');

    subMenuEls.forEach((submenu, i) => {
      expect(submenu.textContent).toBe(menuItemWithChildren.items[i].label);
    });


  }));

});
