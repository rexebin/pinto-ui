import {
  Directive, Input, ElementRef, OnDestroy, OnInit, ComponentFactoryResolver,
  Injector, ComponentRef
} from '@angular/core';
import { TableFilterService, Order, SortParams, TableFilter } from '../table-filter.service';
import { Subscription } from 'rxjs';
import { SortIndicatorComponent } from '../sort-indicator/sort-indicator.component';

@Directive({
  selector: '[ptSortable]',
  host: {
    '(click)': 'onClick()'
  }
})
export class SortableDirective implements OnDestroy, OnInit {
  
  @Input() sortBy: string;
  private _order: Order;
  private _dynamicComponent: ComponentRef<SortIndicatorComponent>;
  
  private _subscription: Subscription;
  
  constructor(private _filterService: TableFilterService, private _elementRef: ElementRef, private _componentFactorResolver: ComponentFactoryResolver, private _injector: Injector) {
  }
  
  ngOnInit(): void {
    if (this._filterService.currentFilter.sortBy === this.sortBy) {
      this._order = this._filterService.currentFilter.order;
    } else {
      this._order = 'desc';
    }
    
    const componentFactory = this._componentFactorResolver.resolveComponentFactory(SortIndicatorComponent);
    this._dynamicComponent = componentFactory.create(this._injector);
    this._elementRef.nativeElement.append(this._dynamicComponent.location.nativeElement);
    
    this._subscription = this._filterService.filter.subscribe(filter => {
      //this._setIcon(filter);
      this._dynamicComponent.instance.isSorted = filter.sortBy === this.sortBy;
      this._dynamicComponent.instance.order = filter.order === 'asc';
      this._dynamicComponent.changeDetectorRef.detectChanges();
    });
  }
  
  onClick() {
    this._order = this._order === 'asc' ? 'desc' : 'asc';
    let filterParam: SortParams = {
      sortBy: this.sortBy,
      order: this._order
    };
    this._filterService.setFilter(filterParam);
  }
  
  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
    this._dynamicComponent.destroy();
  }
  
  //_setIcon(filter: TableFilter){
  //  let el: HTMLElement = this._elementRef.nativeElement.querySelector('i.pt-sort-icon');
  //  if (filter.sortBy !== this.sortBy) {
  //    if (el) {
  //      this._elementRef.nativeElement.removeChild(el);
  //      return;
  //    }
  //    return;
  //  }
  //  let icon: HTMLElement = document.createElement('i');
  //  icon.classList.add('fa', 'pt-sort-icon');
  //  if (filter.order === 'asc')
  //    icon.classList.add('fa-caret-up');
  //  if (filter.order === 'desc')
  //    icon.classList.add('fa-caret-down');
  //
  //  if (!el) {
  //    this._elementRef.nativeElement.appendChild(icon);
  //  } else {
  //    this._elementRef.nativeElement.replaceChild(icon, el);
  //  }
  //
  //}
}
