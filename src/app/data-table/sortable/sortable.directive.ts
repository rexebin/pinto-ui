import { Directive, Input, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { TableFilterService, Order, SortParams } from '../table-filter.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[ptSortable]',
  host: {
    '(click)': 'onClick()'
  }
})
export class SortableDirective implements OnDestroy, OnInit {
  
  @Input() sortBy: string;
  private _order: Order;
  
  private _subscription: Subscription;
  
  constructor(private filterService: TableFilterService, private elementRef: ElementRef) {
  }
  
  ngOnInit(): void {
    if (this.filterService.currentFilter.sortBy === this.sortBy) {
      this._order = this.filterService.currentFilter.order;
    } else {
      this._order = 'desc';
    }
    this._subscription = this.filterService.filter.subscribe(filter => {
      let el: HTMLElement = this.elementRef.nativeElement.querySelector('i.pt-sort-icon');
      if (filter.sortBy !== this.sortBy) {
        if (el) {
          this.elementRef.nativeElement.removeChild(el);
          return;
        }
        return;
      }
      let icon: HTMLElement = document.createElement('i');
      icon.classList.add('fa', 'pt-sort-icon');
      if (filter.order === 'asc')
        icon.classList.add('fa-caret-up');
      if (filter.order === 'desc')
        icon.classList.add('fa-caret-down');
      
      if (!el) {
        this.elementRef.nativeElement.appendChild(icon);
      } else {
        this.elementRef.nativeElement.replaceChild(icon, el);
      }
      
    });
  }
  
  onClick() {
    this._order = this._order === 'asc' ? 'desc' : 'asc';
    let filterParam: SortParams = {
      sortBy: this.sortBy,
      order: this._order
    };
    this.filterService.setFilter(filterParam);
  }
  
  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
