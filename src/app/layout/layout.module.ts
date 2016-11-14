import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ContainerSwitcherDirective } from './container-switcher.directive';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TopNavComponent,
        BreadCrumbComponent,
        FooterComponent,
        ContainerSwitcherDirective,
    ],
    exports:[
        TopNavComponent,
        BreadCrumbComponent,
        FooterComponent,
        ContainerSwitcherDirective

    ]
})
export class LayoutModule {
}
