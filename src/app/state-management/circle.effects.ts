import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import {
  CHANGE_COLOR,
  CircleMovedAction,
  ColorChangedAction,
  MOVE_CIRCLE,
  MoveCircleAction
} from './circle.actions';
import { ColorService } from '../color.service';
import { colors } from './circle.state';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class CircleEffects {

  @Effect()
  moveCircle$ = this.actions$
    .ofType(MOVE_CIRCLE)
    .delay(200)
    .map((action: MoveCircleAction) =>
      new CircleMovedAction(action.payload)
    );

  @Effect()
  changeColor$ = this.actions$
    .ofType(CHANGE_COLOR)
    .scan((acc: number) => acc + 1, 0)
    .map((count: number) => colors[count % 3])
    .switchMap((color: string) =>
      this.colorService
        .getColorCode(color)
        .map((colorCode: string) => [color, colorCode])
    )
    .map(([color, colorCode]) =>
      new ColorChangedAction({ color, colorCode })
    );


  constructor(private actions$: Actions,
              private colorService: ColorService) {
  }
}
