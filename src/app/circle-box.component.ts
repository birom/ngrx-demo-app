import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { MoveCircleAction } from './state-management/circle.actions';
import { CircleState } from './state-management/circle.state';

@Component({
  selector: 'app-circle-box',
  template: `
    <div class="circle-box" (mousemove)="move($event)">
    </div>`,
  styles: [
      `.circle-box {
      border: 1px solid #ff0000;
      height: 500px;
      width: 500px;
    }`
  ]
})
export class CircleBoxComponent {
  constructor(private store: Store<CircleState>) {
  }

  move(e: MouseEvent) {
    this.store.dispatch(new MoveCircleAction({ x: e.clientX, y: e.clientY }));
  }
}
