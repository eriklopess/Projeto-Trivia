export const USER_LOGIN = 'USER_LOGIN';

const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
});

export default userLogin;
