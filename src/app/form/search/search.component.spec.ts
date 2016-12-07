/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import {SearchComponent} from './search.component';
import {By} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";

fdescribe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let inputEl: HTMLInputElement;
  let spySearchEvent: jasmine.Spy;

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
    inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search event after each keystroke, debouncing 500ms', fakeAsync(() => {
    const expected = 'hello!';
    let emittedValue = '';
    let sub = component.search.subscribe(value => emittedValue = value);
    inputEl.value = expected;
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(emittedValue).toBe('');
    tick(500);
    fixture.detectChanges();
    expect(emittedValue).toBe(expected);
    sub.unsubscribe();
  }));

  it('should clear search text hitting esc key', async(() => {

  }));

  it('should emit search event without debouncing when clicking search button', async(() => {

  }));

  it('should emit search event instantly without debouncing when enter key is pressed', async(() => {

  }));
});
