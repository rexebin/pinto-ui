import { Directive, ElementRef, Renderer, OnDestroy } from '@angular/core';
import { PageWidthService } from '../core/page-width.service';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

interface AppState{
  container: boolean;
}
@Directive({
    selector: '[ptContainerSwitcher]'
})
export class ContainerSwitcherDirective implements OnDestroy {
    sub: Subscription;

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    constructor(private store: Store<AppState>, private el: ElementRef, private renderer: Renderer) {
        this.sub = this.store.map(state => state['container']).distinctUntilChanged().subscribe(isFluid => {
        this.setClass(isFluid);
      });
    }

    setClass(isFluid: boolean) {
        if (isFluid) {
            this.renderer.setElementClass(this.el.nativeElement, 'container', false);
            this.renderer.setElementClass(this.el.nativeElement, 'container-fluid', true);
        } else {
            this.renderer.setElementClass(this.el.nativeElement, 'container-fluid', false);
            this.renderer.setElementClass(this.el.nativeElement, 'container', true);
        }
    }
}
