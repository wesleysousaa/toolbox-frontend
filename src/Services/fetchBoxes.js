import {options} from './headerOptions';

const fetchBoxes = async () => {
  const response = await fetch("http://localhost:8080/api/caixa", {
    method: "GET",
    headers: options
  });

  return await response.json();
};

export default fetchBoxes;