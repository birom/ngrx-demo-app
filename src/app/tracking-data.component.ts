import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { CircleState, getColor, getX, getY } from './state-management/circle.state';

@Component({
  selector: 'app-tracking-data',
  template: `
    <div>
      <span>Coordinate X: {{x$ | async}}</span>
      <span>Coordinate Y: {{y$ | async}}</span>
      <span>Color: {{color$ | async}}</span>
    </div>`,
  styles: []
})
export class TrackingDataComponent {
  x$: Observable<number>;
  y$: Observable<number>;
  color$: Observable<string>;

  constructor(private store: Store<CircleState>) {
    this.x$ = store.select(getX);
    this.y$ = store.select(getY);
    this.color$ = store.select(getColor);
  }
}