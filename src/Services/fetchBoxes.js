import {optionsWithToken} from './headerOptions';

const fetchBoxes = async () => {
  const response = await fetch("http://localhost:8080/api/caixa", {
    method: "GET",
    headers: optionsWithToken
  });

  return await response.json();
};

export default fetchBoxes;