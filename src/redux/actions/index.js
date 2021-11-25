import fecthApiToken from '../../services/fetchApiToken';

export const USER_LOGIN = 'USER_LOGIN';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_FAILED = 'REQUEST_API_FAILED';
export const SAVE_TOKEN_IN_LOCALSTORAGE = 'SAVE_TOKEN_IN_LOCALSTORAGE';

export const requestApi = () => ({
  type: REQUEST_API,
});

export const requestApiSuccess = () => ({
  type: REQUEST_API_SUCCESS,
});

export const requestApiFailed = (payload) => ({
  type: REQUEST_API_FAILED,
  payload,
});

export const getPlayerToken = () => async (dispatch) => {
  dispatch(requestApi);
  try {
    const token = await fecthApiToken();
    localStorage.setItem('token', JSON.stringify(token));

    dispatch(requestApiSuccess());
  } catch (error) {
    dispatch(requestApiFailed(error));
  }
};

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});
