import { Directive, ElementRef, Renderer, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

interface AppState {
  container: boolean;
}
@Directive({
  selector: '[ptContainerSwitcher]'
})
export class ContainerSwitcherDirective implements OnDestroy {
  _subscription: Subscription;

  ngOnDestroy(): void {
    if(this._subscription){
      this._subscription.unsubscribe();
    }
  }

  constructor(private store: Store<AppState>, private el: ElementRef) {
    this._subscription = this.store.map(state => state['container']).distinctUntilChanged().subscribe(isFluid => {
      this._setClass(isFluid);
    });
  }

  _setClass(isFluid: boolean) {
    if (isFluid) {
      this.el.nativeElement.classList.remove('container');
      this.el.nativeElement.classList.add('container-fluid');
    } else {
      this.el.nativeElement.classList.remove('container-fluid');
      this.el.nativeElement.classList.add('container');
    }
  }
}
