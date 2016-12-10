import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ContainerSwitcherDirective } from './container-switcher.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import '../../test/matchers';
import { ContainerService } from './container.service';

describe('Directive: ContainerSwitcher', () => {
  let fixture: ComponentFixture<TestComponent>;
  let des: DebugElement;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [],
      declarations: [
        ContainerSwitcherDirective,
        TestComponent
      ],
      providers: [ContainerService]
      
    }).createComponent(TestComponent);
    fixture.detectChanges();
    
  });
  
  beforeEach(() => {
    des = fixture.debugElement.query(By.directive(ContainerSwitcherDirective));
  });
  
  it('should add class isFluid by default', async(() => {
    expect(des.nativeElement).toHaveCssClass('container');
    expect(des.nativeElement).not.toHaveCssClass('container-fluid');
  }));
  
  it('should reads the correct value after store dispatched actions', async(() => {
    let containerService = fixture.debugElement.injector.get(ContainerService);
    containerService.setToContainerFluid();
    fixture.detectChanges();
    expect(des.nativeElement).toHaveCssClass('container-fluid');
    expect(des.nativeElement).not.toHaveCssClass('container');
    containerService.setToContainer();
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
