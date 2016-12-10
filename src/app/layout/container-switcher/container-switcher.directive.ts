import { Directive, ElementRef, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContainerService } from './container.service';

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

  constructor(private containerService: ContainerService, private el: ElementRef) {
    this._subscription = this.containerService.isFluid.distinctUntilChanged().subscribe(isFluid => {
      this._setClass(isFluid);
    });
  }

  _setClass(isFluid: boolean) {
    if (isFluid) {
      this.el.nativeElement.classList.remove('isFluid');
      this.el.nativeElement.classList.add('isFluid-fluid');
    } else {
      this.el.nativeElement.classList.remove('isFluid-fluid');
      this.el.nativeElement.classList.add('isFluid');
    }
  }
}
