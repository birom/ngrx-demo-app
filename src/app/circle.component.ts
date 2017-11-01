import { Component } from '@angular/core';
import { CircleState, getColorCode, getX, getY } from './state-management/circle.state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-circle',
  template: `
    <div class="circle"
         [ngStyle]="{top: (y$ | async) + 'px', left: (x$ | async) + 'px', 'background-color': colorCode$ | async}">
    </div>`,
  styles: [
      `.circle {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 1px solid #008000;
      position: absolute;
    }`
  ]
})
export class CircleComponent {
  x$: Observable<number>;
  y$: Observable<number>;
  colorCode$: Observable<string>;

  constructor(private store: Store<CircleState>) {
    this.x$ = store.select(getX);
    this.y$ = store.select(getY);
    this.colorCode$ = store.select(getColorCode);
  }
}
