import { Component } from '@angular/core';
import { PageWidthService } from './core/page-width.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    title = 'app works!';
    constructor(private pageWidth: PageWidthService){

    }

    togglePageWidth(){
        this.pageWidth.isFluid = !this.pageWidth.isFluid;
    }
}
