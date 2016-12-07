import { Component, OnDestroy, Input, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { setContainerFluid, setContainer } from './reducer/container.reducer';
import { MenuItem } from './common/apis/menu-item';
import { topNavMenuItems } from './layout/top-nav-menu-items';
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnDestroy {

  switcher = true;
  topMenuItems: MenuItem[] = topNavMenuItems;
  ngOnDestroy(): void {

  }

  title = 'app works!';

  constructor(private store: Store<any>, private http: Http) {

  }

  togglePageWidth() {

    if (this.switcher) {
      this.store.dispatch({ type: setContainerFluid });

    } else {
      this.store.dispatch({ type: setContainer });
    }
    this.switcher = !this.switcher;

  }
}
