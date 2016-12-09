import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { NgbModule, NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { containerReducer } from '../layout/container-switcher/container.reducer';
import { DashboardComponent } from './dashboard/dashboard.component';

/**
 * CoreModule should be providers only module, a single place to host root providers.
 * CoreModule may declare components for AppComponent only, only to clean up the ./app folder.
 */
@NgModule({
  imports: [
    NgbModule.forRoot(),
    StoreModule.provideStore({ container: containerReducer })
  ],
  exports: [
    NgbModule,
    StoreModule,
    DashboardComponent
  ],
  providers: [],
  declarations: [DashboardComponent],
})

export class CoreModule {
  
  // Prevent core module to be imported in modules other than the root AppModule.
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
  
  // allow AppModule to pass parameters to setup provider customisation.
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        
        //{provide: UserServiceConfig, useValue: config }
      ]
    };
  }
}
