import { REQUEST_API, REQUEST_API_SUCCESS, REQUEST_API_TRIVIA_SUCCESS } from '../actions';

const INITIAL_STATE = {
  isLoading: false,
  token: '',
  results: [],
};

const triviaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isLoading: true,
    };
  case REQUEST_API_SUCCESS:
    return {
      ...state,
      token: action.payload,
      isLoading: false,
    };
  case REQUEST_API_TRIVIA_SUCCESS:
    return {
      ...state,
      results: [...action.payload],
      isLoading: false,
    };
  default:
    return state;
  }
};

export default triviaReducer;
