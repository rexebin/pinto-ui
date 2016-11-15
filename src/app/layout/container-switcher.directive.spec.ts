import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ContainerSwitcherDirective } from './container-switcher.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import '../test/matchers';
import { StoreModule, Store } from '@ngrx/store';
import { containerReducer, setContainer, setContainerFluid } from '../reducer/container.reducer';


describe('Directive: ContainerSwitcher', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement[];
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [StoreModule.provideStore({ container: containerReducer })],
      declarations: [
        ContainerSwitcherDirective,
        TestComponent
      ]

    }).createComponent(TestComponent);
    fixture.detectChanges();
    des = fixture.debugElement.queryAll(By.directive(ContainerSwitcherDirective));
  });

  it('should add class setContainer by default', async(() => {
    expect(<HTMLDivElement>des[0].nativeElement).toHaveCssClass('container');
    expect(<HTMLDivElement>des[0].nativeElement).not.toHaveCssClass('container-fluid');
  }));

  it('should reads the correct value after store dispatched actions', async(() => {
    let store = TestBed.get(Store);
    store.dispatch({ type: setContainerFluid });
    fixture.detectChanges();
    expect(<HTMLDivElement>des[0].nativeElement).toHaveCssClass('container-fluid');
    expect(<HTMLDivElement>des[0].nativeElement).not.toHaveCssClass('container');
    store.dispatch({ type: setContainer });
    fixture.detectChanges();
    expect(<HTMLDivElement>des[0].nativeElement).not.toHaveCssClass('container-fluid');
    expect(<HTMLDivElement>des[0].nativeElement).toHaveCssClass('container');
  }));

});

@Component({
  template: `<div ptContainerSwitcher></div>`
})
class TestComponent {
}
