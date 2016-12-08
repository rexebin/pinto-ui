/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SearchComponent } from './search.component';
import { By } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { DebugElement } from '@angular/core';
import { Subscription } from 'rxjs';

fdescribe('SearchComponent', () => {
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
  });
  
  afterEach(() => {
    sub.unsubscribe();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search event after each keystroke, debouncing 500ms', fakeAsync(() => {
    inputNativeElement.value = expectedValue;
    inputDebugElement.triggerEventHandler('input', {target: inputNativeElement});
    fixture.detectChanges();
    expect(emittedValue).toBe('');
    tick(500);
    fixture.detectChanges();
    expect(emittedValue).toBe(expectedValue);
    sub.unsubscribe();
  }));

  it('should clear search text hitting esc key', () => {
    spyOn(component, 'onKeyUp').and.callThrough();
    inputNativeElement.value = expectedValue;
    inputDebugElement.triggerEventHandler('input', {target: inputNativeElement});
    fixture.detectChanges();
    inputDebugElement.triggerEventHandler('keyup', {keyCode: 'Escape'});
    fixture.detectChanges();
    expect(component.onKeyUp).toHaveBeenCalledWith('Escape');
    expect(inputNativeElement.value).toBe('');
  });

  it('should emit search event without debouncing when clicking search button', () => {
    spyOn(component, 'onClick').and.callThrough();
    inputNativeElement.value = expectedValue;
    inputDebugElement.triggerEventHandler('input', {target: inputNativeElement});
    fixture.detectChanges();
    expect(emittedValue).toBe(''); // debounce, event not emitted yet.
    const iconDebugElement = fixture.debugElement.query(By.css('.input-group-addon'));
    iconDebugElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.onClick).toHaveBeenCalled();
    expect(emittedValue).toBe(expectedValue);
  });

  it('should emit search event instantly without debouncing when enter key is pressed', () => {
    inputNativeElement.value = expectedValue;
    inputDebugElement.triggerEventHandler('input', {target: inputNativeElement});
    fixture.detectChanges();
    expect(emittedValue).toBe('');
    inputDebugElement.triggerEventHandler('keyup', {keyCode: 'Enter'});
    fixture.detectChanges();
    expect(emittedValue).toBe(expectedValue);
  });
});
