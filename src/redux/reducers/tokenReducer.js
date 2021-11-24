import { REQUEST_API, REQUEST_API_SUCCESS, REQUEST_API_FAILED } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case REQUEST_API:
    return {
      ...state,
      isFetching: true,
    };
  case REQUEST_API_SUCCESS:
    return {
      ...state,
      isFetching: false,
    };
  case REQUEST_API_FAILED:
    return {
      ...state,
      isFetching: false,
      error: action.payload,
    };
  default:
    return state;
  }
};

export default tokenReducer;
