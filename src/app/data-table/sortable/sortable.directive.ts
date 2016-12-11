import { Directive, Input, ElementRef, OnDestroy } from '@angular/core';
import { TableFilterService, Order } from '../table-filter.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[ptSortable]',
  host: {
    '(click)': 'onClick()'
  }
})
export class SortableDirective implements OnDestroy {
  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
  
  @Input() entityName: string;
  @Input() sortBy: string;
  order: Order = 'asc';
  private _subscription: Subscription;
  
  constructor(private filterService: TableFilterService) {
    filterService.filters.subscribe(filters => {
      
    })
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
}
