import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { Router } from '@angular/router';
import { RouterStub, RouterOutletStubComponent, RouterLinkStubDirective } from './test/mocks/router-stubs';
import { FormModule } from './form/form.module';

describe('App: PintoUi', () => {
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        LayoutModule,
        CoreModule,
        FormModule
      ],
      declarations: [
        AppComponent,
        RouterOutletStubComponent,
        RouterLinkStubDirective
      ],
      providers: [{ provide: Router, useClass: RouterStub }]
    });
  });
  let component, fixture;
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });
  
  it('should create the app', async(() => {
    
    expect(component).toBeTruthy();
  }));
  
  it(`should have as title 'app works!'`, async(() => {
    
    expect(component.title).toEqual('app works!');
  }));
  
});
