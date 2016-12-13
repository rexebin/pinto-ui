import { Directive, Input, ElementRef, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
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
  order: Order = 'desc';
  private _subscription: Subscription;
  
  constructor(private filterService: TableFilterService, private elementRef: ElementRef) {
    
  }
  
  ngOnInit(): void {
    this._subscription = this.filterService.filters.subscribe(filters => {
      let f = _.find(filters, (value) => value.entity === this.entityName);
      let el: HTMLElement = this.elementRef.nativeElement.querySelector('i.pt-sort-icon');
      if (!f) {
        if (el) {
          this.elementRef.nativeElement.removeChild(el);
          return;
        }
        return;
      }
      
      if (f.sortBy !== this.sortBy) {
        if(el){
          this.elementRef.nativeElement.removeChild(el);
          return;
        }
        return;
      }
      
      let icon: HTMLElement = document.createElement('i');
      icon.classList.add('fa', 'pt-sort-icon');
      if (this.order === 'asc')
        icon.classList.add('fa-caret-up');
      if (this.order === 'desc')
        icon.classList.add('fa-caret-down');
      
      if (!el) {
        this.elementRef.nativeElement.appendChild(icon);
      } else {
        this.elementRef.nativeElement.replaceChild(icon, el);
      }
  
      this.order = f.order;
    });
  }
  
  onClick() {
    this.order = this.order === 'asc' ? 'desc' : 'asc';
    let filterParam = {
      entity: this.entityName,
      sortBy: this.sortBy,
      order: this.order
    };
    this.filterService.filter(filterParam);
  }
  
  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
