import { Directive, ElementRef, Renderer, OnDestroy } from '@angular/core';
import { PageWidthService } from '../core/page-width.service';
import { Subscription } from 'rxjs';

@Directive({
    selector: '[ptContainerSwitcher]'
})
export class ContainerSwitcherDirective implements OnDestroy {
    sub: Subscription;

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    constructor(pageWidth: PageWidthService, private el: ElementRef, private renderer: Renderer) {
        this.setClass(pageWidth.isFluid);
        this.sub = pageWidth.WidthChanged.subscribe((isFluid) => {
            this.setClass(isFluid);
        })
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
