import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CHANGE_COLOR, ColorChangedAction } from './circle.actions';
import { ColorService } from '../color.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class CircleEffects {

  @Effect()
  changeColor$ = this.actions$
    .ofType(CHANGE_COLOR)
    .scan((acc: number) => acc + 1, 0)
    .map((count: number) => count % 3)
    .switchMap((index: number) => this.colorService.getColor(index))
    .map(([color, colorCode]) =>
      new ColorChangedAction({ color, colorCode })
    );


  constructor(private actions$: Actions,
              private colorService: ColorService) {
  }
}
