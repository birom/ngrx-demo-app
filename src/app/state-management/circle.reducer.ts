import { CircleState } from './circle.state';
import { Actions, CIRCLE_MOVED, COLOR_CHANGED } from './circle.actions';

const initialState: CircleState = {
  x: 250,
  y: 250,
  color: 'red',
  colorCode: '#FF1C37'
};

export function circleReducer(state = initialState, action: Actions) {
  let newState;
  switch (action.type) {
    case CIRCLE_MOVED:
      const { x, y } = action.payload;
      newState = Object.assign({}, state, { x, y });
      break;

    case COLOR_CHANGED:
      const { color, colorCode } = action.payload;
      newState = Object.assign({}, state, { color, colorCode });
      break;

    default:
      newState = state;
  }

  return newState;
}

