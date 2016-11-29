import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavSubComponent } from './top-nav-sub.component';
import { MenuItem } from '../../common/apis/menu-item';
import { Router } from '@angular/router';
import { RouterStub } from '../../test/mocks/router-stubs';

let menuItemWithChildren: MenuItem = {};
let menuItemWithoutChildren: MenuItem = {};

describe('TopNavSubComponent', () => {
  let component: TopNavSubComponent;
  let fixture: ComponentFixture<TopNavSubComponent>;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopNavSubComponent],
      providers: [{ provide: Router, useClass: RouterStub }]
    })
      .compileComponents();
  }));
  
  beforeEach(() => {
    menuItemWithChildren = {
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
    
    menuItemWithoutChildren = {
      label: 'item1'
    };
    
    fixture = TestBed.createComponent(TopNavSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });
  
  describe('Button and dropdown rendering', () => {
    
    describe('menuItem without children', () => {
      let el: HTMLElement, els: HTMLElement[];
      
      beforeEach(() => {
        component.menuItem = menuItemWithoutChildren;
        fixture.detectChanges();
        el = fixture.nativeElement.querySelector('a');
      });
      
      it('should render a single link with menuItem\'s label when menuItem has no items', async(() => {
        expect(el.textContent).toContain(menuItemWithoutChildren.label);
      }));
      
      it('should not render dropdown when menuItem has no items', async(() => {
        els = fixture.nativeElement.querySelectorAll('[ngbDropdown]');
        
        expect(els.length).toBe(0);
      }));
      
    });
    
    describe('menuItem with children', () => {
      let dropdownEl: HTMLElement, toggleEl: HTMLElement, subMenuEls: HTMLElement[];
      
      beforeEach(() => {
        component.menuItem = menuItemWithChildren;
        fixture.detectChanges();
        dropdownEl = fixture.nativeElement.querySelector('div[ngbDropdown');
        toggleEl = fixture.nativeElement.querySelector('a[ngbdropdowntoggle]');
        subMenuEls = fixture.nativeElement.querySelectorAll('a[ngbdropdowntoggle] a')
      });
      
      it('should render a dropdown when menuItem has items and display labels correctly', async(() => {
        const el = fixture.nativeElement.querySelector('div[ngbDropdown');
        
        expect(el).toBeTruthy();
        expect(toggleEl.textContent).toContain(menuItemWithChildren.label);
      }));
      
      it('should render sub menus with correct labels', async(() => {
        subMenuEls.forEach((submenu, i) => {
          expect(submenu.textContent).toContain(menuItemWithChildren.items[i].label);
        });
      }));
      
    });
    
  });
  
  describe('MenuItem Icons', () => {
    let icon: HTMLElement[];
    
    it('should render icon if there is a icon provided', async(() => {
      component.menuItem = menuItemWithoutChildren;
      component.menuItem.icon = 'fa-user';
      fixture.detectChanges();
      icon = fixture.nativeElement.querySelectorAll('i');
      
      expect(icon[0]).toHaveCssClass('fa');
      expect(icon[0]).toHaveCssClass('fa-user');
      
      component.menuItem.icon = '';
      fixture.detectChanges();
      icon = fixture.nativeElement.querySelectorAll('i');
      expect(icon.length).toBe(0);
      
    }));
    
    it('should render menu item icons', async(() => {
      component.menuItem = menuItemWithChildren;
      component.menuItem.items[0].icon = 'fa-user';
      component.menuItem.items[1].icon = 'fa-calendar';
      fixture.detectChanges();
      const icon = fixture.nativeElement.querySelectorAll('i');
      expect(icon[0]).toHaveCssClass('fa');
      expect(icon[0]).toHaveCssClass('fa-user');
      expect(icon[1]).toHaveCssClass('fa');
      expect(icon[1]).toHaveCssClass('fa-calendar');
    }));
    
  });
  
  describe('Menu Links', () => {
    describe('Menu without children', () => {
      
      const url = 'http://localhost:3000/test';
      let router, el: HTMLElement;
      beforeEach(() => {
        component.menuItem = menuItemWithoutChildren;
        component.menuItem.url = url;
        fixture.detectChanges();
        
        router = fixture.debugElement.injector.get(Router);
        
        spyOn(component, 'click').and.callThrough();
        spyOn(router, 'navigateByUrl');
        spyOn(router, 'navigate');
        
        el = fixture.nativeElement.querySelector('a');
      });
      
      it('should navigate to url menuItem has one', async(() => {
        
        el.click();
        
        expect(component.click).toHaveBeenCalledWith(component.menuItem);
        expect(router.navigateByUrl).toHaveBeenCalledWith(url);
        
      }));
      
      it('should ignore routerLink if there is a url present.', async(() => {
        
        component.menuItem.routerLink = ['/home'];
        fixture.detectChanges();
        
        el.click();
        expect(router.navigateByUrl).toHaveBeenCalledWith(url);
        expect(router.navigate).not.toHaveBeenCalled();
        
      }));
      
      it('should navigate to routerLink if there is no url', async(() => {
        
        component.menuItem.routerLink = ['/home'];
        component.menuItem.url = null;
        fixture.detectChanges();
        
        el.click();
        expect(router.navigateByUrl).not.toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalledWith(component.menuItem.routerLink);
      }));
      
      it('should not navigate to anywhere if there is no url and routerLink', async(() => {
        
        component.menuItem.routerLink = null;
        component.menuItem.url = null;
        fixture.detectChanges();
        
        el.click();
        expect(router.navigateByUrl).not.toHaveBeenCalled();
        expect(router.navigate).not.toHaveBeenCalled();
      }));
    });
    
    describe('Menu with children', () => {
      const url = 'http://localhost:3000/test';
      let router: Router, topEl: HTMLElement, subEls: HTMLElement[];
      
      beforeEach(() => {
        component.menuItem = menuItemWithChildren;
        fixture.detectChanges();
        
        router = fixture.debugElement.injector.get(Router);
        
        spyOn(component, 'click').and.callThrough();
        spyOn(router, 'navigateByUrl');
        spyOn(router, 'navigate');
        
        topEl = fixture.nativeElement.querySelector('a.dropdown-toggle');
        subEls = fixture.nativeElement.querySelectorAll('a.dropdown-item');
      });
      
      it('should ignore url or menuItem on the parent', async(() => {
        component.menuItem.url = url;
        fixture.detectChanges();
        
        topEl.click();
        
        expect(component.click).not.toHaveBeenCalled();
        
      }));
      
      it('should navigate when clicking sub-menu with url or routerLink', async(() => {
        component.menuItem.items[0].url = url;
        fixture.detectChanges();
        
        subEls[0].click();
        
        expect(component.click).toHaveBeenCalledWith(component.menuItem.items[0])
        expect(router.navigateByUrl).toHaveBeenCalledWith(url);
        
        component.menuItem.items[0].url = null;
        component.menuItem.items[0].routerLink = ['./home'];
        fixture.detectChanges();
        
        subEls[0].click();
        
        expect(component.click).toHaveBeenCalledWith(component.menuItem.items[0]);
        expect(router.navigate).toHaveBeenCalledWith(['./home']);
      }));
      
      it('should ignore routerLink if url is present', async(() => {
        component.menuItem.items[0].url = url;
        component.menuItem.items[0].routerLink = ['./home'];
        fixture.detectChanges();
        
        subEls[0].click();
        
        expect(component.click).toHaveBeenCalledWith(component.menuItem.items[0]);
        expect(router.navigateByUrl).toHaveBeenCalledWith(url);
        expect(router.navigate).not.toHaveBeenCalledWith(['./home']);
      }));
      
      it('should navigate to anywhere if there is no url or routerLink', async(() => {
        subEls[0].click();
        
        expect(component.click).toHaveBeenCalledWith(component.menuItem.items[0]);
        expect(router.navigateByUrl).not.toHaveBeenCalled();
        expect(router.navigate).not.toHaveBeenCalled();
      }));
      
    });
  });
  
  describe('menuItem can be disabled', () => {
    
    describe('menuItem without items', () => {
      let el: HTMLElement, router: Router;
      beforeEach(() => {
        component.menuItem = menuItemWithoutChildren;
        component.menuItem.disabled = true;
        component.menuItem.url = 'localhost:3000';
        
        fixture.detectChanges();
        
        el = fixture.nativeElement.querySelector('a');
      });
      it('should disable the menu if disable is true and it toggles', async(() => {
        
        expect(el).toHaveCssClass('disabled');
        
        component.menuItem.disabled = null;
        fixture.detectChanges();
        
        expect(el).not.toHaveCssClass('disabled');
      }));
      
      it('should prevent click event if disabled is true', async(() => {
        
        router = fixture.debugElement.injector.get(Router);
        spyOn(component, 'click').and.callThrough();
        spyOn(router, 'navigateByUrl');
        
        el.click();
        
        expect(component.click).toHaveBeenCalled();
        expect(router.navigateByUrl).not.toHaveBeenCalled();
      }));
      
    });
    
    describe('menuItem with items', () => {
      let el: HTMLElement, subEls: HTMLElement[], router: Router;
      
      beforeEach(() => {
        component.menuItem = menuItemWithChildren;
        fixture.detectChanges();
        el = fixture.nativeElement.querySelector('a.dropdown-toggle');
        subEls = fixture.nativeElement.querySelectorAll('a.dropdown-item');
        
        router = fixture.debugElement.injector.get(Router);
        spyOn(component, 'click').and.callThrough();
        spyOn(router, 'navigateByUrl');
        
      });
      it('should ignore disable property of the parent if there is items children', async(() => {
        component.menuItem.disabled = true;
        fixture.detectChanges();
        
        expect(el).not.toHaveCssClass('disabled');
        
        el.click();
        
        expect(component.click).not.toHaveBeenCalled();
        
      }));
      
      it('should disable the sub-menu if disable is true and toggles', async(() => {
        component.menuItem.items[0].disabled = true;
        fixture.detectChanges();
        
        expect(subEls[0]).toHaveCssClass('disabled');
        expect(subEls[1]).not.toHaveCssClass('disabled');
        
        component.menuItem.items[0].disabled = false;
        component.menuItem.items[1].disabled = true;
        
        fixture.detectChanges();
        
        expect(subEls[0]).not.toHaveCssClass('disabled');
        expect(subEls[1]).toHaveCssClass('disabled');
        
      }));
      
      it('should prevent click event if sub-menu is disabled', async(() => {
        
        component.menuItem.items[0].disabled = true;
        
        component.menuItem.items[0].url = 'localhost:3000';
        
        subEls[0].click();
        
        expect(component.click).toHaveBeenCalled();
        expect(router.navigateByUrl).not.toHaveBeenCalled();
        
      }));
    });
    
  });
});



