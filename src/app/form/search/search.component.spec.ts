/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { By } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { DebugElement, Component } from '@angular/core';
import { Subscription } from 'rxjs';

fdescribe('SearchComponent Isolated', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let inputDebugElement: DebugElement, inputNativeElement: HTMLInputElement;
  const expectedValue = 'Hello!';
  let emittedValue: string;
  let sub: Subscription;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inputDebugElement = fixture.debugElement.query(By.css('input'));
    inputNativeElement = inputDebugElement.nativeElement;
    sub = component.search.subscribe(value => emittedValue = value);
    emittedValue = '';
    inputNativeElement.value = expectedValue;
  });
  
  afterEach(() => {
    sub.unsubscribe();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should emit search event after each keystroke, debouncing 1000ms by default', fakeAsync(() => {
    inputNativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(emittedValue).toBe('');
    tick(999);
    expect(emittedValue).toBe('');
    tick(1);
    expect(emittedValue).toBe(expectedValue);
  }));
  
  it('should clear search text hitting esc key', () => {
    inputNativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    spyOn(component, 'onKeyUp').and.callThrough();
    inputDebugElement.triggerEventHandler('keyup', {key: 'Escape'});
    fixture.detectChanges();
    expect(component.onKeyUp).toHaveBeenCalledWith('Escape');
    expect(inputNativeElement.value).toBe('');
  });
  
  it('should emit search event without debouncing when clicking search button', () => {
    inputNativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    spyOn(component, 'onClick').and.callThrough();
    expect(emittedValue).toBe(''); // debounce, event not emitted yet.
    const iconNativeElement = fixture.debugElement.query(By.css('.input-group-addon')).nativeElement;
    iconNativeElement.click();
    fixture.detectChanges();
    expect(component.onClick).toHaveBeenCalled();
    expect(emittedValue).toBe(expectedValue);
  });
  
  it('should emit search event instantly without debouncing when enter key is pressed', () => {
    inputNativeElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(emittedValue).toBe('');
    inputDebugElement.triggerEventHandler('keyup', {key: 'Enter'});
    fixture.detectChanges();
    expect(emittedValue).toBe(expectedValue);
  });
  
  describe('should not emit the same value twice, spaces at the end and begining are trimmed', () => {
    let count: number;
    beforeEach(() => {
      count = 0;
      sub = component.search.subscribe(value => {
        count++;
        emittedValue = value;
      });
    });
    it('should not emit twice with same value when click twice on the search button', () => {
      component.searchControl.setValue('hello');
      component.onClick();
      expect(count).toBe(1);
      expect(emittedValue).toBe('hello');
      component.onClick();
      expect(count).toBe(1);
      component.searchControl.setValue('different value');
      component.onClick();
      expect(count).toBe(2);
      expect(emittedValue).toBe('different value');
    });
    
    it('should not emit twice with same value when hit Enter key twice', () => {
      component.searchControl.setValue('hello');
      component.onKeyUp('Enter');
      expect(count).toBe(1);
      expect(emittedValue).toBe('hello');
      component.onKeyUp('Enter');
      expect(count).toBe(1);
      component.searchControl.setValue(' hello ');
      component.onKeyUp('Enter');
      expect(count).toBe(1);
      expect(emittedValue).toBe('hello');
      component.searchControl.setValue('different value');
      component.onKeyUp('Enter');
      expect(count).toBe(2);
      expect(emittedValue).toBe('different value');
    });
    
    it('should not emit twice with same value (trimed) on user input after debouncing 1000ms', fakeAsync(() => {
      component.searchControl.setValue('hello');
      tick(1000);
      expect(count).toBe(1);
      expect(emittedValue).toBe('hello');
      component.searchControl.setValue(' hello ');
      tick(1000);
      expect(count).toBe(1);
      expect(emittedValue).toBe('hello');
      component.searchControl.setValue('different value');
      tick(1000);
      expect(count).toBe(2);
      expect(emittedValue).toBe('different value');
    }));
  });
  
});

fdescribe('Search Component in test component', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputDebugElement: DebugElement, inputNativeElement: HTMLInputElement;
  const expectedValue = 'Hello!';
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent, TestComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inputDebugElement = fixture.debugElement.query(By.directive(SearchComponent)).query(By.css('input'));
    inputNativeElement = inputDebugElement.nativeElement;
    spyOn(component, 'search');
    inputNativeElement.value = expectedValue;
  });
  
  it('should debounce the time specified in the Input and call search function with correct value',
    fakeAsync(() => {
      inputNativeElement.dispatchEvent(new Event('input'));
      fixture.detectChanges();
      tick(1400);
      expect(component.search).not.toHaveBeenCalled();
      tick(99);
      expect(component.search).not.toHaveBeenCalled();
      tick(1);
      expect(component.search).toHaveBeenCalledWith(expectedValue);
    }));
});
@Component({
  selector: '',
  template: '<pt-search [debounce]="1500" (search)="search($event)"></pt-search>'
})
class TestComponent {
  search(value: string) {
    
  }
}
