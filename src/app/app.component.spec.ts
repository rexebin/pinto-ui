/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { containerReducer } from './layout/container-reducer/container.reducer';
import { StoreModule } from '@ngrx/store';
import { By } from '@angular/platform-browser';
import { ContainerSwitcherDirective } from './layout/container-switcher.directive';

describe('App: PintoUi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.provideStore({ container: containerReducer }),
        LayoutModule
      ],
      declarations: [
        AppComponent
      ]

    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a div with top-nav class', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div.top-nav')).toBeTruthy();
  }));

  it('should switch setContainer classes when clicking toggle button', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let el = fixture.nativeElement.querySelector('button');
    expect(el).toHaveCssClass('btn');
    let containerDivs = fixture.nativeElement.querySelectorAll('div[ptContainerSwitcher]');

    el.click();
    fixture.detectChanges();
    containerDivs.forEach(div => {
      expect(div).toHaveCssClass('container-fluid');
    });

    el.click();
    fixture.detectChanges();
    containerDivs.forEach(div => {
      expect(div).toHaveCssClass('container');
    });
  }));

});
