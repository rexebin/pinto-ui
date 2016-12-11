import { Directive, Input, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { TableFilterService, Order } from '../table-filter.service';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
@Directive({
  selector: '[ptSortable]',
  host: {
    '(click)': 'onClick()'
  }
})
export class SortableDirective implements OnDestroy, OnInit {
  
  @Input() entityName: string;
  @Input() sortBy: string;
  order: Order = 'asc';
  private _subscription: Subscription;
  
  constructor(private filterService: TableFilterService, private elementRef: ElementRef) {
    
  }
  
  ngOnInit(): void {
    this._subscription = this.filterService.filters.subscribe(filters => {
      let el: HTMLElement = this.elementRef.nativeElement.querySelector('i[class=^"fa-caret"');
      let f = _.find(filters, (value) => value.entity === this.entityName);
      if (!f || (f && f.sortBy !== this.sortBy)) {
        if (el) {
          this.elementRef.nativeElement.removeChild(el);
        }
      }
      if (f && f.sortBy === this.sortBy) {
        if (el) {
          if (f.order === 'asc') {
            if (el.classList.contains('fa-caret-down')) {
              el.classList.remove('fa-caret-down');
            }
            el.classList.add('fa-caret-up');
          }
          if (f.order === 'desc') {
            if (el.classList.contains('fa-caret-up')) {
              el.classList.remove('fa-caret-up');
            }
            el.classList.add('fa-caret-down');
          }
        } else {
          if (f.order === 'asc') {
            this.elementRef.nativeElement.appendChild('<i class="fa fa-caret-up"></i>');
          }
          if(f.order === 'desc'){
            this.elementRef.nativeElement.appendChild('<i class="fa fa-caret-down"></i>');
          }
          
        }
        
      }
    });
  }
  
  onClick() {
    let filterParam = {
      entity: this.entityName,
      sortBy: this.sortBy,
      order: this.order
    };
    this.filterService.filter(filterParam);
    
    if (this.order === 'asc') {
      this.order = 'desc';
    } else if (this.order === 'desc') {
      this.order = 'asc';
    }
  }
  
  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
