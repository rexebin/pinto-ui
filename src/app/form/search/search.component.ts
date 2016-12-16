import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  
  @Output() search = new EventEmitter<string>();
  @Input() debounce = 1000;
  
  searchControl = new FormControl('');
  _subscription: Subscription;
  _previousValue: string;
  
  ngOnInit() {
    this._subscription = this.searchControl.valueChanges.debounceTime(this.debounce).subscribe(value => {
      this._search(value);
    });
    // the following would do the same as using _search to filter out repetitive emit.
    // however, there is other place to emit value, therefore, use the same function is a better choice here.
    //.distinctUntilChanged((a, b) => a === b, (v) => v.trim())
    //    .subscribe(value => {
    //      this.search.emit(value.trim());
    //    });
    }
  
  onClick() {
    this._search(this.searchControl.value);
  }
  
  onKeyUp(code: string) {
    if (code === 'Escape') {
      this.searchControl.setValue('');
    }
    
    if (code === 'Enter') {
      this._search(this.searchControl.value);
    }
  }
  
  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
  
  _search(value: string) {
    let trimmedValue = value.trim();
    if (this._previousValue !== trimmedValue) {
      this.search.emit(trimmedValue);
      this._previousValue = trimmedValue;
    }
  }
  
}
