/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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

fdescribe('TopNavSubComponent', () => {
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
    fixture = TestBed.createComponent(TopNavSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Button and dropdown rendering', () => {

    it('should render a single link with menuItem\'s label when menuItem has no items', async(() => {
      component.menuItem = menuItemWithoutChildren;
      fixture.detectChanges();

      const el = fixture.nativeElement.querySelector('a');

      expect(el.textContent).toContain(menuItemWithoutChildren.label);
    }));

    it('should not render dropdown when menuItem has no items', async(() => {
      component.menuItem = menuItemWithoutChildren;
      fixture.detectChanges();

      const el = fixture.nativeElement.querySelectorAll('[ngbDropdown]');

      expect(el.length).toBe(0);
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
    }));

    it('should render sub menus with correct labels', async(() => {
      component.menuItem = menuItemWithChildren;
      fixture.detectChanges();

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
      let icon = fixture.nativeElement.querySelectorAll('i');
      expect(icon[0]).toHaveCssClass('fa');
      expect(icon[0]).toHaveCssClass('fa-user');

      component.menuItem.icon = '';
      fixture.detectChanges();
      icon = fixture.nativeElement.querySelectorAll('i');
      expect(icon.length).toBe(0);
      
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
      let router, el;
      function init(){
        component.menuItem = menuItemWithoutChildren;
        component.menuItem.url = url;
        fixture.detectChanges();
        router = fixture.debugElement.injector.get(Router);
        el = fixture.nativeElement.querySelector('a');
      }
      
      it('should navigate to url menuItem has one', async(() => {
        init();
        
        spyOn(component, 'click').and.callThrough();
        spyOn(router, 'navigateByUrl').and.returnValue(null);
        el.click();
        fixture.detectChanges();
    
        expect(component.click).toHaveBeenCalledWith(component.menuItem);
        expect(router.navigateByUrl).toHaveBeenCalledWith(url);
    
      }));
  
      it('should ignore routerLink if there is a url present.', async(() => {
        init();
        component.menuItem.routerLink = ['/home'];
        fixture.detectChanges();
        spyOn(component, 'click').and.callThrough();
        spyOn(router, 'navigateByUrl');
        spyOn(router, 'navigate');
        el.click();
        fixture.detectChanges();
        expect(router.navigateByUrl).toHaveBeenCalledWith(url);
        expect(router.navigate).not.toHaveBeenCalled();
    
      }));
  
      it('should navigate to routerLink if there is no url', async(() => {
        init();
        component.menuItem.routerLink = ['/home'];
        component.menuItem.url = null;
        fixture.detectChanges();
        
        spyOn(component, 'click').and.callThrough();
        spyOn(router, 'navigateByUrl');
        spyOn(router, 'navigate');
        el.click();
        fixture.detectChanges();
        expect(router.navigateByUrl).not.toHaveBeenCalled();
        expect(router.navigate).toHaveBeenCalledWith(component.menuItem.routerLink);
      }));
  
      it('should not navigate to anywhere if there is no url and routerLink', async(() => {
        init();
        component.menuItem.routerLink = null;
        component.menuItem.url = null;
        fixture.detectChanges();
        
        spyOn(component, 'click').and.callThrough();
        spyOn(router, 'navigateByUrl');
        spyOn(router, 'navigate');
        el.click();
        fixture.detectChanges();
        expect(router.navigateByUrl).not.toHaveBeenCalled();
        expect(router.navigate).not.toHaveBeenCalled();
      }));
    });
    describe('Menu with children', () => {
      const url = 'http://localhost:3000/test';
      let router, topEl, subEls;
      function init(){
        component.menuItem = menuItemWithChildren;
        fixture.detectChanges();
        
        router = fixture.debugElement.injector.get(Router);
        
        spyOn(component, 'click').and.callThrough();
        spyOn(router, 'navigateByUrl');
        spyOn(router, 'navigate');
        
        topEl = fixture.nativeElement.querySelector('a.dropdown-toggle');
        subEls = fixture.nativeElement.querySelectorAll('a.dropdown-item');
      }
      
      beforeEach(()=>{
        init();
      });
  
      it('should ignore url or menuItem on the parent', async(() => {
        component.menuItem.url = url;
        fixture.detectChanges();
        
        topEl.click();
  
        fixture.detectChanges();
        
        expect(component.click).not.toHaveBeenCalled();
        
      }));
  
      it('should navigate when clicking sub-menu with url or routerLink', async(() => {
        component.menuItem.items[0].url = url;
        fixture.detectChanges();
        
        subEls[0].click();
        fixture.detectChanges();
        
        expect(component.click).toHaveBeenCalledWith(component.menuItem.items[0])
        expect(router.navigateByUrl).toHaveBeenCalledWith(url);
        
        component.menuItem.items[0].url = null;
        component.menuItem.items[0].routerLink = ['./home'];
        fixture.detectChanges();
        
        subEls[0].click();
        fixture.detectChanges();
  
        expect(component.click).toHaveBeenCalledWith(component.menuItem.items[0]);
        expect(router.navigate).toHaveBeenCalledWith(['./home']);
      }));
  
      it('should ignore routerLink if url is present', async(() => {
        component.menuItem.items[0].url = url;
        component.menuItem.items[0].routerLink = ['./home'];
        fixture.detectChanges();
  
        subEls[0].click();
        fixture.detectChanges();
  
        expect(component.click).toHaveBeenCalledWith(component.menuItem.items[0]);
        expect(router.navigateByUrl).toHaveBeenCalledWith(url);
        expect(router.navigate).not.toHaveBeenCalledWith(['./home']);
      }));
  
      it('should navigate to anywhere if there is no url or routerLink', async(() => {
        subEls[0].click();
        fixture.detectChanges();
        
        expect(component.click).toHaveBeenCalledWith(component.menuItem.items[0]);
        console.log(component.menuItem);
        expect(router.navigateByUrl).not.toHaveBeenCalled();
        expect(router.navigate).not.toHaveBeenCalled();
      }));
      
    });
  });

  describe('menuItem can be disabled', () => {

    describe('menuItem without items', () => {
      it('should disable the menu if disable is true and it toggles', async(() => {
  
        component.menuItem = menuItemWithoutChildren;
        component.menuItem.disabled = true;
        fixture.detectChanges();
        const a = fixture.nativeElement.querySelector('a');
        expect(a).toHaveCssClass('disabled');
  
        component.menuItem.disabled = null;
        fixture.detectChanges();
  
        expect(a).not.toHaveCssClass('disabled');

      }));

      it('should prevent click event if disabled is true', async(() => {

        component.menuItem = menuItemWithoutChildren;
        component.menuItem.disabled = true;
        component.menuItem.url = 'localhost:3000';
        fixture.detectChanges();
        const router = fixture.debugElement.injector.get(Router);
        spyOn(component, 'click').and.callThrough();
        spyOn(router, 'navigateByUrl');
        const a = fixture.nativeElement.querySelector('a');
        a.click();
        fixture.detectChanges();

        expect(component.click).toHaveBeenCalled();
        expect(router.navigateByUrl).not.toHaveBeenCalled();

      }));

    });

    describe('menuItem with items', () => {
     
      it('should ignore disable property of the parent if there is items children', async(() => {
        component.menuItem = menuItemWithChildren;
        component.menuItem.disabled = true;
  
        fixture.detectChanges();
        
        const a = fixture.nativeElement.querySelector('a.dropdown-toggle');
        expect(a).not.toHaveCssClass('disabled');
        
      }));
  
      it('should disable the sub-menu if disable is true and toggles', async(() => {
        component.menuItem = menuItemWithChildren;
        component.menuItem.items[0].disabled = true;
        fixture.detectChanges();
        
        const a = fixture.nativeElement.querySelectorAll('a.dropdown-item');
        
        expect(a[0]).toHaveCssClass('disabled');
        expect(a[1]).not.toHaveCssClass('disabled');
        
        component.menuItem.items[0].disabled = false;
        component.menuItem.items[1].disabled = true;
  
        fixture.detectChanges();
  
        expect(a[0]).not.toHaveCssClass('disabled');
        expect(a[1]).toHaveCssClass('disabled');
    
      }));
  
      it('should prevent click event if sub-menu is disabled', async(() => {
        
      }));
      
    });

  });
});



