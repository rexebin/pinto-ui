/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TopNavSubComponent } from './top-nav-sub.component';
import { MenuItem } from '../../common/apis/menu-item';
import { Router } from '@angular/router';
import { RouterStub } from '../../test/mocks/router-stubs';

const menuItemWithChildren: MenuItem = {
  label: 'item1',
  items: [
    {
      label: 'sub-item1',
    },
    {
      label: 'sub-item2',
    }
  ]
};

const menuItemWithoutChildren: MenuItem = {
  label: 'item1'
};

describe('TopNavSubComponent', () => {
  let component: TopNavSubComponent;
  let fixture: ComponentFixture<TopNavSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopNavSubComponent],
      providers: [{provide: Router, useClass: RouterStub}]
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

  describe('Button and dropdown rendering', () => {

    it('should render a single link with menuItem\'s label when menuItem has no items', async(() => {
      component.menuItem = menuItemWithoutChildren;
      fixture.detectChanges();

      const el = fixture.nativeElement.querySelectorAll('a');

      expect(el.length).toBe(1);

      expect(el[0].textContent).toContain(menuItemWithoutChildren.label);
    }));

    it('should render a dropdown when menuItem has items and display labels correctly', async(() => {
      component.menuItem = menuItemWithChildren;
      fixture.detectChanges();
      const el = fixture.nativeElement.querySelector('div[ngbDropdown');
      //dropdown is rendered.
      expect(el).toBeTruthy();
      // top level nav label.
      const toggleEl = fixture.nativeElement.querySelector('a[ngbdropdowntoggle]');
      expect(toggleEl.textContent).toContain(menuItemWithChildren.label);
      // dropdown items's labels.
      const dropDownMenuEl = fixture.nativeElement.querySelector('div.dropdown-menu');
      const subMenuEls = dropDownMenuEl.querySelectorAll('a');

      subMenuEls.forEach((submenu, i) => {
        expect(submenu.textContent).toContain(menuItemWithChildren.items[i].label);
      });
    }));

  });

  describe('MenuItem Icons', () => {

    it('should render icon if there is a icon provided', async(() => {
      component.menuItem = menuItemWithoutChildren;
      component.menuItem.icon = 'fa-user';
      fixture.detectChanges();
      let icon = fixture.nativeElement.querySelector('i.fa.fa-user');
      expect(icon).toHaveCssClass('fa');
      expect(icon).toHaveCssClass('fa-user');

      component.menuItem.icon = '';
      fixture.detectChanges();
      icon = fixture.nativeElement.querySelector('i.fa.fa-user');
      expect(icon).toBeFalsy();

    }));

    it('should render icon if there are icons provided', async(() => {
      component.menuItem = menuItemWithChildren;
      component.menuItem.icon = 'fa-user';
      fixture.detectChanges();
      let icon = fixture.nativeElement.querySelectorAll('i');
      expect(icon[0]).toHaveCssClass('fa-user');
      expect(icon[0]).toHaveCssClass('fa');

      component.menuItem.icon = '';
      fixture.detectChanges();
      icon = fixture.nativeElement.querySelectorAll('i');
      expect(icon.length).toBe(0);

      component.menuItem.items[0].icon = 'fa-user';
      component.menuItem.items[1].icon = 'fa-calendar';
      fixture.detectChanges();
      icon = fixture.nativeElement.querySelectorAll('i');
      expect(icon[0]).toHaveCssClass('fa-user');
      expect(icon[1]).toHaveCssClass('fa-calendar');

      component.menuItem.items[0].icon = null;
      fixture.detectChanges();
      icon = fixture.nativeElement.querySelectorAll('i');

      expect(icon.length).toBe(1);
      expect(icon[0]).toHaveCssClass('fa-calendar');
    }));

  });

  fdescribe('Menu Links', () => {
    it('should add links if menuItem has one', async(() => {
      component.menuItem = menuItemWithoutChildren;
      let url = 'http://localhost:3000/test';
      component.menuItem.url= url;
      fixture.detectChanges();
      let a = fixture.nativeElement.querySelector('a');
      const router = fixture.debugElement.injector.get(Router);
      spyOn(component, 'click').and.callThrough();
      spyOn(router, 'navigateByUrl').and.returnValue(null);
      a.click();
      fixture.detectChanges();
      expect(component.click).toHaveBeenCalledWith(component.menuItem);
      expect(router.navigateByUrl).toHaveBeenCalledWith(component.menuItem.url);
    }));
  });
});
