/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import {SearchComponent} from './search.component';
import {By} from "@angular/platform-browser";

fdescribe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let inputEl: HTMLInputElement;
  let spySearchEvent: jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    spySearchEvent = spyOn(component, 'search');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search event after each keystroke, debouncing 500ms', fakeAsync(() => {
    inputEl.value = 'hello!';
    fixture.detectChanges();
    expect(component.search).not.toHaveBeenCalled();
    tick(500);
    fixture.detectChanges();
    expect(component.search).toHaveBeenCalledWith(inputEl.value);
  }));

  it('should clear search text hitting esc key', async(() => {

  }));

  it('should emit search event when clicking search button', async(() => {

  }));

  it('should emit search event instantly without debouncing when enter key is pressed', async(() => {

  }));
});
