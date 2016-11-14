/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ContainerSwitcherDirective } from './container-switcher.directive';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { PageWidthService } from '../core/page-width.service';
import '../test/matchers';
beforeEach(() => {
    jasmine.addMatchers({
        toHaveCssClass: function (util, customEqualityTests) {
            return { compare: buildError(false), negativeCompare: buildError(true) };

            function buildError(isNot: boolean) {
                return function (actual: HTMLElement, className: string) {
                    return {
                        pass: actual.classList.contains(className) === !isNot,
                        get message() {
                            return `Expected ${actual.outerHTML} ${isNot ? 'not ' : ''}to contain the CSS class "${className}"`;
                        }
                    };
                };
            }
        }
    });
});

describe('Directive: ContainerSwitcher', () => {
    let fixture: ComponentFixture<TestComponent>;
    let des: DebugElement[];
    beforeEach(() => {
        fixture = TestBed.configureTestingModule({
            declarations: [
                ContainerSwitcherDirective,
                TestComponent
            ],
            providers: [PageWidthService]
        }).createComponent(TestComponent);
        fixture.detectChanges();
        des = fixture.debugElement.queryAll(By.directive(ContainerSwitcherDirective));
    });
    it('should have one affected element', () => {
        expect(des.length).toBe(1);
    });

    it('should add class container by default', async(() => {
        expect(<HTMLDivElement>des[0].nativeElement).toHaveCssClass('container');
        expect(<HTMLDivElement>des[0].nativeElement).not.toHaveCssClass('container-fluid');
    }));

    it('should reads the correct value from PageWidthService', async(() => {
        let pageWidthService = TestBed.get(PageWidthService);
        pageWidthService.isFluid = true;
        fixture.detectChanges();
        expect(<HTMLDivElement>des[0].nativeElement).toHaveCssClass('container-fluid');
        expect(<HTMLDivElement>des[0].nativeElement).not.toHaveCssClass('container');
    }));

});

@Component({
    template: `<div ptContainerSwitcher></div>`
})
class TestComponent {
}