import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ContainerSwitcherDirective } from './container-switcher.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import '../../test/matchers';
import { StoreModule, Store } from '@ngrx/store';
import { ContainerActions } from './container.actions';
import { containerReducer } from './container.reducer';

describe('Directive: ContainerSwitcher', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement;
  let containerActions: ContainerActions;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [StoreModule.provideStore({ container: containerReducer })],
      declarations: [
        ContainerSwitcherDirective,
        TestComponent
      ]
      
    }).createComponent(TestComponent);
    fixture.detectChanges();
    
  });
  
  beforeEach(() => {
    des = fixture.debugElement.query(By.directive(ContainerSwitcherDirective));
    containerActions = new ContainerActions();
  });
  
  it('should add class container by default', async(() => {
    expect(des.nativeElement).toHaveCssClass('container');
    expect(des.nativeElement).not.toHaveCssClass('container-fluid');
  }));
  
  it('should reads the correct value after store dispatched actions', async(() => {
    let store = TestBed.get(Store);
    store.dispatch(containerActions.setContainerFluid());
    fixture.detectChanges();
    expect(des.nativeElement).toHaveCssClass('container-fluid');
    expect(des.nativeElement).not.toHaveCssClass('container');
    store.dispatch(containerActions.setContainer());
    fixture.detectChanges();
    expect(des.nativeElement).not.toHaveCssClass('container-fluid');
    expect(des.nativeElement).toHaveCssClass('container');
  }));
  
});

@Component({
  template: `<div ptContainerSwitcher></div>`
})
class TestComponent {
}
