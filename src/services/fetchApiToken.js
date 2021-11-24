const END_POINT = 'https://opentdb.com/api_token.php?command=request';

const fecthApiToken = async () => {
  const response = await fetch(`${END_POINT}`);
  const data = await response.json();

  return data.token;
};

export default fecthApiToken;
