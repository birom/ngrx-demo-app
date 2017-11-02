import { Action } from '@ngrx/store';

export const MOVE_CIRCLE = 'MoveCircle';

export class MoveCircleAction implements Action {
  readonly type = MOVE_CIRCLE;

  constructor(public payload: { x: number, y: number }) {
  }
}


export type Actions =
  MoveCircleAction
  ;

