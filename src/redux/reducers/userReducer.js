import { USER_LOGIN } from '../actions';

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
  default:
    return state;
  }
};

export default userReducer;
