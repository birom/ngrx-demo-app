import { CircleState } from './circle.state';
import { Actions, COLOR_CHANGED, MOVE_CIRCLE } from './circle.actions';

const initialState: CircleState = {
  x: 250,
  y: 250,
  color: 'red',
  colorCode: '#ff1c37'
};

export function circleReducer(state = initialState, action: Actions) {
  let newState;
  switch (action.type) {
    case MOVE_CIRCLE:
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

