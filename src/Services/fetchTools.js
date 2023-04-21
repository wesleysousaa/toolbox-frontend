import {optionsWithToken} from './headerOptions';
const fetchTools = async () => {
  const response = await fetch("http://localhost:8080/api/ferramenta", {
    method: "GET",
    headers: optionsWithToken
  });
  
  return await response.json();
};

export default fetchTools;