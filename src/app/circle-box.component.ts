import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChangeColorAction, MoveCircleAction } from './state-management/circle.actions';
import { CircleState } from './state-management/circle.state';

@Component({
  selector: 'app-circle-box',
  template: `
    <div class="circle-box" (mousemove)="move($event)" (click)="changeColor($event)">
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

  changeColor(e: any) {
    this.store.dispatch(new ChangeColorAction());
  }

  move(e: MouseEvent) {
    this.store.dispatch(new MoveCircleAction({ x: e.clientX, y: e.clientY }));
  }
}
