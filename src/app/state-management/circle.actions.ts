import { Action } from '@ngrx/store';

export const MOVE_CIRCLE = 'MOVE_CIRCLE';
export const CIRCLE_MOVED = 'CIRCLE_MOVED';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const COLOR_CHANGED = 'COLOR_CHANGED';

export class MoveCircleAction implements Action {
  readonly type = MOVE_CIRCLE;

  constructor(public payload: { x: number, y: number }) {
  }
}

export class CircleMovedAction implements Action {
  readonly type = CIRCLE_MOVED;

  constructor(public payload: { x: number, y: number }) {
  }
}

export class ChangeColorAction implements Action {
  readonly type = CHANGE_COLOR;

  constructor(public payload = {}) {
  }
}

export class ColorChangedAction implements Action {
  readonly type = COLOR_CHANGED;

  constructor(public payload: { color: string, colorCode: string }) {
  }
}

export type Actions =
  MoveCircleAction |
  CircleMovedAction |
  ChangeColorAction |
  ColorChangedAction
  ;

