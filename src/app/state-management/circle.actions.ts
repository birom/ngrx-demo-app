import { Action } from '@ngrx/store';

export const MOVE_CIRCLE = 'MoveCircle';
export const CHANGE_COLOR = 'ChangeColor';

export class MoveCircleAction implements Action {
  readonly type = MOVE_CIRCLE;

  constructor(public payload: { x: number, y: number }) {
  }
}

export class ChangeColorAction implements Action {
  readonly type = CHANGE_COLOR;

  constructor(public payload = {}) {
  }
}

export type Actions =
  MoveCircleAction |
  ChangeColorAction
  ;

