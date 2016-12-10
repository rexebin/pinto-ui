import { NgModule, ModuleWithProviders } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { BreadCrumbComponent } from './bread-crumb/bread-crumb.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { ContainerSwitcherDirective } from './container-switcher/container-switcher.directive';
import { TopNavSubComponent } from './top-nav-sub/top-nav-sub.component';
import { SharedModule } from '../shared/shared.module';
import { ContainerService } from './container-switcher/container.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    TopNavComponent,
    BreadCrumbComponent,
    FooterComponent,
    ContainerSwitcherDirective,
    TopNavSubComponent,
  ],
  exports: [
    TopNavComponent,
    BreadCrumbComponent,
    FooterComponent,
    ContainerSwitcherDirective
  ]
})
export class LayoutModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LayoutModule,
      providers: [ContainerService]
    }
  }
}
