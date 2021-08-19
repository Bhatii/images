import {
  ADD_TITLE,
  DRAGGING,
  EDIT,
  HISTORY_CHECK,
  ROTATE_LEFT,
  ROTATE_RIGHT,
  SCALE_DOWN,
  SCALE_UP,
} from "../actions";

const initialState = {
  rotations: 0,
  scale: 0,
  x: 0,
  y: 0,
  title: "",
  isEditing: true,
  history: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case EDIT:
      return {
        ...state,
        isEditing: !state.isEditing,
      };
    case HISTORY_CHECK:
      const history = state.history;
      history.pop();
      return {
        ...state,
        history,
      };
    case DRAGGING:
      return {
        ...state,
        x: action.payload.x,
        y: action.payload.y,
      };
    case ROTATE_LEFT:
      return {
        ...state,
        rotations: state.rotations - 1,
        history: [...state.history, ROTATE_LEFT],
      };
    case ROTATE_RIGHT:
      return {
        ...state,
        rotations: state.rotations + 1,
        history: [...state.history, ROTATE_RIGHT],
      };
    case SCALE_UP:
      return {
        ...state,
        scale: state.scale + 1,
        history: [...state.history, SCALE_UP],
      };
    case SCALE_DOWN:
      return {
        ...state,
        scale: state.scale - 1,
        history: [...state.history, SCALE_DOWN],
      };
    default:
      return state;
  }
};

export default rootReducer;
