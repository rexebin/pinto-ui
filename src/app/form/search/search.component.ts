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
