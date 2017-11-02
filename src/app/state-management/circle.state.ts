import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface CircleState {
  x: number;
  y: number;
  color: string;
  colorCode: string;
}

export const getCircleState = createFeatureSelector<CircleState>('circle');
export const getX = createSelector(getCircleState, (state: CircleState) => state.x);
export const getY = createSelector(getCircleState, (state: CircleState) => state.y);
export const getColor = createSelector(getCircleState, (state: CircleState) => state.color);
export const getColorCode = createSelector(getCircleState, (state: CircleState) => state.colorCode);
