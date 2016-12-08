import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pt-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  @Output() search = new EventEmitter<string>();
  @Input() debounce = 1000;
  constructor() {
  }
  
  previousValue: string;
  searchControl = new FormControl('');
  sub: Subscription;

  ngOnInit() {
    this.sub = this.searchControl.valueChanges.debounceTime(this.debounce).subscribe(value => {
     this._filterDuplicatedSubmission(value);
    });
  }

  onClick() {
    this._filterDuplicatedSubmission(this.searchControl.value);
  }

  onKeyUp(code: string) {
    if (code === 'Escape') {
      this.searchControl.setValue('');
    }
    
    if(code === 'Enter'){
      this._filterDuplicatedSubmission(this.searchControl.value);
    }
  }
  
  _filterDuplicatedSubmission(value: string){
    let trimmedValue = value.trim();
    if(this.previousValue !== trimmedValue){
      this.search.emit(trimmedValue);
      this.previousValue = trimmedValue;
    }
  }

}
