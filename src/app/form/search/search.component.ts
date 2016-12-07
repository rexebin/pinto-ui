import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
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

  constructor() {
  }

  searchControl = new FormControl('');
  sub: Subscription;

  ngOnInit() {

    this.sub = this.searchControl.valueChanges.debounceTime(500).subscribe(value => {
      this.search.emit(value);
    });
  }

  onClick() {
    // this.search.emit(this.searchControl.);
  }

  onKeyUp(code: string) {
    if (code === 'Escape') {
      this.searchControl.setValue('');
    }
  }

}
