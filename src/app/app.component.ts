import { Component, OnDestroy } from '@angular/core';
import { PageWidthService } from './core/page-width.service';
import { Store } from '@ngrx/store';
import { setContainerFluid, setContainer } from './layout/container-reducer/container.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnDestroy {

  switcher = true;

  ngOnDestroy(): void {

  }

  title = 'app works!';

  constructor(private store: Store<any>) {

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
