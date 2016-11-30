import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { FormModule } from './form/form.module';
import { LayoutModule } from './layout/layout.module';

import './rxjs-extensions';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent

    ],
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule.forRoot(),
        AppRoutingModule,
        FormModule,
        LayoutModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
