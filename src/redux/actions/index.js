import fecthApiToken from '../../services/fetchApiToken';
import fecthApiTrivia from '../../services/fetchApiTrivia';

export const USER_LOGIN = 'USER_LOGIN';
export const SAVE_SCORE = 'SAVE_SCORE';
export const RESET_GAME = 'RESET_GAME';
export const REQUEST_API = 'REQUEST_API';
export const REQUEST_API_SUCCESS = 'REQUEST_API_SUCCESS';
export const REQUEST_API_TRIVIA_SUCCESS = 'REQUEST_API_TRIVIA_SUCCESS';

export const resetGame = (payload) => ({
  type: RESET_GAME,
  payload,
});

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export const saveScore = (payload) => ({
  type: SAVE_SCORE,
  payload,
});

export const requestApi = () => ({
  type: REQUEST_API,
});

export const requestApiSuccess = (payload) => ({
  type: REQUEST_API_SUCCESS,
  payload,
});

export const requestApiTriviaSuccess = (payload) => ({
  type: REQUEST_API_TRIVIA_SUCCESS,
  payload,
});

export const getTriviaData = (token) => async (dispatch) => {
  try {
    const result = await fecthApiTrivia(token);
    dispatch(requestApiTriviaSuccess(result));
  } catch (error) {
    console.error(error);
  }
};

export const getPlayerToken = () => async (dispatch) => {
  dispatch(requestApi());
  try {
    const token = await fecthApiToken();
    dispatch(getTriviaData(token));
    localStorage.setItem('token', JSON.stringify(token));

    dispatch(requestApiSuccess(token));
  } catch (error) {
    console.error(error);
  }
};
