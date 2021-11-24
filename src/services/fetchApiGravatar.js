import md5 from 'crypto-js/md5';

const END_POINT = 'https://www.gravatar.com/avatar/';

const fecthApi = async (email) => {
  const hash = md5(email).toString();
  console.log(hash);
  const response = await fetch(`${END_POINT}${hash}`);
  console.log(response);
  // const data = await response.json();
  // console.log(data);
  return response;
};

export default fecthApi;
