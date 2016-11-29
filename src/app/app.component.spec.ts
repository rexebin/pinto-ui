import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { containerReducer } from './reducer/container.reducer';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './core/core.module';
import { Router } from '@angular/router';
import { RouterStub } from './test/mocks/router-stubs';

describe('App: PintoUi', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.provideStore({ container: containerReducer }),
        LayoutModule,
        CoreModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{provide: Router, useClass: RouterStub}]

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
