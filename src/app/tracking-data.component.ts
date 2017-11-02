import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { CircleState, getX, getY } from './state-management/circle.state';

@Component({
  selector: 'app-tracking-data',
  template: `
    <div class="tracking-data">
      <span>Coordinate X: {{x$ | async}}</span>
      <span>Coordinate Y: {{y$ | async}}</span>
    </div>`,
  styles: [`
    .tracking-data {
      border: 1px solid #0000ff;
      width: 500px;
    }
  `]
})
export class TrackingDataComponent {
  x$: Observable<number>;
  y$: Observable<number>;

  constructor(private store: Store<CircleState>) {
    this.x$ = store.select(getX);
    this.y$ = store.select(getY);
  }
}
