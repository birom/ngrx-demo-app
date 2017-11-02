import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CircleState {
  x: number;
  y: number;
}

export const getCircleState = createFeatureSelector<CircleState>('circle');
export const getX = createSelector(getCircleState, (state: CircleState) => state.x);
export const getY = createSelector(getCircleState, (state: CircleState) => state.y);
