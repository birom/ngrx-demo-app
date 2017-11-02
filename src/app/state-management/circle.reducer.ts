import { CircleState } from './circle.state';
import { Actions, MOVE_CIRCLE } from './circle.actions';

const initialState: CircleState = {
  x: 250,
  y: 250
};

export function circleReducer(state = initialState, action: Actions) {
  let newState;
  switch (action.type) {
    case MOVE_CIRCLE:
      const { x, y } = action.payload;
      newState = Object.assign({}, state, { x, y });
      break;

    default:
      newState = state;
  }

  return newState;
}

