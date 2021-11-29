import { USER_LOGIN, SAVE_SCORE } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: '',
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
      score: action.payload,
    };
  default:
    return state;
  }
};

export default userReducer;
