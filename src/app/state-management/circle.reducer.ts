import { CircleState } from './circle.state';
import { Actions, CHANGE_COLOR, MOVE_CIRCLE } from './circle.actions';

const colors = ['red', 'blue', 'green'];
const initalState: CircleState = {
  x: 250,
  y: 250,
  color: 'red'
};

export function circleReducer(state = initalState, action: Actions) {
  let newState;
  switch (action.type) {
    case MOVE_CIRCLE:
      const { x, y } = action.payload;
      newState = Object.assign({}, state, { x, y });
      break;

    case CHANGE_COLOR:
      const color = colors[(colors.indexOf(state.color) + 1) % 3];
      newState = Object.assign({}, state, { color });
      break;

    default:
      newState = state;
  }

  return newState;
}

