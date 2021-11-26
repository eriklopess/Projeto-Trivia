const END_POINT = 'https://opentdb.com/api.php?amount=5&token=';

const fecthApiTrivia = async (token) => {
  const response = await fetch(`${END_POINT}${token}`);
  const { results } = await response.json();

  return results;
};

export default fecthApiTrivia;
