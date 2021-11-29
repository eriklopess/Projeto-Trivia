import { USER_LOGIN, SAVE_SCORE } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
  assertions: 0,
  score: 0,
  userIcon: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case USER_LOGIN:
    return {
      ...state,
      name: action.payload.name,
      email: action.payload.email,
      userIcon: action.payload.userIcon,
    };
  case SAVE_SCORE:
    return {
      ...state,
      score: action.payload.score,
      assertions: action.payload.assertions,
    };
  default:
    return state;
  }
};

export default userReducer;
